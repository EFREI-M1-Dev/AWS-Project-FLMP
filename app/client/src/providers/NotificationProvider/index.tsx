import React, { createContext, useState, useContext, ReactNode } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'

interface NotificationContextType {
  showNotification: (message: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
)

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    )
  }
  return context
}

interface NotificationProviderProps {
  children: ReactNode
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [message, setMessage] = useState<string | null>(null)

  const showNotification = (message: string) => {
    console.log(message)
    setMessage(message)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ translateY: -40 }}
            animate={{ translateY: 0 }}
            exit={{ translateY: -50 }}
            className={styles.notification}
          >
            <div>{message}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </NotificationContext.Provider>
  )
}
