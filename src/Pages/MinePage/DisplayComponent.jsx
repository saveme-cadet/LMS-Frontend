import { useState, useEffect, useContext } from 'react';

import { AuthContext } from 'App';
import { aojiCloumns } from 'Utils';
import { AojiService } from 'Network';

import { format, parseISO } from 'date-fns';
import { DataGrid } from '@mui/x-data-grid';

import Styled from './MinePage.styled';

const AojiButton = ({ onClickAoji, state }) => {
  return (
    <>
      {!state ? (
        <button onClick={onClickAoji}>시작</button>
      ) : (
        <button onClick={onClickAoji}>종료</button>
      )}
    </>
  );
};

const DisplayComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonNumber, setButtonNumber] = useState(0);
  const [isDoing, setIsDoing] = useState(false);
  const auth = useContext(AuthContext);

  const handleClickButton = () => {
    setIsDoing(!isDoing);
  };

  const CloseModal = () => {
    setIsOpen(false);
  };
  const getMyAoji = async () => {
    const result = await AojiService.getMyAoji(auth.userId);
  };
  useEffect(() => {
    getMyAoji();
  }, []);

  return (
    <Styled.CusDiv>
      <div className="start">
        <h2>⛏️ 보충학습 시작</h2>
        <AojiButton onClickAoji={handleClickButton} state={isDoing} />
      </div>

      <div className="log">
        <h2>⛏️ 보충학습 기록</h2>

        {/* <DataGrid
          rows={rows}
          columns={aojiCloumns}
          callback={fixButton}
          rowsPerPageOptions={[5]}
          hideFooterSelectedRowCount={true} // row count 숨기기
          hideFooterPagination={true} // 페이지 네이션 비활성화, 전체, 빨간팀, 파란팀?
          disableSelectionOnClick
        /> */}
      </div>

      {/* {isOpen === 0 && <Modal />} */}
    </Styled.CusDiv>
  );
};

export default DisplayComponent;
