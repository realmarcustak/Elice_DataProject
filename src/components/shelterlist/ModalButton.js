import { useState } from "react";
import { Modal } from "./Modal";
import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";

export default function Form({ shelter, name, mapName }) {
  const [modalOpen, setModalOpen] = useState(false);
  const onOpen = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <FormSection>
      <button className="modalButton" onClick={onOpen}>
        {shelter}
      </button>
      {modalOpen && <Modal name={name} setModalOpen={setModalOpen} />}
    </FormSection>
  );
}

const FormSection = styled.div`
  .modalButton {
    border: none;
    padding: 5px 10px;
    color: ${PRIMARY_COLOR};
    background-color: ${COLOR_WHITE};
  }
  .modalButton:hover {
    color: orange;
  }
`;
