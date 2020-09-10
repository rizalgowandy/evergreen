const buttons = {
  // Base initial styles shared across all button components.
  base: {
    fontFamily: 'tokens.fontFamilies.ui',
    border: '1px solid transparent',
    borderRadius: 'tokens.borderRadius'
  },

  appearances: {
    primary: {
      background: 'tokens.primary.base',
      borderColor: 'tokens.primary.border',
      color: 'tokens.primary.text',
      _disabled: {
        background: 'tokens.primary.disabled',
        borderColor: 'tokens.primary.disabled'
      },

      _hover: {
        background: 'tokens.primary.hover',
        borderColor: 'tokens.primary.hover'
      },

      _focus: {
        background: 'tokens.primary.focus',
        borderColor: 'tokens.primary.focus',
        boxShadow: `tokens.focusRing`
      },

      _active: {
        background: 'tokens.primary.active',
        borderColor: 'tokens.primary.active'
      },
      _focusAndActive: {}
    },
    default: {}
    //   background: get(theme, 'buttons.default.background', tokens.default.base),
    //   border: tokens.default.border
    //     ? `1px solid ${get(
    //         theme,
    //         'buttons.default.border',
    //         tokens.default.border
    //       )}`
    //     : null,
    //   color: get(theme, 'buttons.default.text', tokens.default.text),

    //   _disabled: {
    //     ...disabled,
    //     color: get(
    //       theme,
    //       'buttons.default.disabled.text',
    //       tokens.default.disabled
    //     ),
    //     borderColor: get(
    //       theme,
    //       'buttons.default.disabled.border',
    //       tokens.default.disabled
    //     )
    //   },

    //   _hover: {
    //     borderColor: get(
    //       theme,
    //       'buttons.default.hover.border',
    //       tokens.default.borderDarker
    //     ),
    //     background: get(
    //       theme,
    //       'buttons.default.hover.border',
    //       tokens.default.hover
    //     )
    //   },

    //   _focus: {
    //     boxShadow: `0 0 0 ${tokens.focus.width}px ${tokens.focus.color}`
    //   },

    //   _active: {
    //     background: get(
    //       theme,
    //       'buttons.default.active.background',
    //       tokens.default.active
    //     )
    //   },
    //   _focusAndActive: {}
    // },
    // destructive: {
    //   background: get(
    //     theme,
    //     'buttons.destructive.background',
    //     tokens.destructive.base
    //   ),
    //   border: `1px solid ${get(
    //     theme,
    //     'buttons.destructive.border',
    //     tokens.destructive.border
    //   )}`,
    //   color: get(theme, 'buttons.destructive.text', tokens.destructive.text),

    //   _disabled: {
    //     ...disabled,
    //     background: get(
    //       theme,
    //       'buttons.destructive.disabled.background',
    //       tokens.destructive.disabled
    //     ),
    //     borderColor: get(
    //       theme,
    //       'buttons.destructive.disabled.border',
    //       tokens.destructive.disabled
    //     )
    //   },

    //   _hover: {
    //     background: get(
    //       theme,
    //       'buttons.destructive.hover.background',
    //       tokens.destructive.hover
    //     ),
    //     borderColor: get(
    //       theme,
    //       'buttons.destructive.hover.border',
    //       tokens.destructive.hover
    //     )
    //   },

    //   _focus: {
    //     background: get(
    //       theme,
    //       'buttons.destructive.focus.background',
    //       tokens.destructive.focus
    //     ),
    //     borderColor: get(
    //       theme,
    //       'buttons.destructive.focus.border',
    //       tokens.destructive.focus
    //     ),
    //     boxShadow: `0 0 0 ${tokens.focus.width}px ${tokens.focus.destructiveColor}`
    //   },

    //   _active: {
    //     background: get(
    //       theme,
    //       'buttons.destructive.active.background',
    //       tokens.destructive.active
    //     ),
    //     borderColor: get(
    //       theme,
    //       'buttons.destructive.active.border',
    //       tokens.destructive.active
    //     )
    //   }
    // },
    // minimal: {
    //   background: get(theme, 'buttons.minimal.background', tokens.minimal.base),
    //   color: get(theme, 'buttons.minimal.text', tokens.minimal.text),

    //   _focus: {
    //     boxShadow: `0 0 0 ${tokens.focus.width}px ${tokens.focus.color}`
    //   },

    //   _disabled: {
    //     ...disabled,
    //     background: get(
    //       theme,
    //       'buttons.minimal.disabled.background',
    //       tokens.minimal.disabled
    //     )
    //   },

    //   _hover: {
    //     background: get(
    //       theme,
    //       'buttons.minimal.hover.background',
    //       tokens.minimal.hover
    //     )
    //   },

    //   _active: {
    //     background: get(
    //       theme,
    //       'buttons.minimal.active.background',
    //       tokens.minimal.active
    //     )
    //   }
    // }
  },
  sizes: {
    small: 24,
    medium: 32,
    large: 40
  }
}

export default buttons
