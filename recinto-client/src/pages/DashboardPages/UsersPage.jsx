import React from 'react';
import { Typography, Box, Button, Stack, alpha } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'FIRST NAME', flex: 1, minWidth: 150 },
  { field: 'lastName', headerName: 'LAST NAME', flex: 1, minWidth: 150 },
  { field: 'age', headerName: 'AGE', type: 'number', width: 120 },
  {
    field: 'fullName',
    headerName: 'FULL NAME',
    sortable: false,
    flex: 1,
    minWidth: 200,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
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

function UsersPage() {
  return (
    <Box sx={{ width: '100%', pb: 8 }}>
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ height: '2px', width: 40, background: 'linear-gradient(90deg, #8B5CF6, transparent)' }} />
        <Typography variant="h4" sx={{ fontWeight: 300, color: '#ffffff', letterSpacing: '0.05em', fontSize: '1.8rem' }}>
          Users Management
        </Typography>
      </Box>

      <Stack direction="row" justifyContent="flex-end" sx={{ mb: 4 }}>
        <Button 
          variant="outlined" 
          startIcon={<PersonAddAlt1Icon />}
          sx={{ 
            borderRadius: "100px",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontWeight: 600,
            fontSize: "0.75rem",
            padding: "10px 24px",
            color: "#C084FC",
            borderColor: alpha("#8B5CF6", 0.3),
            backgroundColor: alpha("#8B5CF6", 0.05),
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: alpha("#8B5CF6", 0.15),
              borderColor: "#C084FC",
              color: "#ffffff",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
              transform: "translateY(-2px)"
            }
          }}
        >
          Register User
        </Button>
      </Stack>

      <Box sx={{ height: 600, width: '100%', mb: 4 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 25, 50]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            border: '1px solid rgba(139, 92, 246, 0.15)',
            borderRadius: 4,
            backgroundColor: '#0a0710',
            color: '#ffffff',
            boxShadow: '0 15px 35px -15px rgba(0,0,0,0.7)',
            p: 2,
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: alpha('#8B5CF6', 0.05),
              color: '#C084FC',
              borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.75rem',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              color: '#a1a1aa',
              fontSize: '0.85rem',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: alpha('#8B5CF6', 0.08),
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: '1px solid rgba(139, 92, 246, 0.1)',
              color: '#a1a1aa',
            },
            '& .MuiTablePagination-root': {
              color: '#a1a1aa',
            },
            '& .MuiCheckbox-root': {
              color: 'rgba(255,255,255,0.3)',
            },
            '& .MuiCheckbox-root.Mui-checked': {
              color: '#C084FC',
            },
            '& .MuiDataGrid-iconSeparator': {
              color: 'rgba(255,255,255,0.1)',
            }
          }}
        />
      </Box>
    </Box>
  );
}

export default UsersPage;