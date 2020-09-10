import get from 'lodash.get'
/**
 * Helper function that, given a theme, resolves
 * any of the references values on the theme. This allows for
 * consumers to reference tokens via a string reference without
 * the introduction of a circular dependency
 */
function resolveThemeValues(theme, styleObj) {
  const resolved = { base: {}, appearances: {} }
  const baseStyles = styleObj.base
  const appearances = styleObj.appearances

  for (const key in baseStyles) {
    const themePathOrDeclaration = baseStyles[key]
    const resolvedValue = get(
      theme,
      themePathOrDeclaration,
      themePathOrDeclaration
    )
    resolved['base'][key] = resolvedValue
  }

  for (const appearance in appearances) {
    const appearanceStyles = appearances[appearance]
    resolved.appearances[appearance] = {}
    for (const key in appearanceStyles) {
      // Underscores are reserved for our mapping of pseudoselectors internally, so
      // these keysare considered top-level CSS properties for a particular appearance.
      if (!key.startsWith('_')) {
        const themePathOrDeclaration = appearanceStyles[key]
        const resolvedValue = get(
          theme,
          themePathOrDeclaration,
          themePathOrDeclaration
        )
        resolved['appearances'][appearance][key] = resolvedValue
      } else {
        const stateSpecificStyles = appearanceStyles[key]
        resolved['appearances'][appearance][key] = {}
        for (const property in stateSpecificStyles) {
          // ...and repeat
          const themePathOrDeclaration = stateSpecificStyles[property]
          const resolvedValue = get(
            theme,
            themePathOrDeclaration,
            themePathOrDeclaration
          )
          resolved['appearances'][appearance][key][property] = resolvedValue
        }
      }
    }
  }

  return resolved
}

export { resolveThemeValues }
