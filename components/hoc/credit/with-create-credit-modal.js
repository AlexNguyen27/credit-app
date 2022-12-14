import { useCallback, useState } from "react";
import CreateCreditContext from "../../context/credit/create-credit-context";
import CreateCreditModal from "../../credit/create-credit-modal";

export default function withCreateCreditModal(Components) {
  return function withCreateCreditModalComponent(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = useCallback(() => {
      setIsModalOpen(true);
    }, []);

    const handleOk = useCallback(() => {
      setIsModalOpen(false);
    }, []);

    const closeModal = useCallback(() => {
      setIsModalOpen(false);
    }, []);

    return (
      <>
        <CreateCreditContext.Provider
          value={{
            isModalOpen: isModalOpen,
            closeModal: closeModal,
            openModal: openModal,
          }}
        >
          <Components {...props} />
          <CreateCreditModal
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            closeModal={closeModal}
          />
        </CreateCreditContext.Provider>
      </>
    );
  };
}
