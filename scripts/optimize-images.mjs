import sharp from 'sharp'
import { readFile, writeFile, stat } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const targets = [
  { file: 'mammoth-camping.jpeg', maxW: 2000, quality: 80 },
  { file: 'headshot.jpg', maxW: 1400, quality: 82 },
  { file: 'pumpkin-patch.jpg', maxW: 2000, quality: 80 },
]

const format = (n) => `${(n / 1024).toFixed(1)} KB`

for (const t of targets) {
  const path = join(publicDir, t.file)
  const buf = await readFile(path)
  const before = (await stat(path)).size

  const image = sharp(buf, { failOn: 'none' })
  const meta = await image.metadata()
  const resized = meta.width && meta.width > t.maxW ? image.resize({ width: t.maxW }) : image

  const out = await resized
    .jpeg({ quality: t.quality, mozjpeg: true, progressive: true })
    .toBuffer()

  await writeFile(path, out)
  const after = out.length
  const savings = (((before - after) / before) * 100).toFixed(1)
  console.log(
    `${t.file}: ${format(before)} → ${format(after)}  (-${savings}%, ${meta.width}×${meta.height})`,
  )
}
