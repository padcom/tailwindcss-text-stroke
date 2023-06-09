import plugin from 'tailwindcss/plugin'

export default plugin(({ addComponents }) => {
  // text-stroke-{inherited, none}
  addComponents({
    '.text-stroke-inherited': { '-webkit-text-stroke': 'inherited' },
    '.text-stroke-none': { '-webkit-text-stroke': '0' },
  })

  // text-stroke-[100..900]
  const components = Array
    .from(new Array(9), (x, index) => ({
      [`.text-stroke-${(index + 1) * 100}`]: { '-webkit-text-stroke': `0.${((index + 1) * 2).toString().padStart(2, '0')}ex` }
    }))
    .reduce((acc, item) => ({ ...acc, ...item }), {})

  addComponents(components)
})
