import { GoogleGenAI } from '@google/genai'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// ─── Available models ────────────────────────────────────────────────────────
const MODELS = {
  'nano-banana':      'gemini-2.5-flash-image',           // fast, cheap (~$0.02/img)
  'nano-banana-2':    'gemini-3.1-flash-image-preview',   // faster + higher quality (~$0.03/img)
  'nano-banana-pro':  'gemini-3-pro-image-preview',       // best quality (~$0.06/img)
  'imagen-fast':      'imagen-4.0-fast-generate-001',     // Imagen 4 fast (~$0.02/img)
  'imagen':           'imagen-4.0-generate-001',          // Imagen 4 standard (~$0.04/img)
  'imagen-ultra':     'imagen-4.0-ultra-generate-001',    // Imagen 4 ultra (~$0.06/img)
}

const DEFAULT_MODEL = 'nano-banana-2'

// ─── Parse args ──────────────────────────────────────────────────────────────
const apiKey = process.env.GEMINI_API_KEY
if (!apiKey) {
  console.error('Error: GEMINI_API_KEY not found in environment')
  process.exit(1)
}

const args = process.argv.slice(2)

// Optional --model flag: node generate-image.mjs --model nano-banana-pro "my prompt"
let modelKey = DEFAULT_MODEL
let promptArgs = args

const modelFlagIdx = args.indexOf('--model')
if (modelFlagIdx !== -1) {
  modelKey = args[modelFlagIdx + 1]
  promptArgs = args.filter((_, i) => i !== modelFlagIdx && i !== modelFlagIdx + 1)
}

const modelId = MODELS[modelKey]
if (!modelId) {
  console.error(`Unknown model "${modelKey}". Available models:\n${Object.keys(MODELS).map(k => `  --model ${k}  →  ${MODELS[k]}`).join('\n')}`)
  process.exit(1)
}

const prompt = promptArgs.join(' ')
if (!prompt) {
  console.error('Usage: node scripts/generate-image.mjs [--model <model>] <your prompt here>')
  console.error(`\nAvailable models:\n${Object.keys(MODELS).map(k => `  --model ${k}  →  ${MODELS[k]}`).join('\n')}`)
  process.exit(1)
}

// ─── Generate ─────────────────────────────────────────────────────────────────
const ai = new GoogleGenAI({ apiKey })

console.log(`Model:  ${modelKey} (${modelId})`)
console.log(`Prompt: "${prompt}"`)
console.log('Generating...')

const response = await ai.models.generateContent({
  model: modelId,
  contents: prompt,
  config: { responseModalities: ['TEXT', 'IMAGE'] },
})

const parts = response.candidates?.[0]?.content?.parts ?? []
let saved = false

for (const part of parts) {
  if (part.inlineData?.data) {
    const buffer = Buffer.from(part.inlineData.data, 'base64')
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
    const filename = `generated-${timestamp}.png`
    const outputDir = path.join(__dirname, '..', 'public', 'generated')

    fs.mkdirSync(outputDir, { recursive: true })
    const outputPath = path.join(outputDir, filename)
    fs.writeFileSync(outputPath, buffer)

    console.log(`✓ Saved: public/generated/${filename}`)
    saved = true
    break
  }
}

if (!saved) {
  const text = parts.find(p => p.text)?.text
  console.error('No image returned.' + (text ? ` Model said: ${text}` : ''))
  process.exit(1)
}
