import { LoginTwoTone } from "@mui/icons-material";
import { Box, IconButton, Option, Select, Stack } from "@mui/joy";
import { Controller, useForm } from "react-hook-form";

interface RegisterForm {
  key: string;
  headCount: number;
}
const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    defaultValues: {
      //   key: "",
      headCount: 0,
    },
  });

  const onSubmit = (data: RegisterForm) => {
    console.log("Form data:", data);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          //   gap: 2,
          alignItems: "center",
          width: "100%",
          border: 1,
          borderColor: "blue",
        }}
      >
        {/* form */}

        <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
          <Controller
            name="headCount"
            control={control}
            rules={{
              required: "Headcount is required",
            }}
            render={({ field: { onChange, value, ...field } }) => (
              <Select
                {...field}
                value={value || null}
                onChange={(_, newValue) => onChange(newValue)}
                placeholder="Head Count"
                required
                sx={{ minWidth: 200 }}
              >
                {[...Array(10)].map((_, i) => (
                  <Option key={i + 1} value={i + 1}>
                    {i + 1}
                  </Option>
                ))}
              </Select>
            )}
          />

          <IconButton
            variant="soft"
            type="submit"
            color="success"
            sx={{ flex: 1 }}
          >
            <LoginTwoTone />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

export default RegisterForm;
