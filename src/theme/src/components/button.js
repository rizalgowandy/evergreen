import get from 'lodash.get'
import { majorScale, minorScale } from '../../../scales'
import { controlStyles } from '../shared'

export default function getButtonStyles(theme) {
  const { tokens } = theme
  const disabled = controlStyles._disabled

  // Takes variants from user land, and re-shapes the input object
  // into what `useStyleConfig` should expect.
  const themedAppearances =
    theme.buttons && theme.buttons.appearances
      ? Object.keys(theme.buttons.appearances).reduce(
          (shapedAppearances, appearance) => {
            const { base, hover, active, focus } = theme.buttons.appearances[
              appearance
            ]
            shapedAppearances[appearance] = {
              ...base,
              _hover: hover,
              _active: active,
              _focus: focus
            }

            return shapedAppearances
          },
          {}
        )
      : {}

  return {
    baseStyle: {
      WebkitFontSmoothing: 'antialiased',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      verticalAlign: 'middle',
      textDecoration: 'none',
      fontFamily: tokens.fontFamilies.ui,
      border: '1px solid transparent',
      borderRadius: tokens.borderRadius,
      outline: 'none',
      cursor: 'pointer',
      '&::-moz-focus-inner ': {
        border: 0
      }
    },

    appearances: {
      primary: {
        background: get(
          theme,
          'buttons.primary.background',
          tokens.primary.base
        ),
        border: `1px solid ${get(
          theme,
          'buttons.primary.border',
          tokens.primary.border
        )}`,
        color: get(theme, 'buttons.primary.text', tokens.primary.text),
        _disabled: {
          ...disabled,
          background: get(
            theme,
            'buttons.primary.disabled.background',
            tokens.primary.disabled
          ),
          borderColor: get(
            theme,
            'buttons.primary.disabled.background',
            tokens.primary.disabled
          )
        },

        _hover: {
          background: get(
            theme,
            'buttons.primary.hover.background',
            tokens.primary.hover
          ),
          borderColor: get(
            theme,
            'buttons.primary.hover.background',
            tokens.primary.hover
          )
        },

        _focus: {
          background: get(
            theme,
            'buttons.primary.focus.background',
            tokens.primary.focus
          ),
          borderColor: get(
            theme,
            'buttons.primary.focus.background',
            tokens.primary.focus
          ),
          boxShadow: `0 0 0 ${tokens.focus.width}px ${tokens.focus.color}`
        },

        _active: {
          background: get(
            theme,
            'buttons.primary.active.background',
            tokens.primary.active
          )
        },
        _focusAndActive: {}
      },
      default: {
        background: get(
          theme,
          'buttons.default.background',
          tokens.default.base
        ),
        border: `1px solid ${get(
          theme,
          'buttons.default.border',
          tokens.default.border
        )}`,
        color: get(theme, 'buttons.default.border', tokens.default.text),

        _disabled: {
          ...disabled,
          color: get(
            theme,
            'buttons.default.disabled.text',
            tokens.default.disabled
          ),
          borderColor: get(
            theme,
            'buttons.default.disabled.border',
            tokens.default.disabled
          )
        },

        _hover: {
          borderColor: get(
            theme,
            'buttons.default.hover.border',
            tokens.default.borderDarker
          ),
          background: get(
            theme,
            'buttons.default.hover.border',
            tokens.default.hover
          )
        },

        _focus: {
          boxShadow: `0 0 0 ${tokens.focus.width}px ${tokens.focus.color}`
        },

        _active: {
          background: get(
            theme,
            'buttons.default.active.background',
            tokens.default.active
          )
        },
        _focusAndActive: {}
      },
      destructive: {
        background: get(
          theme,
          'buttons.destructive.background',
          tokens.destructive.base
        ),
        border: `1px solid ${get(
          theme,
          'buttons.destructive.border',
          tokens.destructive.border
        )}`,
        color: get(theme, 'buttons.destructive.text', tokens.destructive.text),

        _disabled: {
          ...disabled,
          background: get(
            theme,
            'buttons.destructive.disabled.background',
            tokens.destructive.disabled
          ),
          borderColor: get(
            theme,
            'buttons.destructive.disabled.border',
            tokens.destructive.disabled
          )
        },

        _hover: {
          background: get(
            theme,
            'buttons.destructive.hover.background',
            tokens.destructive.hover
          ),
          borderColor: get(
            theme,
            'buttons.destructive.hover.border',
            tokens.destructive.hover
          )
        },

        _focus: {
          background: get(
            theme,
            'buttons.destructive.focus.background',
            tokens.destructive.focus
          ),
          borderColor: get(
            theme,
            'buttons.destructive.focus.border',
            tokens.destructive.focus
          ),
          boxShadow: `0 0 0 ${tokens.focus.width}px ${tokens.focus.destructiveColor}`
        },

        _active: {
          background: get(
            theme,
            'buttons.destructive.active.background',
            tokens.destructive.active
          ),
          borderColor: get(
            theme,
            'buttons.destructive.active.border',
            tokens.destructive.active
          )
        }
      },
      minimal: {
        background: get(
          theme,
          'buttons.minimal.background',
          tokens.minimal.base
        ),
        color: get(theme, 'buttons.minimal.text', tokens.minimal.text),

        _focus: {
          boxShadow: `0 0 0 ${tokens.focus.width}px ${tokens.focus.color}`
        },

        _disabled: {
          ...disabled,
          background: get(
            theme,
            'buttons.minimal.disabled.background',
            tokens.minimal.disabled
          )
        },

        _hover: {
          background: get(
            theme,
            'buttons.minimal.hover.background',
            tokens.minimal.hover
          )
        },

        _active: {
          background: get(
            theme,
            'buttons.minimal.active.background',
            tokens.minimal.active
          )
        }
      },
      ...themedAppearances
    },

    sizes: {
      small: {
        ...tokens.text[300],
        height: 24,
        minWidth: 24,
        lineHeight: '24px',
        paddingLeft: minorScale(3),
        paddingRight: minorScale(3)
      },
      medium: {
        ...tokens.text[300],
        height: 32,
        minWidth: 32,
        lineHeight: '32px',
        paddingLeft: majorScale(2),
        paddingRight: majorScale(2)
      },
      large: {
        ...tokens.text[400],
        height: 40,
        minWidth: 40,
        lineHeight: '40px',
        paddingLeft: minorScale(5),
        paddingRight: minorScale(5)
      }
    }
  }
}
