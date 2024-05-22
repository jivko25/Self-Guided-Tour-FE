"use client"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Typography, TextField, Button, Grid, Link } from '@mui/material';
import LockResetIcon from '@mui/icons-material/LockReset';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

export default function ForgotPasswordForm() {
  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // Implement your password reset logic here
        // For example, call a function to send the reset link
        // await sendResetPasswordLink(values.email);
        console.log('Form values:', values);
      } catch (error) {
        console.error('Failed to send reset link:', error);
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockResetIcon />
        </Avatar>
        <Typography variant="body1" sx={{ width: '100%', textAlign: 'center', mt: 1, mb: 1 }}>
          Please provide the email address linked to your account, and we will email you a link to reset your password.
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Reset Link
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Remembered your password? "}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
