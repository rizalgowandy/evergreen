function getAlertStyles(theme, props) {
  const {
    tokens: { intents },
    scales
  } = theme

  const { intent } = props

  const borderColor = intents[intent].border

  return {
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`,
    borderLeft: `2px solid ${borderColor}`,
    backgroundColor: 'white'
  }
}

export default getAlertStyles
