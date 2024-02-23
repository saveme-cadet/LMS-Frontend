import { Button, Modal } from '@mui/material';
import { MineService } from 'API';
import { AuthContext } from 'Store';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { MODAL_TYPE } from 'Utils/constants';

function MineDeleteModal({ data, setActiveLogIndex, getMyMine }) {
  const { modalType, setModalType } = useContext(AuthContext);
  const { status } = useContext(AuthContext);

  const handleClose = () => {
    setModalType(null);
    setActiveLogIndex(-1);
  };
  const handleDelete = async () => {
    await MineService.putDeleteMine(status.username, data.studyTimeId);
    handleClose();
  };

  useEffect(() => {
    return () => {
      getMyMine();
    };
  }, []);

  return (
    <>
      <Modal open={modalType === MODAL_TYPE.DELETE} onClose={handleClose}>
        <ModalBox>
          <ModalTitle>삭제하시겠습니까?</ModalTitle>
          <ModalButtons>
            <Button variant="outlined" onClick={handleClose}>
              취소하기
            </Button>
            <Button variant="contained" onClick={handleDelete}>
              삭제하기
            </Button>
          </ModalButtons>
        </ModalBox>
      </Modal>
    </>
  );
}
const ModalBox = styled.div`
  background-color: #fff;
  padding: 40px 40px;
  border-radius: 5px;
  width: 300px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 10px;
    :nth-child(1) {
      border-color: red;
      color: red;
    }
    :nth-child(2) {
      background-color: red;
    }
  }
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
`;

export default MineDeleteModal;
