import { Box, Typography } from "@mui/joy";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        minHeight: "100vh",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: { xs: "100%", sm: "500px", md: "600px" },
          p: { xs: 3, sm: 4, md: 6 },
          border: 1,
          borderColor: "red",
          borderRadius: 2,
          gap: 3,
        }}
      >
        <Typography level="h2" textAlign="center" color="primary">
          Login
        </Typography>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Login;
