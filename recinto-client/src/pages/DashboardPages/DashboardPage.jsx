import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Card, CardContent, Box, Grid, alpha } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
  {
    field: 'fullName',
    headerName: 'Full name',
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

const dataset = [
  { quarter: 'Q1', series1: 35, series2: 51 },
  { quarter: 'Q2', series1: 44, series2: 6 },
  { quarter: 'Q3', series1: 24, series2: 49 },
  { quarter: 'Q4', series1: 34, series2: 30 },
];

const samplePieData = [
  { id: 0, value: 10, label: 'A' },
  { id: 1, value: 15, label: 'B' },
  { id: 2, value: 20, label: 'C' },
];

const chartColors = ['#8B5CF6', '#C084FC', '#6D28D9'];

function DashboardPage() {
  return (
    <Box sx={{ width: '100%', pb: 8 }}>
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ height: '2px', width: 40, background: 'linear-gradient(90deg, #8B5CF6, transparent)' }} />
        <Typography variant="h4" sx={{ fontWeight: 300, color: '#ffffff', letterSpacing: '0.05em', fontSize: '1.8rem' }}>
         Central Dashboard 
        </Typography>
      </Box>

      <Grid container spacing={6} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ background: 'linear-gradient(145deg, rgba(10,7,16,1) 0%, rgba(17,12,28,1) 100%)', border: '1px solid rgba(139, 92, 246, 0.15)', borderRadius: 4, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.6)', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', border: '1px solid rgba(139, 92, 246, 0.4)', boxShadow: '0 15px 35px -10px rgba(139,92,246,0.2)' } }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#8B5CF6', boxShadow: '0 0 15px #8B5CF6' }} />
            <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="overline" sx={{ color: '#C084FC', fontWeight: 'bold', letterSpacing: '0.25em', fontSize: '0.75rem' }}>
                Total Users
              </Typography>
              <Typography variant="h1" sx={{ color: '#ffffff', fontWeight: 200, mt: 1, textShadow: '0 0 25px rgba(139, 92, 246, 0.4)', fontSize: '3.5rem' }}>
                9
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ background: 'linear-gradient(145deg, rgba(10,7,16,1) 0%, rgba(17,12,28,1) 100%)', border: '1px solid rgba(139, 92, 246, 0.15)', borderRadius: 4, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.6)', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', border: '1px solid rgba(192, 132, 252, 0.4)', boxShadow: '0 15px 35px -10px rgba(192,132,252,0.2)' } }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#C084FC', boxShadow: '0 0 15px #C084FC' }} />
            <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="overline" sx={{ color: '#C084FC', fontWeight: 'bold', letterSpacing: '0.25em', fontSize: '0.75rem' }}>
                Average Age
              </Typography>
              <Typography variant="h1" sx={{ color: '#ffffff', fontWeight: 200, mt: 1, textShadow: '0 0 25px rgba(192, 132, 252, 0.4)', fontSize: '3.5rem' }}>
                47.8
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={6} sx={{ mb: 6, alignItems: 'stretch' }}>
        <Grid item xs={12} lg={7}>
          <Box sx={{ backgroundColor: '#0a0710', border: '1px solid rgba(139, 92, 246, 0.15)', borderRadius: 4, p: 4, height: '100%', minHeight: '380px', display: 'flex', flexDirection: 'column', boxShadow: '0 15px 35px -15px rgba(0,0,0,0.7)' }}>
            <Typography variant="button" sx={{ color: '#a1a1aa', mb: 3, letterSpacing: '0.2em', fontSize: '0.75rem' }}>
              Quarterly Metrics
            </Typography>
            <Box sx={{ flexGrow: 1, width: '100%', display: 'flex', alignItems: 'center', overflowX: 'auto' }}>
              <Box sx={{ minWidth: 650 }}>
                <BarChart
                  dataset={dataset}
                  xAxis={[{ scaleType: 'band', dataKey: 'quarter', label: 'Quarters' }]}
                  series={[
                    { dataKey: 'series1', label: 'Series 1', color: '#8B5CF6' },
                    { dataKey: 'series2', label: 'Series 2', color: '#C084FC' },
                  ]}
                  width={750}
                  height={300}
                  sx={{
                    '& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel, & .MuiChartsAxis-left .MuiChartsAxis-tickLabel': { fill: '#a1a1aa' },
                    '& .MuiChartsAxis-bottom .MuiChartsAxis-line, & .MuiChartsAxis-left .MuiChartsAxis-line': { stroke: 'rgba(255,255,255,0.1)' },
                    '& .MuiChartsLegend-mark': { rx: 4 },
                    '& .MuiChartsLegend-series text': { fill: '#ffffff !important' },
                    '& .MuiChartsAxis-bottom .MuiChartsAxis-label': { fill: '#a1a1aa', fontSize: '12px' },
                  }}
                  margin={{ left: 40, right: 20, top: 20, bottom: 40 }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Box sx={{ backgroundColor: '#0a0710', border: '1px solid rgba(139, 92, 246, 0.15)', borderRadius: 4, p: 4, height: '100%', minHeight: '380px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 15px 35px -15px rgba(0,0,0,0.7)' }}>
            <Box sx={{ width: '100%', mb: 3 }}>
               <Typography variant="button" sx={{ color: '#a1a1aa', letterSpacing: '0.2em', fontSize: '0.75rem' }}>
                 Distribution Overview
               </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PieChart
                colors={chartColors}
                series={[
                  {
                    data: samplePieData,
                    innerRadius: 30,
                    paddingAngle: 3,
                    cornerRadius: 6,
                  },
                ]}
                width={350}
                height={260}
                sx={{
                  '& .MuiChartsLegend-series text': { fill: '#ffffff !important' },
                }}
                margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mb: 3, mt: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="overline" sx={{ fontWeight: 'bold', color: '#8B5CF6', letterSpacing: '0.2em', fontSize: '0.75rem' }}>
          Users Overview
        </Typography>
        <Box sx={{ flexGrow: 1, height: '1px', background: 'rgba(139, 92, 246, 0.2)' }} />
      </Box>

      <Box sx={{ height: 450, width: '100%', mb: 4 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
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

export default DashboardPage;