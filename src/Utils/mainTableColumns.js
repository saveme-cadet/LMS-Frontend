import { GetCheckIcons } from 'Components';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { ROLE_NAME } from 'Utils/constants';

const mainTableColumns = [
  {
    field: 'team',
    headerName: '팀',
    type: 'string',
    width: 120,
    renderCell: params => {
      if (params.value === 'NONE')
        return <div className={`${params.value} info`}>GREEN</div>;
      else
        return <div className={`${params.value} info`}>{params.value}</div>;
    },
  },
  {
    field: 'role',
    headerName: '역할',
    type: 'string',
    width: 120,
    renderCell: params => {
      return (
        <div className={`${params.value} info`}>{ROLE_NAME[params.value]}</div>
      );
    },
  },
  {
    field: 'username',
    headerName: '이름',
    type: 'string',
    width: 120,
  },
  {
    // field: 'participateScore',
    field: 'attendanceScore',
    headerName: '출석 횟수',
    type: 'number',
    width: 120,
  },
  {
    // field: 'attendScore',
    field: 'absentScore',
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
    // field: 'todoRate',
    field: 'todoSuccessRate',
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
