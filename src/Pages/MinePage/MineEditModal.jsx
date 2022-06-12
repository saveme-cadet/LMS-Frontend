import React, { useContext, useState } from 'react';
import { Modal, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { AuthContext } from 'App';
import { AojiService } from 'Network';

function MineEditModal({ data, setActiveLog, getMyMine }) {
  const { isModal, setIsModal, status } = useContext(AuthContext);
  const [startAt, setStartAt] = useState(data.startAt);
  const [endAt, setEndAt] = useState(data.endAt);
  const [errMsg, setErrMsg] = useState('');

  const handleClose = () => {
    setIsModal(false);
    setActiveLog(null);
  };

  const onChangeStartAt = e => {
    if (e.target.value > endAt) {
      setErrMsg('시작 시간이 종료 시간보다 늦습니다.');
    } else {
      setErrMsg('');
      setStartAt(e.target.value);
    }
  };

  const onChangeEndAt = e => {
    if (e.target.value < startAt) {
      setErrMsg('종료 시간이 시작 시간보다 빠릅니다.');
    } else {
      setErrMsg('');
      setEndAt(e.target.value);
    }
  };

  const onClickSave = async () => {
    if (startAt > endAt) {
      setErrMsg('시작 시간이 종료 시간보다 늦습니다.');
      return;
    } else if (new Date(startAt) > new Date() || new Date(endAt) > new Date()) {
      setErrMsg('시작 시간과 종료 시간은 현재 시간보다 늦지 않아야 합니다.');
      return;
    }
    setErrMsg('');
    await AojiService.editMineTime(status.userId, {
      aojiTimeIndex: data.aojiTimeIndex,
      startAt,
      endAt,
    });
    handleClose();
    getMyMine();
  };

  return (
    <Modal open={isModal} onClose={handleClose}>
      <ModalBox>
        <ModalTitle>공부시간 수정</ModalTitle>
        <ModalContent>
          <ModalContentTitle>시작 시간</ModalContentTitle>
          <TextField
            type="datetime-local"
            value={startAt}
            onChange={onChangeStartAt}
          />
        </ModalContent>
        <ModalContent>
          <ModalContentTitle>종료 시간</ModalContentTitle>
          <TextField
            type="datetime-local"
            value={endAt}
            onChange={onChangeEndAt}
          />
        </ModalContent>
        <ModalMsg>{errMsg}</ModalMsg>
        <ModalButtons>
          <Button variant="outlined" onClick={handleClose}>
            취소하기
          </Button>
          <Button variant="contained" onClick={onClickSave}>
            수정하기
          </Button>
        </ModalButtons>
      </ModalBox>
    </Modal>
  );
}

const ModalBox = styled.div`
  background-color: #fff;
  padding: 20px 40px;
  border-radius: 5px;
  width: 500px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const ModalContentTitle = styled.span``;

const ModalMsg = styled.span`
  display: block;
  height: 15px;
  color: red;
  font-size: 12px;
  text-align: center;
  margin: 10px 0 20px;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 10px;
  }
`;

export default MineEditModal;
