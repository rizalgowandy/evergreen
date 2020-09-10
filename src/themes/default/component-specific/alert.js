function getAlertStyles(theme, props) {
  const { intents } = theme.tokens
  const { intent } = props

  const base = {
    borderRadius: '8px',
    borderWidth: '1px',
    borderStyle: 'solid',
    // 15 instead of 16 in order to maintain height with 1px border
    padding: '15px',
    boxSizing: 'border-box'
  }

  return {
    ...intents[intent],
    ...base
  }
}

export default getAlertStyles
