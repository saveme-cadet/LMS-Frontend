import { Button, Modal } from '@mui/material';
import { CRUDUserService } from 'API';
import { AuthContext } from 'App';
import React, { useContext, useEffect, useState } from 'react';
import styledComp from 'styled-components';
import { styled } from '@mui/material/styles';
import { MODAL_TYPE } from 'Utils/constants';

function IssueTempPassword() {
  const { modalType, setModalType } = useContext(AuthContext);
  const [userId, setUserId] = useState(null);
  const [notiMessage, setNotiMessage] = useState('');
  const handleClose = () => {
    setModalType(null);
    setNotiMessage('');
  };
  const onUpdateUserId = e => {
    setUserId(e.target.value);
  };

  const onSubmit = async () => {
    if (!userId) {
      setNotiMessage('아이디를 입력하지 않았습니다.');
      return;
    }
    const res = await CRUDUserService.issueTempPassword(userId);
    if (res) {
      setNotiMessage('42 이메일로 링크를 발송했습니다.');
      const timer = setTimeout(() => {
        clearTimeout(timer);
        handleClose();
      }, 2000);
    } else setNotiMessage('발급 신청 중 오류가 발생했습니다.');
  };
  const handlePressEnter = e => {
    if (e.key === 'Enter') onSubmit();
    else if (notiMessage) setNotiMessage('');
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
              onKeyDown={handlePressEnter}
              spellCheck={false}
              required
            />
            <NotificationMessage>{notiMessage}</NotificationMessage>
            <IssueButton onClick={onSubmit} variant="contained">
              발급
            </IssueButton>
          </div>
        </ModalBox>
      </Modal>
    </>
  );
}

const ModalBox = styledComp.div`
  background-color: #fff;
  padding: 40px 40px;
  border-radius: 5px;
  width: 510px;
  height: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  text-align: center;
  font-family: 'BMJUA';
  font-size: 20px;
`;
const NotificationMessage = styledComp.p`
  font-size: 15px;
  height: 10px;
`;
const IdInputForm = styledComp.input`
  border: 2px solid #868a8c;
  margin-top: 30px;
  padding-left: 10px;
  border-radius: 0.3em;
  height: 40px;
  width: 400px;
  font-size: 15px;
  font-family: 'BMJUA';
`;

const IssueButton = styled(Button)({
  borderRadius: '0.3em',
  fontFamily: 'BMJUA',
  fontSize: '15px',
  color: 'white',
  width: '100px',
  height: '2.5em',
  // margin: '1em',
  backgroundColor: '#00aaff',
});

export default IssueTempPassword;
