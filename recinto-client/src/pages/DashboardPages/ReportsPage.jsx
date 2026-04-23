import React from 'react';
import { Typography, Card, CardContent, Box, Grid } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const lineChartData = [
  { month: 'Jan', revenue: 4000, costs: 2400 },
  { month: 'Feb', revenue: 3000, costs: 1398 },
  { month: 'Mar', revenue: 2000, costs: 9800 },
  { month: 'Apr', revenue: 2780, costs: 3908 },
  { month: 'May', revenue: 1890, costs: 4800 },
  { month: 'Jun', revenue: 2390, costs: 3800 },
  { month: 'Jul', revenue: 3490, costs: 4300 },
];

const userAgesData = [
  { name: 'Jon S.', age: 14 },
  { name: 'Cersei L.', age: 31 },
  { name: 'Jaime L.', age: 31 },
  { name: 'Arya S.', age: 11 },
  { name: 'Ferrara C.', age: 44 },
  { name: 'Rossini F.', age: 36 },
  { name: 'Harvey R.', age: 65 },
  { name: 'Melisandre', age: 150 },
];

const ageGroupsData = [
  { id: 0, value: 2, label: 'Under 18' },
  { id: 1, value: 2, label: '18 - 35' },
  { id: 2, value: 2, label: '36 - 60' },
  { id: 3, value: 2, label: 'Over 60' },
];

const chartColors = ['#8B5CF6', '#C084FC', '#6D28D9', '#A855F7'];

function ReportsPage() {
  return (
    <Box sx={{ width: '100%', pb: 8, display: 'block' }}>
      
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ height: '2px', width: 40, background: 'linear-gradient(90deg, #8B5CF6, transparent)' }} />
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 300, 
            color: '#ffffff', 
            letterSpacing: '0.05em',
            fontSize: '1.8rem'
          }}
        >
          Reports
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ 
            background: 'linear-gradient(145deg, rgba(10,7,16,1) 0%, rgba(17,12,28,1) 100%)', 
            border: '1px solid rgba(139, 92, 246, 0.15)', 
            borderRadius: 4, 
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.6)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            '&:hover': { transform: 'translateY(-4px)', border: '1px solid rgba(139, 92, 246, 0.4)', boxShadow: '0 15px 35px -10px rgba(139,92,246,0.2)' }
          }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#8B5CF6', boxShadow: '0 0 15px #8B5CF6' }} />
            <CardContent sx={{ p: 4 }}>
              <Typography variant="overline" sx={{ color: '#C084FC', fontWeight: 'bold', letterSpacing: '0.15em' }}>
                Q3 Projected Revenue
              </Typography>
              <Typography variant="h3" sx={{ color: '#ffffff', fontWeight: 200, mt: 1, textShadow: '0 0 25px rgba(139, 92, 246, 0.4)' }}>
                $4.2M
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ 
            background: 'linear-gradient(145deg, rgba(10,7,16,1) 0%, rgba(17,12,28,1) 100%)', 
            border: '1px solid rgba(139, 92, 246, 0.15)', 
            borderRadius: 4, 
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.6)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            '&:hover': { transform: 'translateY(-4px)', border: '1px solid rgba(192, 132, 252, 0.4)', boxShadow: '0 15px 35px -10px rgba(192,132,252,0.2)' }
          }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#C084FC', boxShadow: '0 0 15px #C084FC' }} />
            <CardContent sx={{ p: 4 }}>
              <Typography variant="overline" sx={{ color: '#C084FC', fontWeight: 'bold', letterSpacing: '0.15em' }}>
                Active Blueprints
              </Typography>
              <Typography variant="h3" sx={{ color: '#ffffff', fontWeight: 200, mt: 1, textShadow: '0 0 25px rgba(192, 132, 252, 0.4)' }}>
                18
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ 
            background: 'linear-gradient(145deg, rgba(10,7,16,1) 0%, rgba(17,12,28,1) 100%)', 
            border: '1px solid rgba(139, 92, 246, 0.15)', 
            borderRadius: 4, 
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.6)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            '&:hover': { transform: 'translateY(-4px)', border: '1px solid rgba(109, 40, 217, 0.4)', boxShadow: '0 15px 35px -10px rgba(109, 40, 217, 0.2)' }
          }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#6D28D9', boxShadow: '0 0 15px #6D28D9' }} />
            <CardContent sx={{ p: 4 }}>
              <Typography variant="overline" sx={{ color: '#C084FC', fontWeight: 'bold', letterSpacing: '0.15em' }}>
                Sustainability Score
              </Typography>
              <Typography variant="h3" sx={{ color: '#ffffff', fontWeight: 200, mt: 1, textShadow: '0 0 25px rgba(109, 40, 217, 0.4)' }}>
                92%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mb: 6, alignItems: 'stretch' }}>
        <Grid item xs={12} lg={7}>
          <Box sx={{ 
            backgroundColor: '#0a0710', 
            border: '1px solid rgba(139, 92, 246, 0.15)', 
            borderRadius: 6, 
            p: 4,
            height: '100%',
            minHeight: '450px',
            display: 'flex', 
            flexDirection: 'column',
            boxShadow: '0 20px 40px -20px rgba(0,0,0,0.7)'
          }}>
            <Typography variant="button" sx={{ color: '#a1a1aa', mb: 2, letterSpacing: '0.2em', fontSize: '0.75rem' }}>
              User Age Distribution
            </Typography>
            
            <Box sx={{ flexGrow: 1, width: '100%', mt: 2, display: 'flex', justifyContent: 'center' }}>
              <BarChart
                dataset={userAgesData}
                xAxis={[{ scaleType: 'band', dataKey: 'name', label: 'User Names' }]}
                series={[
                  { dataKey: 'age', label: 'Age', color: '#8B5CF6' }
                ]}
                width={800}
                height={350}
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
        </Grid>
        
        <Grid item xs={12} lg={5}>
          <Box sx={{ 
            backgroundColor: '#0a0710', 
            border: '1px solid rgba(139, 92, 246, 0.15)', 
            borderRadius: 6, 
            p: 4, 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            height: '100%',
            minHeight: '450px',
            boxShadow: '0 20px 40px -20px rgba(0,0,0,0.7)'
          }}>
            <Box sx={{ width: '100%', mb: 4 }}>
              <Typography variant="button" sx={{ color: '#a1a1aa', letterSpacing: '0.2em', fontSize: '0.75rem' }}>
                Age Demographics
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PieChart
                colors={chartColors}
                series={[
                  {
                    data: ageGroupsData,
                    innerRadius: 30,
                    paddingAngle: 3,
                    cornerRadius: 6,
                  },
                ]}
                width={350}
                height={300}
                sx={{
                  '& .MuiChartsLegend-series text': { fill: '#ffffff !important' },
                }}
                margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mb: 3, mt: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="overline" sx={{ fontWeight: 'bold', color: '#8B5CF6', letterSpacing: '0.2em', fontSize: '0.75rem' }}>
          Financial Overview (YTD)
        </Typography>
        <Box sx={{ flexGrow: 1, height: '1px', background: 'rgba(139, 92, 246, 0.2)' }} />
      </Box>
      
      <Box sx={{ 
        width: '100%', 
        backgroundColor: '#0a0710', 
        border: '1px solid rgba(139, 92, 246, 0.15)', 
        borderRadius: 6, 
        p: 4, 
        mb: 6,
        boxShadow: '0 20px 40px -20px rgba(0,0,0,0.7)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Box sx={{ flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <LineChart
            colors={['#C084FC', '#6D28D9']}
            series={[
              { data: lineChartData.map((d) => d.revenue), label: 'Revenue (k$)', showMark: true },
              { data: lineChartData.map((d) => d.costs), label: 'Operating Costs (k$)', showMark: true },
            ]}
            xAxis={[{ scaleType: 'point', data: lineChartData.map((d) => d.month) }]}
            width={1200}
            height={400}
            margin={{ top: 40, bottom: 40, left: 60, right: 40 }}
            sx={{
              '.MuiLineElement-root': {
                strokeWidth: 4,
              },
              '.MuiMarkElement-root': {
                scale: '1.2',
                fill: '#0a0710',
                strokeWidth: 2,
              },
              '& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel, & .MuiChartsAxis-left .MuiChartsAxis-tickLabel': {
                fill: '#a1a1aa',
              },
              '& .MuiChartsAxis-bottom .MuiChartsAxis-line, & .MuiChartsAxis-left .MuiChartsAxis-line': {
                stroke: 'rgba(255,255,255,0.1)',
              },
              '& .MuiChartsLegend-series text': { fill: '#ffffff !important' },
            }}
          />
        </Box>
      </Box>

    </Box>
  );
}

export default ReportsPage;