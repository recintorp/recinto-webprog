import { useRef } from 'react';
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Stack, 
  Typography, 
  alpha 
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'username', headerName: 'Username', width: 130 },
  { field: 'email', headerName: 'Email', width: 180 },
  { field: 'role', headerName: 'Role', width: 100 },
  { field: 'gender', headerName: 'Gender', width: 90 },
  { 
    field: 'isActive', 
    headerName: 'Status', 
    width: 100,
    valueGetter: (value) => value ? 'Active' : 'Inactive'
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, username: 'jsnow', email: 'jon@stark.com', role: 'admin', gender: 'male', isActive: true },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, username: 'cersei_l', email: 'cersei@lannister.com', role: 'editor', gender: 'female', isActive: false },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, username: 'kingslayer', email: 'jaime@lannister.com', role: 'viewer', gender: 'male', isActive: true },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, username: 'no_one', email: 'arya@stark.com', role: 'editor', gender: 'female', isActive: true },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 25, username: 'motherofdragons', email: 'dany@dragon.com', role: 'admin', gender: 'female', isActive: true },
  { id: 6, lastName: 'Melisandre', firstName: 'Lady', age: 150, username: 'red_woman', email: 'lady@light.com', role: 'viewer', gender: 'female', isActive: false },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, username: 'ferrara_c', email: 'ferrara@test.com', role: 'viewer', gender: 'male', isActive: true },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, username: 'rossini_f', email: 'rossini@test.com', role: 'editor', gender: 'female', isActive: false },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, username: 'harvey_r', email: 'harvey@test.com', role: 'admin', gender: 'male', isActive: true },
];

const ReportsPage = () => {
  const printRef = useRef(null);

  const handlePrint = () => {
    const printContent = printRef.current;

    if (!printContent) return;

    const printWindow = window.open('', '_blank', 'width=1200,height=900');
    if (!printWindow) return;

    const headMarkup = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]')
    )
      .map((node) => node.outerHTML)
      .join('');

    const exportedAt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date());

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Exported Report</title>
          ${headMarkup}
          <style>
            @page { size: A4 landscape; margin: 16mm; }
            * { box-sizing: border-box; }
            body {
              margin: 0;
              font-family: Arial, Helvetica, sans-serif;
              background: #fff;
              color: #1f2937;
            }
            .report-shell { padding: 20px; }
            .report-header {
              margin-bottom: 24px;
              padding-bottom: 14px;
              border-bottom: 2px solid #8B5CF6;
            }
            .report-header h1 {
              margin: 0 0 6px;
              font-size: 24px;
              color: #8B5CF6;
            }
            .report-header p {
              margin: 0;
              font-size: 14px;
              color: #6b7280;
              line-height: 1.5;
            }
            .report-content .MuiCard-root, .report-content .MuiBox-root {
              box-shadow: none !important;
              border: 1px solid #e5e7eb !important;
              background: #fff !important;
              color: #000 !important;
              break-inside: avoid;
              page-break-inside: avoid;
              margin-bottom: 20px;
            }
            .report-content .MuiCardContent-root { padding: 20px; }
            .report-content svg { max-width: 100%; }
            .report-content .MuiTypography-root { color: #000 !important; }
          </style>
        </head>
        <body>
          <main class="report-shell">
            <header class="report-header">
              <h1>Official Reports Summary</h1>
              <p>Analytics overview for generated reports, category breakdown, and current user data.</p>
              <p><strong>Prepared on:</strong> ${exportedAt}</p>
            </header>
            <section class="report-content">
              ${printContent.outerHTML}
            </section>
          </main>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 500); 
  };

  const darkCardSx = {
    backgroundColor: '#0a0710',
    border: '1px solid rgba(139, 92, 246, 0.15)',
    borderRadius: 4,
    boxShadow: '0 15px 35px -15px rgba(0,0,0,0.7)',
    color: '#ffffff'
  };

  return (
    <Box sx={{ width: '100%', pb: 8 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        spacing={2}
        sx={{ mb: 5 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ height: '2px', width: 40, background: 'linear-gradient(90deg, #8B5CF6, transparent)' }} />
          <Typography variant="h4" sx={{ fontWeight: 300, color: '#ffffff', letterSpacing: '0.05em', fontSize: '1.8rem' }}>
            Reports & Analytics
          </Typography>
        </Box>
        <Button 
          variant="outlined" 
          onClick={handlePrint}
          sx={{ 
            color: '#C084FC', 
            borderColor: 'rgba(139, 92, 246, 0.5)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            borderRadius: 2,
            px: 3,
            '&:hover': {
              borderColor: '#C084FC',
              backgroundColor: alpha('#8B5CF6', 0.1)
            }
          }}
        >
          Export PDF Report
        </Button>
      </Stack>

      <Stack ref={printRef} spacing={6}>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={6}>
          <Box sx={{ flex: 1, p: 4, ...darkCardSx, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="button" sx={{ color: '#a1a1aa', mb: 3, letterSpacing: '0.2em', fontSize: '0.75rem' }}>
              Monthly Report Output
            </Typography>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <BarChart
                colors={['#8B5CF6', '#C084FC']}
                series={[
                  { data: [18, 24, 20, 27], label: "Generated" },
                  { data: [12, 19, 17, 23], label: "Completed" },
                ]}
                height={280}
                xAxis={[{ data: ["January", "February", "March", "April"], scaleType: 'band' }]}
                sx={{
                  '& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel, & .MuiChartsAxis-left .MuiChartsAxis-tickLabel': { fill: '#a1a1aa' },
                  '& .MuiChartsAxis-bottom .MuiChartsAxis-line, & .MuiChartsAxis-left .MuiChartsAxis-line': { stroke: 'rgba(255,255,255,0.1)' },
                  '& .MuiChartsLegend-mark': { rx: 4 },
                  '& .MuiChartsLegend-series text': { fill: '#ffffff !important' },
                  '& .MuiChartsAxis-bottom .MuiChartsAxis-label': { fill: '#a1a1aa', fontSize: '12px' },
                }}
              />
            </Box>
          </Box>

          <Box sx={{ flex: 1, p: 4, ...darkCardSx, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mb: 3 }}>
               <Typography variant="button" sx={{ color: '#a1a1aa', letterSpacing: '0.2em', fontSize: '0.75rem' }}>
                 Completion Rate
               </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Gauge 
                width={220} 
                height={220} 
                value={78} 
                sx={{
                  '& .MuiGauge-valueArc': { fill: '#8B5CF6' },
                  '& .MuiGauge-referenceArc': { fill: 'rgba(139, 92, 246, 0.15)' },
                  '& .MuiGauge-valueText': { fill: '#ffffff', fontSize: '2.5rem', fontWeight: 300 },
                }}
              />
            </Box>
          </Box>
        </Stack>

        <Box sx={{ mb: 1, mt: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="overline" sx={{ fontWeight: 'bold', color: '#8B5CF6', letterSpacing: '0.2em', fontSize: '0.75rem' }}>
            User Data ({rows.length} Results)
          </Typography>
          <Box sx={{ flexGrow: 1, height: '1px', background: 'rgba(139, 92, 246, 0.2)' }} />
        </Box>

        <Box sx={{ width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            disableRowSelectionOnClick
            autoHeight
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
              '& .MuiTablePagination-selectIcon': {
                color: '#a1a1aa',
              },
              '& .MuiIconButton-root': {
                color: '#a1a1aa',
              }
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default ReportsPage;