import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import { mainTableColumns } from 'Utils';
import Box from '@mui/material/Box';

const columns = [
  { field: 'absentScore', headerName: 'ID', width: 90 },
  { field: 'attendStatus', headerName: 'Name', width: 150, editable: true },
  {
    field: 'customField',
    headerName: 'Custom Field',
    width: 200,
    editable: true,
    renderCell: params => (
      <TextField
        value={params.value}
        onChange={event =>
          params.api.setEditCellValue({
            id: params.id,
            field: 'customField',
            value: event.target.value,
          })
        }
      />
    ),
  },
];

const other = [
  {
    id: 1,
    absentScore: 0,
    attendStatus: '참가',
    checkIn: null,
    checkOut: null,
    role: '일반',
    team: 'NONE',
    username: 'q',
    vacation: 0,
  },
  {
    id: 2,
    absentScore: 0,
    attendStatus: '참가',
    checkIn: null,
    checkOut: null,
    role: '일반',
    team: 'NONE',
    username: 'q',
    vacation: 0,
  },
];
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Test() {
  console.log(typeof rows);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={other}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
