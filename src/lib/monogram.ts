/**
 * Géométrie du monogramme signature « AB » — le B partage l'épine verticale
 * du A. Les chemins sont partagés entre le composant Monogram (Header/Footer),
 * l'animation du Hero et les exports statiques.
 */
export const MONOGRAM_PATH = {
  viewBox: '0 0 44 44',
  strokeWidth: 2,
  add: {
    leg: 'M12 37 L21 7',
    crossbar: 'M13.5 23 L21 23',
  },
  b: {
    spine: 'M21 7 L21 37',
    bowlTop: 'M21 7 L24.5 7 C28.2 7 30.8 9.7 30.8 13.2 C30.8 16.6 28.2 19.2 24.5 19.2 L21 19.2',
    barMid: 'M21 21.5 L24.5 21.5',
    bowlBottom: 'M21 24.5 L25 24.5 C29 24.5 31.8 27.3 31.8 31 C31.8 34.7 29 37.5 25 37.5 L21 37.5',
  },
  register: 'M34 6 L38 6 M38 6 L38 10',
} as const