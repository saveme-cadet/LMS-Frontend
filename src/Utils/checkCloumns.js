import Chip from '@mui/material/Chip';

import { GetCheckIcons } from 'Components';

const checkCloumns = [
  {
    field: 'team',
    headerName: '팀',
    type: 'string',
    width: 120,
    renderCell: params => {
      return <Chip label={params.value} className={params.value} />;
    },
  },
  {
    field: 'role',
    headerName: '역할',
    type: 'string',
    width: 120,
    renderCell: params => {
      return <Chip label={params.value} className={params.value} />;
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
    type: 'string',
    width: 120,
    renderCell: params => {
      return <GetCheckIcons type={params.value} />;
    },
  },
];

export default checkCloumns;
