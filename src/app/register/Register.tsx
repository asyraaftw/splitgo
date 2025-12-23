"use client";

import {
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepIndicator,
} from "@mui/joy";
import { Check } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { ROUTES } from "@/config/routes";
import RegisterForm from "./RegisterForm";
import Confirmation from "./Confirmation";

const steps = ["Details", "Confirmation", "Key"];

const Register = () => {
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<any>(null);

  const handleBackToLogin = () => {
    router.push(ROUTES.LOGIN);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: 500, md: 600 },
          p: { xs: 3, sm: 4, md: 6 },
          border: 1,
          borderRadius: 2,
          gap: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography level="h2" textAlign="center" color="primary">
          Register
        </Typography>

        {/* Stepper */}
        <Stepper>
          {steps.map((label, index) => (
            <Step
              key={label}
              completed={index < activeStep}
              active={index === activeStep}
              indicator={
                <StepIndicator
                  variant={index <= activeStep ? "solid" : "outlined"}
                  color={index <= activeStep ? "primary" : "neutral"}
                >
                  {index < activeStep ? <Check /> : index + 1}
                </StepIndicator>
              }
            >
              {label}
            </Step>
          ))}
        </Stepper>

        {/* Step content */}
        {activeStep === 0 && (
          <RegisterForm
            onNext={(data) => {
              setFormData(data);
              setActiveStep(1);
            }}
          />
        )}

        {activeStep === 1 && (
          <Confirmation
            data={formData}
            onNext={() => setActiveStep(2)}
            onBack={() => setActiveStep(0)}
          />
        )}

        {activeStep === 2 && (
          <Typography level="h3" textAlign="center" color="success">
            🎉 Registration Complete!
          </Typography>
        )}

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
  );
};

export default Register;
