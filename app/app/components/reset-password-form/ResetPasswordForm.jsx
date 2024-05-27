"use client";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";
import SyncLockIcon from "@mui/icons-material/SyncLock";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";


export default function ResetPasswordForm({formik}) {

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <SyncLockIcon />
        </Avatar>
        <Typography
          variant="body1"
          sx={{ width: "100%", textAlign: "center", mt: 1, mb: 1 }}
        >
          Please enter your new password
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            margin="normal"
            fullWidth
            id="password"
            label="New Password"
            name="password"
            type="password"
            autoComplete="new-password"
            autoFocus
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            margin="normal"
            fullWidth
            id="confirmPassword"
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Reset Password
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
