import { useMemo } from 'react'
import { css } from 'glamor'
import useTheme from '../useTheme'

const defaultState = '& + div'
const disabledState = '&[disabled] + div'
const hoverState = '&:not([disabled]):hover + div'
const focusState = '&:not([disabled]):focus + div'
const activeState = '&:not([disabled]):active + div'
const checkedState = '&:checked + div, &[type=checkbox]:indeterminate + div'
const checkedHoverState =
  '&:not([disabled]):checked:hover + div, &[type=checkbox]:not([disabled]):indeterminate:hover + div'
const checkedActiveState =
  '&:not([disabled]):checked:active + div, &[type=checkbox]:not([disabled]):indeterminate:active + div'
const checkedDisabledState =
  '&[disabled]:checked + div, &[type=checkbox][disabled]:indeterminate + div'

const hiddenCheckboxStyle = {
  border: '0',
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1',
  opacity: '0'
}

const baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  textDecoration: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
}

const checkedStyle = {
  '& > svg': {
    display: 'block'
  }
}
/**
 * There is only a single appearance in the default theme.
 * @param {String} appearance.
 * @return {Object} the appearance of the checkbox.
 */
const getCheckboxStyles = theme => {
  const { tokens } = theme

  return {
    ...hiddenCheckboxStyle,
    '& + div > svg': { display: 'none' },
    [defaultState]: {
      ...baseStyle,
      color: 'white',
      background: 'white',
      border: `1px solid ${tokens.colors.gray400}`
    },
    [disabledState]: {
      cursor: 'not-allowed',
      background: tokens.colors.gray100,
      border: `1px solid ${tokens.colors.gray100}`
    },
    [hoverState]: {
      border: `1px solid ${tokens.colors.gray600}`
    },
    [focusState]: {
      boxShadow: `0 0 0 ${tokens.focus.width}px ${tokens.focus.color}`
    },
    [activeState]: {
      background: tokens.colors.gray100,
      border: `1px solid ${tokens.colors.gray500}`
    },
    [checkedState]: {
      ...checkedStyle,
      color: tokens.primary.text,
      border: `1px solid ${tokens.primary.border}`,
      background: tokens.primary.base
    },
    [checkedHoverState]: {
      ...checkedStyle,
      color: 'white',
      background: tokens.primary.hover,
      border: `1px solid ${tokens.primary.hover}`
    },
    [checkedDisabledState]: {
      ...checkedStyle,
      color: tokens.colors.gray600,
      background: tokens.colors.gray100,
      border: `1px solid ${tokens.colors.gray100}`
    },
    [checkedActiveState]: {
      ...checkedStyle,
      color: 'white',
      border: `1px solid ${tokens.primary.active}`,
      background: tokens.primary.active
    }
  }
}

/**
 * Get the className of a `Checkbox`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
function useCheckboxAppearance() {
  const theme = useTheme()
  const className = useMemo(() => css(getCheckboxStyles(theme)).toString(), [
    theme
  ])
  return className
}

export default useCheckboxAppearance
