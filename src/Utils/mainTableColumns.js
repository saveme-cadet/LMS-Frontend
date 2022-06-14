import { GetCheckIcons } from 'Components';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const mainTableColumns = [
  {
    field: 'team',
    headerName: '팀',
    type: 'string',
    width: 120,
    renderCell: params => {
      return <div className={`${params.value} info`}>{params.value}</div>;
    },
  },
  {
    field: 'role',
    headerName: '역할',
    type: 'string',
    width: 120,
    renderCell: params => {
      return <div className={`${params.value} info`}>{params.value}</div>;
    },
  },
  {
    field: 'name',
    headerName: '이름',
    type: 'string',
    width: 120,
  },
  {
    field: 'participateScore',
    headerName: '출석 횟수',
    type: 'number',
    width: 120,
  },
  {
    field: 'attendScore',
    headerName: '결석 점수',
    type: 'number',
    width: 120,
  },
  {
    field: 'vacation',
    headerName: '휴가',
    type: 'number',
    width: 120,
  },
  {
    field: 'checkIn',
    headerName: '체크인',
    type: 'string',
    width: 120,
    renderCell: params => {
      return <GetCheckIcons type={params.value} />;
    },
  },
  {
    field: 'checkOut',
    headerName: '체크아웃',
    width: 120,
    renderCell: params => {
      return <GetCheckIcons type={params.value} />;
    },
  },
  {
    field: 'todoRate',
    headerName: '목표 진척도',
    width: 200,
    renderCell: params => {
      return (
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" value={params.value} />
        </Box>
      );
    },
  },
];

export default mainTableColumns;
