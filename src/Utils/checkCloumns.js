import Chip from '@mui/material/Chip';

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
    field: 'score',
    headerName: '출결 상태',
    type: 'number',
    width: 120,
  },
  {
    field: 'since',
    headerName: '고인 정도',
    type: 'number',
    width: 120,
  },

  {
    field: 'checkIn',
    headerName: '체크인',
    type: 'string',
    width: 120,
  },
  {
    field: 'checkOut',
    headerName: '체크아웃',
    type: 'string',
    width: 120,
  },
];

export default checkCloumns;
