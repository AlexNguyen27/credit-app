import { createContext } from 'react'

const EditCreditContext = createContext({
  isModalOpen: false,
  openModal:  (data) => {},
  closeModal: () => {},
})

export default EditCreditContext
