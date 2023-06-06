import { useState } from "react";
import { PostModal } from "./PostModal";
import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";

export const PostModalButton = ({ post, name }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const onOpen = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <FormSection>
      <button className="modalButton" onClick={onOpen}>
        {post}
      </button>
      {modalOpen && <PostModal name={name} setModalOpen={setModalOpen} />}
    </FormSection>
  );
};

const FormSection = styled.div`
  .modalButton {
    font-weight: bold;
    font-size: 20px;
    border: none;
    padding: auto;
    color: ${PRIMARY_COLOR};
    background-color: white;
  }
  .modalButton:hover {
    color: orange;
  }
`;
