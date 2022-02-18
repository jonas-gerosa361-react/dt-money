import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/Global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenModal={handleOpenModal}/>


      <NewTransactionModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />

      <Dashboard />
    </>
  );
}
