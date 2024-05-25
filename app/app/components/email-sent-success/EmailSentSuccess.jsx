import { Container, Typography, Button, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { useRouter } from "next/navigation";

export default function EmailSentSuccess({ email }) {
  const router = useRouter();

  const handleBackToSite = () => {
    router.push("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
        <MarkEmailUnreadIcon/>
        </Avatar>
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          We've sent a password reset link to {email}. Please check your inbox
          and follow the instructions.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleBackToSite}>
          Back to Site
        </Button>
      </Box>
    </Container>
  );
}
