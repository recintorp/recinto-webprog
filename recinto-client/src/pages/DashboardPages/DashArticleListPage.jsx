import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Paper, TextField, InputAdornment, Chip, IconButton, Select, MenuItem, FormControl } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { fetchArticles, deleteArticle } from '../../services/ArticleService';

const DashArticleListPage = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const { data } = await fetchArticles();
      const formattedData = data.articles.map((article) => ({
        id: article._id,
        slug: article.name,
        title: article.title,
        paragraphs: article.content.length,
        preview: article.content[0] ? `${article.content[0].substring(0, 55)}...` : 'No content',
        status: article.isActive,
      }));
      setArticles(formattedData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this article? This action cannot be undone.')) {
      try {
        await deleteArticle(id);
        setArticles(articles.filter((article) => article.id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.slug.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' ? true :
                          statusFilter === 'Active' ? article.status === true :
                          article.status === false;

    return matchesSearch && matchesStatus;
  });

  const columns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 110,
      renderCell: (params) => (
        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#8B5CF6', letterSpacing: '0.05em' }}>
          #{params.value.substring(params.value.length - 8).toUpperCase()}
        </Typography>
      )
    },
    { 
      field: 'title', 
      headerName: 'Title', 
      flex: 1.5,
      renderCell: (params) => (
        <Typography sx={{ fontWeight: 500, color: '#ffffff', fontSize: '0.85rem' }}>
          {params.value}
        </Typography>
      )
    },
    { 
      field: 'slug', 
      headerName: 'Slug', 
      flex: 1,
      renderCell: (params) => (
        <Typography sx={{ color: '#a1a1aa', fontSize: '0.8rem' }}>
          {params.value}
        </Typography>
      )
    },
    { 
      field: 'paragraphs', 
      headerName: 'Blocks', 
      type: 'number', 
      width: 90, 
      align: 'left', 
      headerAlign: 'left',
      renderCell: (params) => (
        <Typography sx={{ color: '#C084FC', fontSize: '0.8rem', fontWeight: 600 }}>
          {params.value}
        </Typography>
      )
    },
    { 
      field: 'preview', 
      headerName: 'Preview', 
      flex: 1.5,
      renderCell: (params) => (
        <Typography sx={{ color: '#71717a', fontSize: '0.8rem', fontStyle: 'italic' }}>
          {params.value}
        </Typography>
      )
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value ? 'Active' : 'Draft'}
          size="small"
          sx={{
            backgroundColor: params.value ? 'rgba(46, 125, 50, 0.15)' : 'rgba(211, 47, 47, 0.15)',
            color: params.value ? '#a5d6a7' : '#ffb4ab',
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontSize: '0.6rem',
            border: params.value ? '1px solid rgba(46, 125, 50, 0.3)' : '1px solid rgba(211, 47, 47, 0.3)',
          }}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
          <IconButton 
            size="small" 
            onClick={() => navigate(`/dashboard/articles/edit/${params.row.id}`)}
            sx={{ color: '#8B5CF6', '&:hover': { backgroundColor: 'rgba(139, 92, 246, 0.15)', transform: 'scale(1.1)' }, transition: 'all 0.2s' }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton 
            size="small" 
            onClick={() => handleDelete(params.row.id)}
            sx={{ color: '#ef4444', '&:hover': { backgroundColor: 'rgba(239, 68, 68, 0.15)', transform: 'scale(1.1)' }, transition: 'all 0.2s' }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 5 }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Box sx={{ width: 40, height: '1px', background: 'linear-gradient(90deg, #C084FC, transparent)' }} />
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.3em', color: '#C084FC', textTransform: 'uppercase' }}>
              Database
            </Typography>
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 200, color: '#ffffff', letterSpacing: '0.05em' }}>
            Articles <span style={{ fontStyle: 'italic', color: '#a1a1aa', fontFamily: 'serif' }}>Library</span>
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/dashboard/articles/create')}
          sx={{
            backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #C084FC 100%)',
            borderRadius: 10,
            px: 4,
            py: 1.2,
            fontWeight: 800,
            letterSpacing: '0.15em',
            boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': { 
              backgroundImage: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
              boxShadow: '0 6px 25px rgba(139,92,246,0.5)',
              transform: 'translateY(-2px)'
            },
          }}
        >
          Add Article
        </Button>
      </Box>

      <Paper sx={{ backgroundColor: '#05030A', border: '1px solid rgba(139, 92, 246, 0.15)', borderRadius: 4, overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
        <Box sx={{ p: 3, borderBottom: '1px solid rgba(139, 92, 246, 0.1)', display: 'flex', gap: 2, flexWrap: 'wrap', backgroundColor: 'rgba(255,255,255,0.01)' }}>
          <TextField
            placeholder="Search articles by title or slug..."
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#8B5CF6' }} />
                </InputAdornment>
              ),
              sx: { 
                color: '#ffffff', 
                backgroundColor: 'rgba(139, 92, 246, 0.05)', 
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': { backgroundColor: 'rgba(139, 92, 246, 0.08)' },
                '&.Mui-focused': { backgroundColor: 'rgba(139, 92, 246, 0.1)', boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)' }
              }
            }}
            sx={{ flexGrow: 1, minWidth: '200px', '& fieldset': { border: '1px solid rgba(139, 92, 246, 0.2)' }, '&:hover fieldset': { borderColor: '#8B5CF6 !important' } }}
          />
          
          <FormControl size="small" sx={{ minWidth: 180 }}>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              displayEmpty
              sx={{ 
                color: '#ffffff', 
                backgroundColor: 'rgba(139, 92, 246, 0.05)', 
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(139, 92, 246, 0.2)' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#8B5CF6' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#C084FC' },
                '&.Mui-focused': { backgroundColor: 'rgba(139, 92, 246, 0.1)', boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)' },
                '.MuiSvgIcon-root ': { fill: '#8B5CF6' }
              }}
              MenuProps={{
                PaperProps: {
                  sx: { bgcolor: '#080510', border: '1px solid rgba(139, 92, 246, 0.2)', color: '#fff', mt: 1, borderRadius: 2, boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }
                }
              }}
            >
              <MenuItem value="All" sx={{ fontSize: '0.85rem', '&:hover': { backgroundColor: 'rgba(139, 92, 246, 0.1)' } }}>All Statuses</MenuItem>
              <MenuItem value="Active" sx={{ fontSize: '0.85rem', '&:hover': { backgroundColor: 'rgba(139, 92, 246, 0.1)' } }}>Published (Active)</MenuItem>
              <MenuItem value="Draft" sx={{ fontSize: '0.85rem', '&:hover': { backgroundColor: 'rgba(139, 92, 246, 0.1)' } }}>Hidden (Draft)</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Box sx={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={filteredArticles}
            columns={columns}
            loading={loading}
            pageSizeOptions={[10, 25, 50]}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            disableRowSelectionOnClick
            rowHeight={65}
            sx={{
              border: 'none',
              color: '#a1a1aa',
              '& .MuiDataGrid-cell': {
                borderColor: 'rgba(139, 92, 246, 0.05)',
                display: 'flex',
                alignItems: 'center',
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: '#030108',
                borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontSize: '0.7rem',
                fontWeight: 700,
              },
              '& .MuiDataGrid-row': {
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(139, 92, 246, 0.04)',
                }
              },
              '& .MuiDataGrid-footerContainer': {
                borderTop: '1px solid rgba(139, 92, 246, 0.15)',
                backgroundColor: 'rgba(255,255,255,0.01)',
                color: '#ffffff',
              },
              '& .MuiTablePagination-root': {
                color: '#ffffff',
              },
              '& .MuiDataGrid-iconSeparator': {
                display: 'none',
              },
              '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
                width: '8px',
                height: '8px',
              },
              '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
                backgroundColor: '#030108',
              },
              '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(139, 92, 246, 0.3)',
                borderRadius: '10px',
              },
              '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover': {
                backgroundColor: 'rgba(139, 92, 246, 0.5)',
              },
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default DashArticleListPage;