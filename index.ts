import plugin from 'tailwindcss/plugin'

export default plugin(({ addComponents }) => {
  const components = {
    '.text-stroke-inherited': { '-webkit-text-stroke': 'inherited' },
    '.text-stroke-none': { '-webkit-text-stroke': '0' },
    '.text-stroke-100': { '-webkit-text-stroke': '0.02ex' },
    '.text-stroke-200': { '-webkit-text-stroke': '0.04ex' },
    '.text-stroke-300': { '-webkit-text-stroke': '0.06ex' },
    '.text-stroke-400': { '-webkit-text-stroke': '0.08ex' },
    '.text-stroke-500': { '-webkit-text-stroke': '0.10ex' },
    '.text-stroke-600': { '-webkit-text-stroke': '0.12ex' },
    '.text-stroke-700': { '-webkit-text-stroke': '0.14ex' },
    '.text-stroke-800': { '-webkit-text-stroke': '0.16ex' },
    '.text-stroke-900': { '-webkit-text-stroke': '0.18ex' },
  }

  addComponents(components)
})
