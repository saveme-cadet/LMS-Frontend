const aojiCloumns = [
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
    renderCell: params => <button onClick={params.callback}>수정</button>,
  },
];

export default aojiCloumns;
