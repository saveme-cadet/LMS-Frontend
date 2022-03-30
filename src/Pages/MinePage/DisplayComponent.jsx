import Styled from './Timer.styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

import { aojiCloumns } from 'Utils';
import { format, parseISO } from 'date-fns';
import { DataGrid } from '@mui/x-data-grid';
import { AojiService } from 'Network';

const DisplayComponent = props => {
  const [isClosed, setIsClosed] = useState(1);
  const [buttonNumber, setButtonNumber] = useState(0);

  const OpenModal = event => {
    setIsClosed(0);
    setButtonNumber(
      parseInt(event.target.parentNode.parentNode.getAttribute('data-id')) + 1,
    );
  };

  const DigitalText = () => {
    return (
      <Box>
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 50,
          }}
        >
          {props.status === '0' ? (
            <span style={{ color: '#C0C0C0' }}>{props.clock}</span>
          ) : (
            <span>{props.clock}</span>
          )}
        </Box>
      </Box>
    );
  };

  const Buttons = () => {
    return (
      <div>
        {props.status === '0' ? (
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              flexDirection: 'column',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
            }}
          >
            <Button
              style={{
                width: 150,
                height: 50,
              }}
              onClick={props.start}
              variant="contained"
            >
              시작
            </Button>
          </Box>
        ) : (
          ''
        )}
        {props.status === '1' ? (
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              flexDirection: 'column',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
            }}
          >
            <Button
              style={{
                width: 150,
                height: 50,
              }}
              onClick={props.stop}
              variant="outlined"
            >
              종료
            </Button>
          </Box>
        ) : (
          ''
        )}
      </div>
    );
  };

  const rows = props.time.map((item, index) => ({
    id: index,
    // date: format(parseISO(item.start), 'yyyy-MM-dd'),
    startTime: format(parseISO(item.start), 'yyyy-MM-dd HH:mm:ss'),
    finishedTime: format(parseISO(item.finish), 'yyyy-MM-dd HH:mm:ss'),
    checkedTime:
      String(
        parseInt(
          (parseISO(item.finish) - parseISO(item.start)) / 1000 / (60 * 60),
        ),
      ).padStart(2, '0') +
      ':' +
      String(
        parseInt((parseISO(item.finish) - parseISO(item.start)) / 1000 / 60) %
          60,
      ).padStart(2, '0') +
      ':' +
      String(
        ((parseISO(item.finish) - parseISO(item.start)) / 1000) % 60,
      ).padStart(2, '0'),
    deducted:
      (
        (parseISO(item.finish) - parseISO(item.start)) /
        1000 /
        (8 * 60 * 60)
      ).toFixed(1) + ' 점',
  }));

  const totalTime = props.time.map(
    item => (parseISO(item.finish) - parseISO(item.start)) / 1000,
  );
  let total = 0;
  for (let i = 0; i < props.time.length; i++) {
    total += parseInt(totalTime[i]);
  }
  let seconds = String(total % 60).padStart(2, '0');
  let minutes = String(parseInt((total / 60) % 60)).padStart(2, '0');
  let hours = String(parseInt(total / (60 * 60))).padStart(2, '0');
  console.log('Total = ' + hours + ' : ' + minutes + ' : ' + seconds);

  const CloseModal = () => {
    setIsClosed(1);
  };

  const Modal = () => {
    const date =
      format(new Date(), 'yyyy-MM-dd') + 'T' + format(new Date(), 'HH:mm');
    return (
      <div>
        {buttonNumber == '0' ? (
          ''
        ) : (
          <div>시작 : {props.time[parseInt(buttonNumber) - 1].start}</div>
        )}
        종료 : <input type="datetime-local" defaultValue={date} />
        <div>
          <button onClick={CloseModal}>확인</button>
          <button>취소</button>
        </div>
      </div>
    );
  }; // 팝업 띄우기
  const fixButton = () => {
    console.log('asfsafas');
  };
  return (
    <Styled.CusDiv>
      <div className="start">
        <h2>⛏️ 보충학습 시작</h2>
        <Buttons />
        <br />
      </div>

      <div className="log">
        <h2>⛏️ 보충학습 기록</h2>

        <DataGrid
          rows={rows}
          columns={aojiCloumns}
          callback={fixButton}
          rowsPerPageOptions={[5]}
          hideFooterSelectedRowCount={true} // row count 숨기기
          hideFooterPagination={true} // 페이지 네이션 비활성화, 전체, 빨간팀, 파란팀?
          disableSelectionOnClick
        />
      </div>

      {isClosed === 0 ? <Modal /> : ''}
    </Styled.CusDiv>
  );
};

export default DisplayComponent;
