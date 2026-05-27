import { useState, useEffect } from 'react';
import {
  Alert, Box, Button, Dialog, DialogActions,
  DialogContent, DialogTitle, FormControlLabel, IconButton, InputAdornment,
  MenuItem, Stack, Switch, TextField, Typography, useMediaQuery, alpha, Paper, Chip
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from '@mui/x-data-grid';
import { fetchUsers, createUser, updateUser } from '../../services/UserService';

const types = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female', 'other'];

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  type: 'viewer',
  username: '',
  password: '',
  address: '',
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState('');
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const loadUsersData = async () => {
    try {
      setLoading(true);
      const { data } = await fetchUsers();
      setUsers(data.users);
      setServerError('');
    } catch (err) {
      console.error(err);
      setServerError('Unable to fetch users from the server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsersData();
  }, []);

  const filteredUsers = users.filter((user) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      user.firstName?.toLowerCase().includes(searchLower) ||
      user.lastName?.toLowerCase().includes(searchLower) ||
      user.email?.toLowerCase().includes(searchLower) ||
      user.username?.toLowerCase().includes(searchLower);

    const matchesType = !typeFilter || user.type === typeFilter;
    const matchesGender = !genderFilter || user.gender === genderFilter;
    const matchesStatus = statusFilter === '' || user.isActive === (statusFilter === 'active');

    return matchesSearch && matchesType && matchesGender && matchesStatus;
  });

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };

  const openModal = (user) => {
    setModal({ open: true, id: user?._id ?? null });
    
    if (user) {
      const cleanedUser = { ...user };
      Object.keys(cleanedUser).forEach(key => {
        if (cleanedUser[key] === 'Not specified') {
          cleanedUser[key] = '';
        }
      });
      setForm({ ...blankForm, ...cleanedUser, password: '' });
    } else {
      setForm({ ...blankForm });
    }
    
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    const email = form.email.trim().toLowerCase();
    const username = form.username.trim().toLowerCase();
    const password = form.password;

    [
      ['firstName', 'First name'],
      ['lastName', 'Last name'],
      ['email', 'Email'],
      ['username', 'Username']
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!nextErrors.email && users.some((user) => user._id !== modal.id && user.email === email)) {
      nextErrors.email = 'Email address already exists.';
    }

    if (!nextErrors.username && /\s/.test(username)) {
      nextErrors.username = 'Username must not contain spaces.';
    }
    if (!nextErrors.username && users.some((user) => user._id !== modal.id && user.username === username)) {
      nextErrors.username = 'Username already exists.';
    }

    if (!modal.id && !password) {
      nextErrors.password = 'Password is required for new users.';
    } else if (password && password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const userData = { ...form };
    if (modal.id && !userData.password) {
      delete userData.password;
    }

    try {
      if (modal.id) {
        await updateUser(modal.id, userData);
      } else {
        await createUser(userData);
      }
      await loadUsersData();
      closeModal();
    } catch (err) {
      console.error(err);
      setServerError(err.response?.data?.message || 'An error occurred while saving.');
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      await updateUser(id, { isActive: !currentStatus });
      await loadUsersData();
    } catch (err) {
      console.error(err);
      setServerError('Failed to update user status.');
    }
  };

  const darkInputSx = {
    '& .MuiOutlinedInput-root': {
      color: '#ffffff',
      backgroundColor: 'rgba(139, 92, 246, 0.05)',
      borderRadius: 2,
      transition: 'all 0.3s ease',
      '& fieldset': { borderColor: 'rgba(139, 92, 246, 0.2)' },
      '&:hover': { backgroundColor: 'rgba(139, 92, 246, 0.08)' },
      '&:hover fieldset': { borderColor: '#8B5CF6' },
      '&.Mui-focused': { backgroundColor: 'rgba(139, 92, 246, 0.1)', boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)' },
      '&.Mui-focused fieldset': { borderColor: '#C084FC' },
    },
    '& .MuiInputLabel-root': { color: '#a1a1aa' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#C084FC' },
    '& .MuiSvgIcon-root': { color: '#8B5CF6' },
    '& .MuiFormHelperText-root.Mui-error': { color: '#ef4444' }
  };

  const darkMenuProps = {
    PaperProps: {
      sx: {
        bgcolor: '#080510',
        color: '#ffffff',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        borderRadius: 2,
        mt: 1,
        boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
        '& .MuiMenuItem-root:hover': { backgroundColor: alpha('#8B5CF6', 0.1) },
        '& .Mui-selected': { backgroundColor: alpha('#8B5CF6', 0.2) + ' !important' }
      }
    }
  };

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    sx: darkInputSx,
    ...extra,
  });

  const columns = [
    {
      field: 'fullName',
      headerName: 'Full Name',
      flex: 1.2,
      minWidth: 180,
      valueGetter: (_, row) => `${row.firstName} ${row.lastName}`.trim(),
      renderCell: (params) => (
        <Typography sx={{ fontWeight: 600, color: '#ffffff', fontSize: '0.85rem' }}>
          {params.value}
        </Typography>
      )
    },
    { 
      field: 'username', 
      headerName: 'Username', 
      flex: 1, 
      minWidth: 150,
      renderCell: (params) => (
        <Typography sx={{ color: '#a1a1aa', fontSize: '0.85rem' }}>
          @{params.value}
        </Typography>
      )
    },
    { 
      field: 'age', 
      headerName: 'Age', 
      width: 70, 
      align: 'center', 
      headerAlign: 'center',
      valueGetter: (_, row) => row.age === 'Not specified' ? '' : row.age,
      renderCell: (params) => (
        <Typography sx={{ color: '#C084FC', fontSize: '0.85rem', fontWeight: 600 }}>
          {params.value}
        </Typography>
      )
    },
    {
      field: 'gender',
      headerName: 'Gender',
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (_, row) => row.gender === 'Not specified' ? '' : labelize(row.gender),
      renderCell: (params) => (
        <Typography sx={{ color: '#a1a1aa', fontSize: '0.85rem' }}>
          {params.value}
        </Typography>
      )
    },
    { 
      field: 'contactNumber', 
      headerName: 'Contact Number', 
      minWidth: 160,
      valueGetter: (_, row) => row.contactNumber === 'Not specified' ? '' : row.contactNumber,
      renderCell: (params) => (
        <Typography sx={{ color: '#a1a1aa', fontSize: '0.85rem', fontFamily: 'monospace' }}>
          {params.value}
        </Typography>
      )
    },
    { 
      field: 'email', 
      headerName: 'Email', 
      flex: 1.5, 
      minWidth: 220,
      renderCell: (params) => (
        <Typography sx={{ color: '#71717a', fontSize: '0.85rem' }}>
          {params.value}
        </Typography>
      ) 
    },
    {
      field: 'type',
      headerName: 'Role',
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (_, row) => labelize(row.type),
      renderCell: (params) => (
        <Typography sx={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 500 }}>
          {params.value}
        </Typography>
      )
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? 'Active' : 'Inactive'}
          sx={{
            backgroundColor: row.isActive ? 'rgba(46, 125, 50, 0.15)' : 'rgba(211, 47, 47, 0.15)',
            color: row.isActive ? '#a5d6a7' : '#ffb4ab',
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontSize: '0.6rem',
            border: row.isActive ? '1px solid rgba(46, 125, 50, 0.3)' : '1px solid rgba(211, 47, 47, 0.3)',
          }}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 200,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="center" sx={{ width: '100%' }}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => openModal(row)}
            sx={{
              color: '#C084FC',
              borderColor: 'rgba(192, 132, 252, 0.3)',
              fontWeight: 700,
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              borderRadius: 10,
              px: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#C084FC',
                backgroundColor: 'rgba(192, 132, 252, 0.1)',
                boxShadow: '0 0 15px rgba(192,132,252,0.2)'
              }
            }}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => toggleStatus(row._id, row.isActive)}
            sx={{
              fontWeight: 700,
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              borderRadius: 10,
              px: 2,
              bgcolor: row.isActive ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)',
              color: row.isActive ? '#fbbf24' : '#34d399',
              border: '1px solid',
              borderColor: row.isActive ? 'rgba(245, 158, 11, 0.3)' : 'rgba(16, 185, 129, 0.3)',
              boxShadow: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: row.isActive ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                borderColor: row.isActive ? '#fbbf24' : '#34d399',
                boxShadow: row.isActive ? '0 0 15px rgba(245,158,11,0.2)' : '0 0 15px rgba(16,185,129,0.2)'
              }
            }}
          >
            {row.isActive ? 'Disable' : 'Activate'}
          </Button>
        </Stack>
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
              Valence
            </Typography>
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 200, color: '#ffffff', letterSpacing: '0.05em' }}>
            Accounts  <span style={{ fontStyle: 'italic', color: '#a1a1aa', fontFamily: 'serif' }}>Management</span>
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => openModal()}
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
          Add User
        </Button>
      </Box>

      {serverError && (
        <Alert severity="error" sx={{ mb: 4, bgcolor: 'rgba(239, 68, 68, 0.1)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 2 }}>
          {serverError}
        </Alert>
      )}

      <Paper sx={{ backgroundColor: '#05030A', border: '1px solid rgba(139, 92, 246, 0.15)', borderRadius: 4, overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
        <Box sx={{ p: 3, borderBottom: '1px solid rgba(139, 92, 246, 0.1)', display: 'flex', gap: 2, flexWrap: 'wrap', backgroundColor: 'rgba(255,255,255,0.01)' }}>
          <TextField
            placeholder="Search users..."
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
            }}
            sx={{ flexGrow: 1, minWidth: '200px', ...darkInputSx }}
          />
          
          <TextField
            select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            displayEmpty
            size="small"
            sx={{ minWidth: 160, ...darkInputSx }}
            SelectProps={{ displayEmpty: true, MenuProps: darkMenuProps }}
          >
            <MenuItem value="" sx={{ fontSize: '0.85rem' }}>All Roles</MenuItem>
            <MenuItem value="admin" sx={{ fontSize: '0.85rem' }}>Admin</MenuItem>
            <MenuItem value="editor" sx={{ fontSize: '0.85rem' }}>Editor</MenuItem>
            <MenuItem value="viewer" sx={{ fontSize: '0.85rem' }}>Viewer</MenuItem>
          </TextField>

          <TextField
            select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            displayEmpty
            size="small"
            sx={{ minWidth: 160, ...darkInputSx }}
            SelectProps={{ displayEmpty: true, MenuProps: darkMenuProps }}
          >
            <MenuItem value="" sx={{ fontSize: '0.85rem' }}>All Genders</MenuItem>
            <MenuItem value="male" sx={{ fontSize: '0.85rem' }}>Male</MenuItem>
            <MenuItem value="female" sx={{ fontSize: '0.85rem' }}>Female</MenuItem>
            <MenuItem value="other" sx={{ fontSize: '0.85rem' }}>Other</MenuItem>
          </TextField>

          <TextField
            select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            displayEmpty
            size="small"
            sx={{ minWidth: 160, ...darkInputSx }}
            SelectProps={{ displayEmpty: true, MenuProps: darkMenuProps }}
          >
            <MenuItem value="" sx={{ fontSize: '0.85rem' }}>All Statuses</MenuItem>
            <MenuItem value="active" sx={{ fontSize: '0.85rem' }}>Active</MenuItem>
            <MenuItem value="inactive" sx={{ fontSize: '0.85rem' }}>Inactive</MenuItem>
          </TextField>
        </Box>
        
        <Box sx={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={filteredUsers}
            columns={columns}
            getRowId={(row) => row._id}
            loading={loading}
            pageSizeOptions={[10, 25, 50]}
            initialState={{
              pagination: { paginationModel: { pageSize: 10, page: 0 } },
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

      <Dialog
        open={modal.open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
        PaperProps={{
          sx: {
            bgcolor: '#05030A',
            color: '#ffffff',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: 4,
            boxShadow: '0 25px 50px -12px rgba(0,0,0,1)',
            backgroundImage: 'none'
          }
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle sx={{
            color: '#ffffff',
            borderBottom: '1px solid rgba(139, 92, 246, 0.15)',
            fontWeight: 300,
            letterSpacing: '0.1em',
            fontSize: '1.5rem',
            py: 3,
            px: 4
          }}>
            {modal.id ? 'Edit User' : 'Create '}
            <Box component="span" sx={{ fontWeight: 700, fontStyle: 'italic', fontFamily: 'serif', color: '#C084FC' }}>
              {modal.id ? '' : 'Account'}
            </Box>
          </DialogTitle>
          <DialogContent sx={{ px: { xs: 2, sm: 4 }, py: 4, backgroundColor: 'rgba(255,255,255,0.01)' }}>
            <Stack spacing={4} sx={{ pt: 2 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField {...fieldProps('firstName', 'First Name')} />
                <TextField {...fieldProps('lastName', 'Last Name')} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField {...fieldProps('age', 'Age')} />
                <TextField
                  {...fieldProps('gender', 'Gender', { select: true })}
                  SelectProps={{ MenuProps: darkMenuProps }}
                >
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>{labelize(gender)}</MenuItem>
                  ))}
                </TextField>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField {...fieldProps('contactNumber', 'Contact Number')} />
                <TextField {...fieldProps('email', 'Email Address', { type: 'email' })} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField
                  {...fieldProps('type', 'Role', { select: true })}
                  SelectProps={{ MenuProps: darkMenuProps }}
                >
                  {types.map((type) => (
                    <MenuItem key={type} value={type}>{labelize(type)}</MenuItem>
                  ))}
                </TextField>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField {...fieldProps('username', 'Username')} />
                <TextField
                  {...fieldProps('password', 'Password', {
                    type: showPassword ? 'text' : 'password',
                    slotProps: {
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              onClick={() => setShowPassword((prev) => !prev)}
                              onMouseDown={(event) => event.preventDefault()}
                              sx={{ color: '#a1a1aa', '&:hover': { color: '#C084FC' } }}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    },
                  })}
                />
              </Stack>
              <TextField {...fieldProps('address', 'Address', { multiline: true, rows: 3 })} />
              <FormControlLabel
                control={
                  <Switch
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': { color: '#C084FC' },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#8B5CF6', opacity: 1 },
                      '& .MuiSwitch-track': { backgroundColor: 'rgba(255,255,255,0.1)' }
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: '0.9rem', color: form.isActive ? '#e4e4e7' : '#71717a', transition: 'color 0.3s ease' }}>
                    {form.isActive ? "Account Status: Active" : "Account Status: Disabled"}
                  </Typography>
                }
                sx={{ ml: 1 }}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 4, py: 3, borderTop: '1px solid rgba(139, 92, 246, 0.15)' }}>
            <Button
              onClick={closeModal}
              variant="outlined"
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
                py: 1,
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
              {modal.id ? 'Update' : 'Save'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UsersPage;