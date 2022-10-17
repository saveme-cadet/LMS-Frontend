import { Modal } from '@mui/material';
import { isRegexPassword } from 'Utils';
import { AuthContext } from 'App';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MODAL_TYPE } from 'Utils/constants';

const UpdatePasswordModal = () => {
  const { modalType, setModalType } = useContext(AuthContext);
  const [notiMessage, setNotiMessage] = useState('');
  const oldPassword = useRef();
  const newPassword = useRef();
  const checkPassword = useRef();

  const handleClose = () => {
    setModalType(null);
    setNotiMessage('');
  };
  const saveOldPassword = e => {
    oldPassword.current = e.target.value;
  };
  const saveNewPassword = e => {
    newPassword.current = e.target.value;
  };
  const checkNewPassword = e => {
    checkPassword.current = e.target.value;
  };
  const updatePassword = async () => {
    console.log(oldPassword);
    const errorMessage = isRegexPassword(newPassword);
    if (errorMessage) {
      alert(errorMessage);
      return;
    }
    alert('성공!');

    // const res = await CRUDUserService.updatePassword(
    //   oldPassword,
    //   newPassword,
    //   checkPassword,
    // );
    // if (res) setNotiMessage('정상처리 됐습니다'); // setState is not function(api, async 적용전)
    // const timer = setTimeout(() => {
    //   clearTimeout(timer);
    //   handleClose();
    // }, 2000);
    // API 부분에 따른 결과값 보여주기
    // TODO: 정규식 붙이고 api요청 보내기
  };

  return (
    <>
      <Modal open={modalType === MODAL_TYPE.UPDATE_PW} onClose={handleClose}>
        <UpdateModalWrapper>
          <div>비밀번호 변경입니다</div>
          {/* maxLength 30 minLength 8 */}
          <PasswordFormWrapper>
            <PasswordInputForm
              placeholder="기존 비밀번호"
              onChange={saveOldPassword}
            />
            <PasswordInputForm
              placeholder="새 비밀번호"
              onChange={saveNewPassword}
            />
            <PasswordInputForm
              placeholder="새 비밀번호 확인"
              onChange={checkNewPassword}
            />
          </PasswordFormWrapper>
          <NotiMessage>{notiMessage}</NotiMessage>
          <button onClick={updatePassword}>변경</button>
        </UpdateModalWrapper>
      </Modal>
    </>
  );
};

const UpdateModalWrapper = styled.div`
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
  text-align: center;
`;

const PasswordFormWrapper = styled.div``;

const PasswordInputForm = styled.input`
  border: 2px solid #868a8c;
  margin-top: 2%;
  padding-left: 10px;
  border-radius: 0.3em;
  height: 40px;
  width: 400px;
  font-size: 15px;
  font-family: 'BMJUA';
`;

const NotiMessage = styled.div``;

export default UpdatePasswordModal;
