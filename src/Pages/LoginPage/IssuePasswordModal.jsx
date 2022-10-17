import { Modal } from '@mui/material';
import { CRUDUserService } from 'API';
import { AuthContext } from 'App';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MODAL_TYPE } from 'Utils/constants';

function IssueTempPassword() {
  const { modalType, setModalType } = useContext(AuthContext);
  const [userId, setUserId] = useState(null);
  const [notiMessage, setNotiMessage] = useState('');
  const handleClose = () => {
    setModalType(null);
  };
  const onUpdateUserId = e => {
    setUserId(e.target.value);
  };

  const onSubmit = async () => {
    const res = await CRUDUserService.issueTempPassword(userId);
    if (res) setNotiMessage('42 이메일로 링크를 발송했습니다.');
    const timer = setTimeout(() => {
      clearTimeout(timer);
      handleClose();
    }, 2000);
  };

  return (
    <>
      <Modal open={modalType === MODAL_TYPE.ISSUE_PW} onClose={handleClose}>
        <ModalBox>
          <div>
            <div>회원가입한 아이디를 작성해주세요</div>
            <IdInputForm
              placeholder="아이디"
              type="text"
              onChange={onUpdateUserId}
              spellCheck={false}
              required
            />
            <div>
              <p>{notiMessage}</p>
            </div>
            <div>
              <button onClick={onSubmit}>발급</button>
            </div>
          </div>
        </ModalBox>
      </Modal>
    </>
  );
}

const ModalBox = styled.div`
  background-color: #fff;
  padding: 40px 40px;
  border-radius: 5px;
  width: 570px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
`;
const IdInputForm = styled.input`
  border: 2px solid #868a8c;
  margin-top: 2%;
  padding-left: 10px;
  border-radius: 0.3em;
  height: 40px;
  width: 400px;
  font-size: 15px;
  font-family: 'BMJUA';
`;

export default IssueTempPassword;
