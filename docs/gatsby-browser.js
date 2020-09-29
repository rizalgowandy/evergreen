/* eslint-disable no-restricted-globals */
import React from 'react'
import { ThemeProvider, classicTheme } from '../src'

const { NODE_ENV = 'development' } = process.env

export const onClientEntry = () => {
  if (self === top) {
    const antiClickjack = document.querySelector('#antiClickjack')
    antiClickjack.parentNode.removeChild(antiClickjack)
  } else {
    top.location = self.location
  }
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider value={classicTheme}>{element}</ThemeProvider>
)

export const onRouteUpdate = () => {
  if (!window.analytics || typeof window.analytics.page !== 'function') {
    if (NODE_ENV === 'development') {
      console.warn('Unable to locate analytics.js')
    }

    return
  }

  window.analytics.page()
}
