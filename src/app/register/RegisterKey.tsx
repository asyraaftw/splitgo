import { Box, Typography } from "@mui/joy";

const RegisterKey = () => {
  return (
    <>
      <Box
        // onSubmit={handleSubmit(onSubmit)}
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
        <Typography level="h3" textAlign="center" color="success">
          🎉 Registration Complete!
        </Typography>
        <Typography level="h3" textAlign="center" color="success">
          Key : XXXXX-XXXXX-XXXXX-XXXXX
        </Typography>
        <Typography level="body-sm" textAlign="center" color="warning">
          Please save this key securely. You will need it to access your
          account.
        </Typography>
      </Box>
    </>
  );
};
export default RegisterKey;
