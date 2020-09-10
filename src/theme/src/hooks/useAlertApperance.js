import { useMemo } from 'react'
import { css } from 'glamor'
import useTheme from '../useTheme'

function useAlertApperance(intent) {
  const theme = useTheme()
  const { getAlertStyles } = theme
  const className = useMemo(
    () => css(getAlertStyles(theme, { intent })).toString(),
    [intent, theme]
  )
  return className
}

export default useAlertApperance
