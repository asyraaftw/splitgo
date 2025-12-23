import { LoginTwoTone } from "@mui/icons-material";
import { Box, IconButton, Input, Option, Select, Stack } from "@mui/joy";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface RegisterForm {
  key: string;
  groupName: string;
  headCount: number;
  names: string[];
}

interface IProps {
  onNext: (data: RegisterForm) => void;
}
const RegisterForm = (props: IProps) => {
  const { onNext } = props;
  const {
    watch,
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<RegisterForm>({
    defaultValues: {
      //   key: "",
      groupName: "",
      headCount: 0,
      names: [],
    },
  });

  const headCount = watch("headCount");
  const names = watch("names");

  useEffect(() => {
    if (!headCount) {
      setValue("names", []);
      return;
    }

    if (names.length > headCount) {
      setValue("names", names.slice(0, headCount));
    }

    if (names.length < headCount) {
      setValue("names", [
        ...names,
        ...Array(headCount - names.length).fill(""),
      ]);
    }
  }, [headCount]);

  const onSubmit = (data: RegisterForm) => {
    console.log("Form data:", data);
    onNext(data);
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
          {/* trip name */}
          <Controller
            name="groupName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Group Name"
                sx={{ maxWidth: 200 }}
              />
            )}
          />
          {/* headcount */}
          <Controller
            name="headCount"
            control={control}
            rules={{ required: "Headcount is required" }}
            render={({ field: { onChange, value, ...field } }) => (
              <Select
                {...field}
                value={value || null}
                onChange={(_, newValue) => onChange(newValue)}
                placeholder="Head Count"
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

          {/* name of ppls */}
          {headCount > 0 &&
            Array.from({ length: headCount }).map((_, index) => {
              const nameError = errors.names?.[index];
              return (
                <Stack key={index} spacing={0.5} sx={{ maxWidth: 200 }}>
                  <Controller
                    name={`names.${index}`}
                    control={control}
                    rules={{ required: `Name ${index + 1} is required` }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder={`Name ${index + 1}`}
                        error={!!nameError}
                      />
                    )}
                  />
                </Stack>
              );
            })}

          <IconButton
            variant="soft"
            type="submit"
            color="primary"
            sx={{ flex: 1, width: "100%" }}
          >
            <LoginTwoTone />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

export default RegisterForm;
