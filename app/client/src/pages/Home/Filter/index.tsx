import { ChangeEvent } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence } from 'framer-motion'

/* components */
import Modal from '../../../components/molecules/Modal'
import InputSelect from '../../../components/molecules/InputSelect'

/* types */
import { filterProps } from '..'

type FilterProps = {
  isModalOpen: boolean
  closeModal: () => void
  filter: filterProps
  handleChangeOrder: (event: ChangeEvent<HTMLSelectElement>) => void
}

const Filter = ({
  isModalOpen,
  closeModal,
  filter,
  handleChangeOrder,
}: FilterProps) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <Modal className={styles.filter} closeModal={closeModal}>
          <InputSelect
            label="Date"
            value={filter['date-order']}
            onChange={handleChangeOrder}
          />
          <InputSelect
            label="Likes"
            value={filter['like-order']}
            onChange={handleChangeOrder}
          />
        </Modal>
      )}
    </AnimatePresence>
  )
}

export default Filter
