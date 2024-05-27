// ResetPasswordSuccess.jsx

import { Container, Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import Avatar from "@mui/material/Avatar";
import DoneIcon from '@mui/icons-material/Done';
export default function ResetPasswordSuccess() {
  const router = useRouter();

  const handleBackToLogin = () => {
    router.push('/login');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
          <Avatar sx={{ m: 1, bgcolor: "green" }}>
        <DoneIcon/>
        </Avatar>
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          Your password has been reset successfully. You can now login with your new password.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBackToLogin}
        >
          Back to Login
        </Button>
      </Box>
    </Container>
  );
}
