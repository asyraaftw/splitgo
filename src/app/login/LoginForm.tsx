"use client";

import { ROUTES } from "@/config/routes";
import { HowToRegTwoTone, KeyTwoTone, LoginTwoTone } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  LinearProgress,
  Stack,
  VariantProp,
} from "@mui/joy";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface LoginFormData {
  key: string;
}

const LoginForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      key: "",
    },
  });
  const [variant, setVariant] = useState<VariantProp>("soft");

  const goToDashboard = () => {
    router.push(ROUTES.DASHBOARD);
  };

  const onSubmit = (data: LoginFormData) => {
    console.log("Form data:", data);
    router.push(ROUTES.DASHBOARD);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
      }}
    >
      <Controller
        name="key"
        control={control}
        rules={{
          required: "Key is required",
          minLength: {
            value: 6,
            message: "Key must be at least 6 characters",
          },
        }}
        render={({ field }) => (
          <FormControl error={!!errors.key}>
            <Input
              {...field}
              type="password"
              placeholder="Enter your key"
              startDecorator={
                <Button
                  variant="soft"
                  color="neutral"
                  startDecorator={<KeyTwoTone />}
                >
                  Key
                </Button>
              }
              fullWidth
            />
            {errors.key && (
              <FormHelperText>{errors.key.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />

      {/* <LinearProgress color="primary" variant={variant} /> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          width: "100%",
          mt: 2,
        }}
      >
        <IconButton
          variant="soft"
          color="neutral"
          type="button"
          sx={{ flex: 1 }}
          onClick={() => router.push(ROUTES.REGISTER)}
        >
          <HowToRegTwoTone />
        </IconButton>
        <IconButton
          variant="soft"
          type="submit"
          color="success"
          sx={{ flex: 1 }}
        >
          <LoginTwoTone />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LoginForm;
