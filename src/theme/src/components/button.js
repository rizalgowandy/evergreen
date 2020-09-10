import get from 'lodash.get'
import { majorScale, minorScale } from '../../../scales'
import { resolveThemeValues } from '../helpers'
import { controlStyles } from '../shared'

export default function getButtonStyles(theme) {
  const { tokens, buttons } = theme
  const disabled = controlStyles._disabled

  const resolvedStyles = resolveThemeValues(theme, buttons)

  return {
    baseStyle: {
      ...resolvedStyles.base,
      WebkitFontSmoothing: 'antialiased',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      verticalAlign: 'middle',
      textDecoration: 'none',
      outline: 'none',
      cursor: 'pointer',
      '&::-moz-focus-inner ': {
        border: 0
      }
    },

    appearances: {
      ...resolvedStyles.appearances
    },

    sizes: {
      small: {
        ...tokens.text[300],
        height: get(theme, 'buttons.sizes.small'),
        minWidth: get(theme, 'buttons.sizes.small'),
        lineHeight: `${get(theme, 'buttons.sizes.small')}px`,
        paddingLeft: minorScale(3),
        paddingRight: minorScale(3)
      },
      medium: {
        ...tokens.text[300],
        height: get(theme, 'buttons.sizes.medium'),
        minWidth: get(theme, 'buttons.sizes.medium'),
        lineHeight: `${get(theme, 'buttons.sizes.medium')}px`,
        paddingLeft: majorScale(2),
        paddingRight: majorScale(2)
      },
      large: {
        ...tokens.text[400],
        height: get(theme, 'buttons.sizes.large'),
        minWidth: get(theme, 'buttons.sizes.large'),
        lineHeight: `${get(theme, 'buttons.sizes.large')}px`,
        paddingLeft: minorScale(5),
        paddingRight: minorScale(5)
      }
    }
  }
}
