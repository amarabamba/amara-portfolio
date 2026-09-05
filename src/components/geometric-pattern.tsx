import { cn } from '@/lib/utils'

type GeometricPatternProps = {
  className?: string
}

/**
 * Motif géométrique subtil inspiré de l'identité visuelle ouest-africaine
 * (Côte d'Ivoire). Utiliser avec parcimonie, exclusivement comme décor.
 * Décoratif : rendu masqué pour les lecteurs d'écran.
 */
export function GeometricPattern({ className }: GeometricPatternProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="amara-geometric"
          width="64"
          height="64"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M32 8 L56 32 L32 56 L8 32 Z"
            fill="none"
            stroke="var(--line)"
            strokeWidth="1"
          />
          <path
            d="M32 20 L44 32 L32 44 L20 32 Z"
            fill="var(--surface)"
            stroke="var(--line-strong)"
            strokeWidth="1"
          />
          <circle cx="32" cy="32" r="3" fill="var(--ember-soft)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#amara-geometric)" />
    </svg>
  )
}
