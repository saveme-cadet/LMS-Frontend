import Chip from '@mui/material/Chip';

const adminCloumns = [
  {
    field: 'attendeStatus',
    headerName: '참여 상태',
    type: 'string',
    width: 120,
  },
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
    field: 'userName',
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
];

export default adminCloumns;
