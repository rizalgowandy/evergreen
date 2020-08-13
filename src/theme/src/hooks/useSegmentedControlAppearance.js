import useTheme from '../useTheme'
import memoizeClassName from '../default-theme/utils/memoizeClassName'

const baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  boxSizing: 'border-box',
  textDecoration: 'none',
  transition: 'box-shadow 80ms ease-in-out',
  WebkitAppearance: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
}

const disabledState = '[disabled="true"], [data-disabled="true"]'
const hoverState = '&:not([disabled="true"]):not([data-disabled="true"]):hover'
const activeState =
  '&:not([disabled="true"]):not([data-disabled="true"]):active, &:not([disabled="true"]):not([data-disabled="true"])[data-popover-opened="true"], &:not([disabled="true"]):not([data-disabled="true"])[data-active="true"]'
const focusState = '& input:focus + label'

const useSegmentedControlAppearance = () => {
  const {
    tokens: { primary, colors }
  } = useTheme()

  return {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    '&:not(:last-child)': {
      marginRight: '4px'
    },

    '& label': {
      ...baseStyle,
      position: 'relative',
      color: colors.gray700,
      backgroundColor: 'transparent',
      borderRadius: '4px',
      padding: '4px 12px',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },

    [disabledState]: {
      opacity: 0.8,
      backgroundColor: colors.gray500,
      boxShadow: 'none',
      color: colors.gray600,
      pointerEvents: 'none'
    },
    [hoverState]: {
      '& label': {
        color: colors.gray800,
        backgroundColor: colors.gray100
      }
    },
    [focusState]: {
      boxShadow: `0 0 0 1px ${colors.blue100}`
    },
    [activeState]: {
      '& label': {
        backgroundColor: colors.blue50,
        color: primary.base
      }
    }
  }
}

export default memoizeClassName(useSegmentedControlAppearance)