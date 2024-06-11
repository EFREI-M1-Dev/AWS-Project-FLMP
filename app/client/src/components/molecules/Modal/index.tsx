import React, { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'

type ModalProps = {
  children: React.ReactElement | React.ReactElement[]
  className?: string
  closeModal: () => void
}

const Modal = ({ children, className, closeModal }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <motion.div
      className={`${styles.modal} ${className ? className : ''}`}
      ref={modalRef}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Modal
