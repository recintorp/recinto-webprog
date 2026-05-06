import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
  alpha
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { DataGrid } from '@mui/x-data-grid';
import usersSeed from "../../data/user.json?raw";

const roles = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female', 'other'];

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  role: 'editor',
  username: '',
  password: '',
  address: '',
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

const loadUsers = () => {
  try {
    return {
      users: JSON.parse(usersSeed).map((user, index) => ({
        id: Number(user.id) || index + 1,
        firstName: String(user.firstName ?? '').trim(),
        lastName: String(user.lastName ?? '').trim(),
        age: String(user.age ?? '').trim(),
        gender: genders.includes(String(user.gender ?? '').trim().toLowerCase())
          ? String(user.gender ?? '').trim().toLowerCase()
          : '',
        contactNumber: String(user.contactNumber ?? '').trim(),
        email: String(user.email ?? '').trim().toLowerCase(),
        role: roles.includes(String(user.role ?? '').trim().toLowerCase())
          ? String(user.role ?? '').trim().toLowerCase()
          : 'editor',
        username: String(user.username ?? '').trim().toLowerCase(),
        password: String(user.password ?? ''),
        address: String(user.address ?? '').trim(),
        isActive: typeof user.isActive === 'boolean' ? user.isActive : true,
      })),
      error: '',
    };
  } catch {
    return {
      users: [],
      error: 'Unable to read users from src/assets/users.json.',
    };
  }
};

const seed = loadUsers();

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [users, setUsers] = useState(seed.users);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filteredUsers = users.filter((user) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      user.firstName?.toLowerCase().includes(searchLower) ||
      user.lastName?.toLowerCase().includes(searchLower) ||
      user.email?.toLowerCase().includes(searchLower) ||
      user.username?.toLowerCase().includes(searchLower);

    const matchesRole = !roleFilter || user.role === roleFilter;
    const matchesGender = !genderFilter || user.gender === genderFilter;
    const matchesStatus = statusFilter === '' || user.isActive === (statusFilter === 'active');

    return matchesSearch && matchesRole && matchesGender && matchesStatus;
  });

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };

  const openModal = (user) => {
    setModal({ open: true, id: user?.id ?? null });
    setForm(user ? { ...blankForm, ...user } : { ...blankForm });
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
    const contactNumber = form.contactNumber.trim();
    const age = form.age.trim();
    const password = form.password;

    [
      ['firstName', 'First name'],
      ['lastName', 'Last name'],
      ['age', 'Age'],
      ['gender', 'Gender'],
      ['contactNumber', 'Contact number'],
      ['email', 'Email'],
      ['role', 'Role'],
      ['username', 'Username'],
      ['password', 'Password'],
      ['address', 'Address'],
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!nextErrors.email && users.some((user) => user.id !== modal.id && user.email === email)) {
      nextErrors.email = 'Email address already exists.';
    }

    if (!nextErrors.username && /\s/.test(username)) {
      nextErrors.username = 'Username must not contain spaces.';
    }
    if (!nextErrors.username && users.some((user) => user.id !== modal.id && user.username === username)) {
      nextErrors.username = 'Username already exists.';
    }

    if (!nextErrors.password && password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }

    if (!nextErrors.contactNumber && !/^\d{11}$/.test(contactNumber)) {
      nextErrors.contactNumber = 'Contact number must be exactly 11 digits.';
    }

    if (!nextErrors.age && !/^\d+$/.test(age)) {
      nextErrors.age = 'Age must be a number only.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const nextUser = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: form.age.trim(),
      gender: form.gender.trim().toLowerCase(),
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim().toLowerCase(),
      role: form.role.trim().toLowerCase(),
      username: form.username.trim().toLowerCase(),
      password: form.password,
      address: form.address.trim(),
      isActive: form.isActive,
    };

    setUsers((prev) =>
      modal.id
        ? prev.map((user) => (user.id === modal.id ? { ...user, ...nextUser } : user))
        : [
            ...prev,
            {
              id: prev.reduce((max, user) => Math.max(max, Number(user.id) || 0), 0) + 1,
              ...nextUser,
            },
          ]
    );

    closeModal();
  };

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  const darkInputSx = {
    '& .MuiOutlinedInput-root': {
      color: '#ffffff',
      backgroundColor: 'rgba(10, 7, 16, 0.5)',
      borderRadius: 2,
      '& fieldset': { borderColor: 'rgba(139, 92, 246, 0.2)' },
      '&:hover fieldset': { borderColor: 'rgba(139, 92, 246, 0.4)' },
      '&.Mui-focused fieldset': { borderColor: '#8B5CF6' },
    },
    '& .MuiInputLabel-root': { color: '#a1a1aa' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#C084FC' },
    '& .MuiSvgIcon-root': { color: '#a1a1aa' },
    '& .MuiFormHelperText-root.Mui-error': { color: '#ef4444' }
  };

  const darkMenuProps = {
    PaperProps: {
      sx: {
        bgcolor: '#120e1f',
        color: '#ffffff',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        borderRadius: 2,
        '& .MuiMenuItem-root:hover': { backgroundColor: alpha('#8B5CF6', 0.15) },
        '& .Mui-selected': { backgroundColor: alpha('#8B5CF6', 0.25) + ' !important' }
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
      field: 'id', 
      headerName: 'ID', 
      width: 70,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'fullName',
      headerName: 'Full Name',
      flex: 1,
      minWidth: 180,
      valueGetter: (_, row) => `${row.firstName} ${row.lastName}`.trim(),
    },
    { 
      field: 'username', 
      headerName: 'Username', 
      minWidth: 150 
    },
    { 
      field: 'age', 
      headerName: 'Age', 
      width: 80,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'gender',
      headerName: 'Gender',
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (_, row) => labelize(row.gender),
    },
    { 
      field: 'contactNumber', 
      headerName: 'Contact Number', 
      minWidth: 160 
    },
    { 
      field: 'email', 
      headerName: 'Email', 
      flex: 1, 
      minWidth: 220 
    },
    {
      field: 'role',
      headerName: 'Role',
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (_, row) => labelize(row.role),
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
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            borderRadius: 1.5,
            bgcolor: row.isActive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            color: row.isActive ? '#10b981' : '#ef4444',
            border: row.isActive ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid rgba(239, 68, 68, 0.2)',
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
              borderColor: 'rgba(192, 132, 252, 0.4)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              '&:hover': {
                borderColor: '#C084FC',
                backgroundColor: 'rgba(192, 132, 252, 0.1)'
              }
            }}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => toggleStatus(row.id)}
            sx={{
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              bgcolor: row.isActive ? '#f59e0b' : '#10b981',
              color: '#ffffff',
              boxShadow: row.isActive ? '0 4px 10px rgba(245, 158, 11, 0.3)' : '0 4px 10px rgba(16, 185, 129, 0.3)',
              '&:hover': { 
                bgcolor: row.isActive ? '#d97706' : '#059669',
                boxShadow: row.isActive ? '0 6px 15px rgba(245, 158, 11, 0.4)' : '0 6px 15px rgba(16, 185, 129, 0.4)'
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
    <Box sx={{ width: '100%', pb: 8 }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={2}
        sx={{ mb: 5 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ height: '2px', width: 40, background: 'linear-gradient(90deg, #8B5CF6, transparent)' }} />
          <Typography variant="h4" sx={{ fontWeight: 300, color: '#ffffff', letterSpacing: '0.05em', fontSize: '1.8rem' }}>
            Users
          </Typography>
        </Box>
        <Button
          variant="outlined"
          onClick={() => openModal()}
          sx={{ 
            width: { xs: '100%', sm: 'auto' },
            color: '#C084FC',
            borderColor: 'rgba(139, 92, 246, 0.5)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            borderRadius: 2,
            px: 3,
            py: 1,
            '&:hover': {
              borderColor: '#C084FC',
              backgroundColor: alpha('#8B5CF6', 0.1)
            }
          }}
        >
          Add User
        </Button>
      </Stack>

      <Card sx={{ mb: 4, bgcolor: '#0a0710', border: '1px solid rgba(139, 92, 246, 0.15)', borderRadius: 3, boxShadow: '0 15px 35px -15px rgba(0,0,0,0.7)' }}>
        <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <TextField
              label="Search..."
              variant="outlined"
              size="small"
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={darkInputSx}
            />
            <TextField
              select
              label="Role"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              size="small"
              sx={{ minWidth: 160, ...darkInputSx }}
              SelectProps={{ MenuProps: darkMenuProps }}
            >
              <MenuItem value="">All Roles</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="editor">Editor</MenuItem>
              <MenuItem value="viewer">Viewer</MenuItem>
            </TextField>
            <TextField
              select
              label="Gender"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              size="small"
              sx={{ minWidth: 160, ...darkInputSx }}
              SelectProps={{ MenuProps: darkMenuProps }}
            >
              <MenuItem value="">All Genders</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
            <TextField
              select
              label="Status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              size="small"
              sx={{ minWidth: 160, ...darkInputSx }}
              SelectProps={{ MenuProps: darkMenuProps }}
            >
              <MenuItem value="">All Statuses</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </TextField>
          </Stack>
        </CardContent>
      </Card>

      {seed.error ? (
        <Alert severity="error" sx={{ mb: 4, bgcolor: 'rgba(239, 68, 68, 0.1)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 2 }}>
          {seed.error}
        </Alert>
      ) : null}

      {filteredUsers.length ? (
        <Box sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={filteredUsers}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[5, 10, 20]}
            rowHeight={65}
            initialState={{
              pagination: { paginationModel: { pageSize: 10, page: 0 } },
            }}
            sx={{
              border: '1px solid rgba(139, 92, 246, 0.15)',
              borderRadius: 3,
              backgroundColor: '#0a0710',
              color: '#ffffff',
              boxShadow: '0 15px 35px -15px rgba(0,0,0,0.7)',
              p: { xs: 1, sm: 2 },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: 'rgba(139, 92, 246, 0.05)',
                color: '#C084FC',
                borderBottom: '1px solid rgba(139, 92, 246, 0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.75rem',
                fontWeight: 700,
              },
              '& .MuiDataGrid-columnSeparator': {
                color: 'rgba(139, 92, 246, 0.2)',
              },
              '& .MuiDataGrid-cell': {
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                color: '#e4e4e7',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
              },
              '& .MuiDataGrid-row': {
                transition: 'background-color 0.2s ease',
              },
              '& .MuiDataGrid-row:hover': {
                backgroundColor: 'rgba(139, 92, 246, 0.08)',
              },
              '& .MuiDataGrid-footerContainer': {
                borderTop: '1px solid rgba(139, 92, 246, 0.2)',
                color: '#a1a1aa',
              },
              '& .MuiTablePagination-root': { color: '#a1a1aa' },
              '& .MuiTablePagination-selectIcon': { color: '#a1a1aa' },
              '& .MuiIconButton-root': { color: '#a1a1aa' },
              '& .MuiDataGrid-scrollbarFiller': {
                backgroundColor: '#0a0710',
              }
            }}
          />
        </Box>
      ) : (
        <Alert severity="info" sx={{ bgcolor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: 2 }}>
          No users found matching your criteria.
        </Alert>
      )}

      <Dialog
        open={modal.open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
        PaperProps={{
          sx: {
            bgcolor: '#120e1f',
            color: '#ffffff',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: 3,
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
            backgroundImage: 'none'
          }
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle sx={{ 
            color: '#ffffff', 
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            fontWeight: 600,
            letterSpacing: '0.05em',
            py: 3
          }}>
            {modal.id ? 'Edit User' : 'Add New User'}
          </DialogTitle>
          <DialogContent sx={{ px: { xs: 2, sm: 4 }, py: 4 }}>
            <Stack spacing={3} sx={{ pt: 2 }}>
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
                  {...fieldProps('role', 'Role', { select: true })}
                  SelectProps={{ MenuProps: darkMenuProps }}
                >
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>{labelize(role)}</MenuItem>
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
                              sx={{ color: '#a1a1aa', '&:hover': { color: '#ffffff' } }}
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
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#8B5CF6' },
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontWeight: 500, color: form.isActive ? '#ffffff' : '#a1a1aa' }}>
                    {form.isActive ? 'User Status: Active' : 'User Status: Inactive'}
                  </Typography>
                }
                sx={{ ml: 1 }}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 4, py: 3, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <Button 
              onClick={closeModal} 
              sx={{ 
                color: '#a1a1aa', 
                fontWeight: 600, 
                letterSpacing: '0.05em',
                '&:hover': { color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.05)' } 
              }}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              variant="contained" 
              sx={{ 
                bgcolor: '#8B5CF6',
                color: '#ffffff',
                fontWeight: 600,
                letterSpacing: '0.05em',
                px: 3,
                '&:hover': { 
                  bgcolor: '#7c3aed'
                } 
              }}
            >
              {modal.id ? 'Update User' : 'Save User'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UsersPage;