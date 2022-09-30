const isParticipated = value => {
  return value === 'PARTICIPATED' ? '참가' : '불참';
};

const whichTeam = value => {
  if (value === 'RED') return '레드';
  else if (value === 'BLUE') return '블루';
  else return '팀 없음';
};

const whichRole = value => {
  if (value === 'ROLE_ADMIN') return '관리자';
  else if (value === 'ROLE_MANAGER') return '머슴';
  else return '평민';
};

const attendStatus = value => {
  if (value >= 3) return 'REPORT';
  else if (value >= 2) return 'WARNING';
  else return 'GOOD';
};

const adminTableColumns = [
  {
    field: 'attendStatus',
    headerName: '참여 상태',
    type: 'string',
    width: 120,
    renderCell: params => {
      return (
        <div className={`${params.value} info`}>
          {isParticipated(params.value)}
        </div>
      );
    },
  },
  {
    field: 'team',
    headerName: '팀',
    type: 'string',
    width: 120,
    renderCell: params => {
      return (
        <div className={`${params.value} info`}>{whichTeam(params.value)}</div>
      );
    },
  },
  {
    field: 'role',
    headerName: '역할',
    type: 'string',
    width: 120,
    renderCell: params => {
      return (
        <div className={`${params.value} info`}>{whichRole(params.value)}</div>
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
    field: 'attendanceScore',
    headerName: '출석 횟수',
    type: 'number',
    width: 120,
  },

  {
    field: 'totalAbsentScore',
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
    field: 'weekAbsentScore',
    headerName: '출석 상태',
    type: 'number',
    width: 120,
    renderCell: params => {
      return (
        <div className={`${attendStatus(params.value)}`}>{params.value}</div>
      );
    },
  },
];

export default adminTableColumns;
