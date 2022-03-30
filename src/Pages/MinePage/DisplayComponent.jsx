import * as React from 'react';
import Styled from './Timer.styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { DataGrid } from '@mui/x-data-grid';
import { blue, grey } from '@mui/material/colors';
import { SettingsAccessibilityTwoTone } from '@mui/icons-material';
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

  const columns = [
    {
      field: 'startTime',
      headerName: '시작',
      width: 200,
      editable: false,
      hideable: false,
      sortable: false,
      type: 'dateTime',
    },
    {
      field: 'finishedTime',
      headerName: '종료',
      width: 200,
      editable: false,
      hideable: false,
      sortable: false,
      type: 'dateTime',
    },
    {
      field: 'checkedTime',
      headerName: '기록',
      editable: false,
      hideable: false,
      sortable: false,
      width: 150,
      type: 'dateTime',
    },
    {
      field: 'deducted',
      headerName: '차감점수',
      editable: false,
      hideable: false,
      sortable: false,
      width: 150,
      type: 'dateTime',
    },
    {
      field: 'fixButton',
      headerName: '',
      width: 100,
      editable: false,
      hideable: false,
      sortable: false,
      renderCell: params => (
        <Button
          sx={{ width: 50, height: 30 }}
          variant="outlined"
          onClick={OpenModal}
        >
          수정
        </Button>
      ),
    },
  ];

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
    return (
      <div>
        {buttonNumber == '0' ? (
          ''
        ) : (
          <div>시작 : {props.time[parseInt(buttonNumber) - 1].start}</div>
        )}
        종료 : <input type="time" />
        {/* {buttonNumber == '0' ? (
          ''
        ) : (
          <div>종료 : {props.time[parseInt(buttonNumber) - 1].finish}</div>
        )} */}
        <div>
          <button onClick={CloseModal}>확인</button>
          <button>취소</button>
        </div>
      </div>
    );
  }; // 팝업 띄우기

  return (
    <div
      style={{
        backgroundColor: 'white',
      }}
    >
      <br />
      <Styled.CusDiv>
        <Box
          sx={{
            flexDirection: 'column',
            display: 'flex',
            // alignItems: 'center',
            justifyContent: 'center',
            fontSize: 30,
            border: 1,
            borderColor: '#C0C0C0',
            boxShadow: 1,
            borderRadius: 5,
            width: '25%',
            height: 400,
          }}
        >
          <span>⛏️ 보충학습 시작</span>
          <br />
          <br />
          {/* <DigitalText /> */}
          <br />
          <br />
          <br />
          <Buttons />
          <br />
        </Box>
        <Box
          sx={{
            flexDirection: 'column',
            display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            fontSize: 30,
            border: 1,
            borderColor: '#C0C0C0',
            boxShadow: 1,
            borderRadius: 5,
            width: '100%',
            height: 400,
          }}
        >
          <div>⛏️ 보충학습 기록</div>
          <br />
          <div
            style={{
              height: 300,
              width: 1050,
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <DataGrid
              rows={rows}
              columns={columns}
              rowsPerPageOptions={[5]}
              hideFooterSelectedRowCount={true} // row count 숨기기
              hideFooterPagination={true} // 페이지 네이션 비활성화, 전체, 빨간팀, 파란팀?
              disableSelectionOnClick
            />
          </div>
          <br />
          <br />
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
            {isClosed === 0 ? <Modal /> : ''}
          </Box>
        </Box>
      </Styled.CusDiv>
      <br />
    </div>
  );
};

export default DisplayComponent;
