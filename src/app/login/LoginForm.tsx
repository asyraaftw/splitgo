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
} from "@mui/joy";
import { useRouter } from "next/navigation";
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

  const onSubmit = (data: LoginFormData) => {
    console.log("Form data:", data);
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
