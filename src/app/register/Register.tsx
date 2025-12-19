"use client";

import {
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepIndicator,
} from "@mui/joy";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";
import RegisterForm from "./RegisterForm";
import { Check } from "@mui/icons-material";

const Register = () => {
  const router = useRouter();

  const handleBackToLogin = () => {
    router.push(ROUTES.LOGIN);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   justifyContent: "center",
          minHeight: "100vh",
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            width: "100%",
            maxWidth: { xs: "100%", sm: "500px", md: "600px" },
            p: { xs: 3, sm: 4, md: 6 },
            border: 1,
            borderColor: "red",
            borderRadius: 2,
            gap: 3,
          }}
        >
          <Typography
            color="primary"
            level="h2"
            variant="soft"
            sx={{
              textAlign: "center",
            }}
          >
            Register
          </Typography>

          <Stepper>
            <Step
              orientation="horizontal"
              indicator={
                <StepIndicator variant="solid" color="primary">
                  <Check />
                </StepIndicator>
              }
            >
              Details
            </Step>
            <Step
              orientation="horizontal"
              indicator={
                <StepIndicator variant="solid" color="primary">
                  <Check />
                </StepIndicator>
              }
            >
              Confirmation
            </Step>
            <Step
              orientation="horizontal"
              indicator={
                <StepIndicator variant="solid" color="primary">
                  <Check />
                </StepIndicator>
              }
            >
              Key!
            </Step>
          </Stepper>
          <RegisterForm />

          <Button
            fullWidth
            variant="outlined"
            onClick={handleBackToLogin}
            sx={{ mt: 2 }}
          >
            Back to Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Register;
