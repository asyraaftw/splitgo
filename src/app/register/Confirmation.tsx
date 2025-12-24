import {
  Diversity3TwoTone,
  LocationOn,
  SentimentDissatisfiedTwoTone,
  SentimentSatisfiedAltTwoTone,
} from "@mui/icons-material";
import { Box, Button, Input, Stack, Typography } from "@mui/joy";

const Confirmation = ({
  data,
  onNext,
  onBack,
}: {
  data: any;
  onNext: () => void;
  onBack: () => void;
}) => {
  console.log({ data });

  // api will be here

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
        <Stack direction="column" spacing={2} sx={{ mb: 2 }}>
          <Input
            value={data?.groupName}
            // disabled
            variant="outlined"
            color="success"
            startDecorator={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 24,
                }}
              >
                <Diversity3TwoTone />
              </Box>
            }
            slotProps={{
              input: {
                sx: {
                  textAlign: "center",
                },
              },
            }}
            sx={{ width: 240 }}
          />
        </Stack>

        <Stack direction="column" spacing={2} sx={{ mb: 2 }}>
          <Input
            value={`${data?.headCount} people`}
            // disabled
            variant="outlined"
            color="success"
            startDecorator={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 24,
                }}
              >
                <SentimentSatisfiedAltTwoTone />
              </Box>
            }
            slotProps={{
              input: {
                sx: {
                  textAlign: "center",
                },
              },
            }}
            sx={{ width: 240 }}
          />
        </Stack>

        <Stack direction="column" spacing={2} sx={{ mb: 2 }}>
          <Typography>Member Names:</Typography>

          <Stack direction="column">
            {data?.names?.map((name: string, index: number) => (
              <Input
                key={index}
                value={name}
                // disabled
                variant="outlined"
                color="success"
                sx={{ width: 240, mb: 1 }}
                slotProps={{
                  input: {
                    sx: {
                      textAlign: "center",
                    },
                  },
                }}
              />
            ))}
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Button variant="outlined" color="neutral" onClick={onBack}>
            Back
          </Button>
          <Button type="submit" variant="solid" onClick={onNext}>
            Confirm
          </Button>
        </Stack>
      </Box>
    </>
  );
};
export default Confirmation;
