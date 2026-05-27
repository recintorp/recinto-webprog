import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper, Switch, FormControlLabel, Alert, CircularProgress } from '@mui/material';
import { createArticle, updateArticle, fetchArticles } from '../../services/ArticleService';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const DashArticlePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    isActive: true,
  });
  const [imageFile, setImageFile] = useState(null);
  const [existingImage, setExistingImage] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(isEditMode);

  useEffect(() => {
    if (isEditMode) {
      const loadArticleData = async () => {
        try {
          const { data } = await fetchArticles();
          const articleToEdit = data.articles.find(a => a._id === id);
          
          if (articleToEdit) {
            setFormData({
              title: articleToEdit.title,
              content: articleToEdit.content.join('\n\n'),
              isActive: articleToEdit.isActive,
            });
            if (articleToEdit.image) {
              setExistingImage(true);
            }
          } else {
            setError('Article not found.');
          }
        } catch (err) {
          console.error("Error fetching article data:", err); 
          setError('Failed to fetch article data.');
        } finally {
          setLoading(false);
        }
      };
      loadArticleData();
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const paragraphs = formData.content.split(/\n\s*\n/).filter(p => p.trim() !== '');

    if (paragraphs.length === 0) {
      return setError('Content is required.');
    }

    const payload = new FormData();
    payload.append('title', formData.title);
    payload.append('content', JSON.stringify(paragraphs));
    payload.append('isActive', formData.isActive);
    
    if (imageFile) {
      payload.append('image', imageFile);
    }

    try {
      if (isEditMode) {
        await updateArticle(id, payload);
        setSuccess('Article updated successfully! Redirecting...');
      } else {
        await createArticle(payload);
        setSuccess('Article created successfully! Redirecting...');
      }
      
      setTimeout(() => {
        navigate('/dashboard/articles');
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || `Failed to ${isEditMode ? 'update' : 'create'} article.`);
    }
  };

  const textFieldStyles = {
    mb: 4,
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(255, 255, 255, 0.01)',
      transition: 'all 0.3s ease',
      '& fieldset': {
        borderColor: 'rgba(139, 92, 246, 0.2)',
        transition: 'all 0.3s ease',
      },
      '&:hover fieldset': {
        borderColor: '#8B5CF6',
      },
      '&.Mui-focused': {
        backgroundColor: 'rgba(139, 92, 246, 0.03)',
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.15)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#C084FC',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#a1a1aa',
      '&.Mui-focused': {
        color: '#C084FC',
      }
    },
    '& .MuiInputBase-input': {
      color: '#ffffff',
    },
    '& .MuiFormHelperText-root': {
      color: '#71717a',
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress sx={{ color: '#8B5CF6' }} />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <Box sx={{ width: 40, height: '1px', background: 'linear-gradient(90deg, #C084FC, transparent)' }} />
        <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.3em', color: '#C084FC', textTransform: 'uppercase' }}>
          Document Editor
        </Typography>
      </Box>

      <Typography variant="h3" sx={{ mb: 1, fontWeight: 200, color: '#ffffff', letterSpacing: '0.05em' }}>
        {isEditMode ? 'Edit' : 'Publish'} <span style={{ fontStyle: 'italic', color: '#a1a1aa', fontFamily: 'serif' }}>Article</span>
      </Typography>
      
      <Typography sx={{ color: '#a1a1aa', mb: 5, fontWeight: 300 }}>
        {isEditMode 
          ? 'Modify your existing architectural study and update the archives.' 
          : 'Draft a new architectural study or insight to add to the Valence library.'}
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 3, backgroundColor: 'rgba(211, 47, 47, 0.1)', color: '#ffb4ab', border: '1px solid rgba(211, 47, 47, 0.3)' }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 3, backgroundColor: 'rgba(46, 125, 50, 0.1)', color: '#a5d6a7', border: '1px solid rgba(46, 125, 50, 0.3)' }}>{success}</Alert>}

      <Paper sx={{ p: { xs: 3, md: 5 }, backgroundColor: '#05030A', border: '1px solid rgba(139, 92, 246, 0.15)', borderRadius: 4, boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Article Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            sx={textFieldStyles}
            variant="outlined"
          />

          <Button
            variant="outlined"
            component="label"
            fullWidth
            startIcon={<CloudUploadIcon sx={{ fontSize: '2rem !important', mr: 1, color: (imageFile || existingImage) ? '#C084FC' : '#8B5CF6' }} />}
            sx={{
              mb: 4,
              py: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              justifyContent: 'center',
              textTransform: 'none',
              borderStyle: 'dashed',
              borderWidth: '2px',
              borderColor: (imageFile || existingImage) ? '#C084FC' : 'rgba(139, 92, 246, 0.3)',
              color: (imageFile || existingImage) ? '#ffffff' : '#a1a1aa',
              backgroundColor: (imageFile || existingImage) ? 'rgba(192, 132, 252, 0.08)' : 'rgba(255, 255, 255, 0.01)',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#8B5CF6',
                backgroundColor: 'rgba(139, 92, 246, 0.05)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.15)',
              }
            }}
          >
            <Typography sx={{ fontWeight: 600, letterSpacing: '0.05em' }}>
              {imageFile 
                ? `Selected New File: ${imageFile.name}` 
                : existingImage 
                  ? 'Cover Image Active (Click to Replace)' 
                  : 'Click to Upload Cover Image (Optional)'}
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: '#71717a' }}>
              Supports JPG, PNG, WEBP. Leave blank to keep current image.
            </Typography>
            <input
              type="file"
              hidden
              accept="image/png, image/jpeg, image/webp"
              onChange={handleFileChange}
            />
          </Button>

          <TextField
            fullWidth
            multiline
            rows={12}
            label="Article Content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            sx={{
              ...textFieldStyles,
              '& .MuiInputBase-root': {
                lineHeight: 1.8,
                fontSize: '0.95rem'
              }
            }}
            variant="outlined"
            helperText="Press 'Enter' TWICE to create a new paragraph. The system will automatically split these into beautiful sections for the readers."
          />

          <FormControlLabel
            control={
              <Switch
                checked={formData.isActive}
                onChange={handleChange}
                name="isActive"
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': { color: '#C084FC' },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#8B5CF6', opacity: 1 },
                  '& .MuiSwitch-track': { backgroundColor: 'rgba(255,255,255,0.1)' }
                }}
              />
            }
            label={
              <Typography sx={{ fontSize: '0.9rem', color: formData.isActive ? '#e4e4e7' : '#71717a', transition: 'color 0.3s ease' }}>
                {formData.isActive ? "Status: Active (Visible to Public)" : "Status: Draft (Hidden)"}
              </Typography>
            }
            sx={{ mb: 4 }}
          />

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', borderTop: '1px solid rgba(139, 92, 246, 0.15)', pt: 4 }}>
            <Button 
              variant="outlined" 
              onClick={() => navigate('/dashboard/articles')}
              sx={{ 
                color: '#a1a1aa', 
                borderColor: 'rgba(255,255,255,0.1)', 
                borderRadius: 10, 
                px: 4,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255,0.2)',
                  color: '#ffffff'
                }
              }}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              variant="contained" 
              sx={{ 
                backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #C084FC 100%)',
                borderRadius: 10, 
                px: 5,
                py: 1.2,
                fontWeight: 800,
                letterSpacing: '0.15em',
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  backgroundImage: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
                  boxShadow: '0 6px 25px rgba(139,92,246,0.5)',
                  transform: 'translateY(-2px)'
                } 
              }}
            >
              {isEditMode ? 'Update Document' : 'Publish Document'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default DashArticlePage;