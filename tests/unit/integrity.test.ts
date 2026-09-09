import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { contact } from '@/content/contact'
import { site } from '@/content/site'

const ROOT = path.resolve(import.meta.dirname, '../..')

function listSource(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry)
    if (statSync(full).isDirectory()) {
      listSource(full, acc)
    } else if (entry.endsWith('.tsx')) {
      acc.push(full)
    }
  }
  return acc
}

const sourceCode = listSource(path.join(ROOT, 'src'))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n')

describe('intégrité des contenus', () => {
  it('chaque ancre de navigation correspond à un id existant', () => {
    for (const item of site.nav) {
      const id = item.href.replace(/^#/, '')
      expect(sourceCode.includes(`id="${id}"`), `id="${id}" introuvable dans le code`).toBe(
        true,
      )
    }
  })

  it('les ids de sections sont uniques', () => {
    const ids = [...sourceCode.matchAll(/id="([^"]+)"/g)].map((match) => match[1])
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index)
    expect(duplicates).toEqual([])
  })

  it('le CV référencé par site.resumeHref existe dans public/', () => {
    expect(site.resumeHref.startsWith('/')).toBe(true)
    expect(existsSync(path.join(ROOT, 'public', site.resumeHref.slice(1)))).toBe(true)
  })

  it('les URLs sociales sont des https valides', () => {
    for (const [key, value] of Object.entries(site.socials)) {
      const url = new URL(value.href)
      expect(url.protocol, key).toBe('https:')
      expect(url.hostname.length).toBeGreaterThan(0)
    }
  })

  it('le mailto du contact correspond à l’adresse affichée', () => {
    expect(contact.email.href).toBe(`mailto:${contact.email.value}`)
  })
})