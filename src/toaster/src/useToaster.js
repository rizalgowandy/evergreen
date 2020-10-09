import React, { memo, useCallback, useState } from 'react'
import { css } from 'glamor'
import { StackingOrder } from '../../constants'
import Portal from '../../portal/src/Portal'
import Toast from './Toast'

const wrapperClass = css({
  maxWidth: 560,
  margin: '0 auto',
  top: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  zIndex: StackingOrder.TOASTER,
  pointerEvents: 'none'
})

const hasCustomId = settings =>
  settings && Object.hasOwnProperty.call(settings, 'id')

const ToastContainer = memo(({ removeToast, toasts }) => (
  <Portal>
    <span className={wrapperClass}>
      {toasts.map(({ description, id, ...rest }) => {
        return (
          <Toast key={id} onRemove={() => {}} {...rest}>
            {description}
          </Toast>
        )
      })}
    </span>
  </Portal>
))

const useToaster = (position = 'BOTTOM') => {
  const [toasts, setToasts] = useState([])
  const [idCounter, setIdCounter] = useState(0)

  const getToasts = () => toasts

  const closeAll = () => {
    setToasts(toasts.map(toast => ({ ...toast, isShown: false })))
  }

  /**
   * This will set isShown on the Toast which will close the toast.
   * It won't remove the toast until onExited triggers onRemove.
   */
  const closeToast = id => {
    setToasts(
      toasts.map(toast => {
        if (toast.id === id) {
          return {
            ...toast,
            isShown: false
          }
        }

        return toast
      })
    )
  }

  const safeCloseToast = id => {
    const toastToRemove = toasts.find(toast => String(toast.id).startsWith(id))

    if (toastToRemove) {
      closeToast(toastToRemove.id)
    }
  }

  const removeToast = id => {
    const updatedToasts = toasts.filter(
      toast => !String(toast.id).startsWith(id)
    )
    setToasts(updatedToasts)
    return updatedToasts
  }

  const createToastInstance = (title, settings) => {
    const uniqueId = idCounter
    setIdCounter(idCounter + 1)
    const id = hasCustomId(settings) ? `${settings.id}-${uniqueId}` : uniqueId

    return {
      id,
      title,
      description: settings.description,
      hasCloseButton: settings.hasCloseButton || true,
      duration: settings.duration || 5,
      close: () => safeCloseToast(id),
      intent: settings.intent
    }
  }

  const notify = useCallback((title, settings = {}) => {
    const instance = createToastInstance(title, settings)
    setToasts(prevToasts => [instance, ...prevToasts])
  }, [])

  const success = (title, settings) =>
    notify(title, { ...settings, intent: 'success' })
  const warn = (title, settings) =>
    notify(title, { ...settings, intent: 'warn' })
  const error = (title, settings) =>
    notify(title, { ...settings, intent: 'error' })

  const PassedDownToastContainer = React.cloneElement(
    ToastContainer,
    {
      ...ToastContainer.props,
      toasts,
      position
    },
    removeToast
  )

  return [
    ToastContainer,
    toasts,
    { notify, success, warn, error, closeAll, getToasts }
  ]
}

export default useToaster
