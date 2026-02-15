import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function routeToHeader(path: string) {
  return (
    path
      .match(/[^/]+/g) // extract segments
      ?.map((seg) =>
        seg
          .replace(/[-_]/g, ' ') // optional: handle kebab/snake
          .replace(/\b\w/g, (c) => c.toUpperCase())
      )
      .join(' / ') || 'Unknown Header'
  )
}
