"use client";

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListDivider,
  ListItem,
  ListItemButton,
  listItemButtonClasses,
  ListItemDecorator,
  Stack,
  Typography,
} from "@mui/joy";
import { useColorScheme } from "@mui/joy/styles";
import {
  DarkMode,
  ExpandLess,
  ExpandMore,
  KeyboardArrowDown,
  LightMode,
  Menu,
  ReceiptLong,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const FixedDrawer = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  const drawerWidth = 280;
  return (
    <>
      {isSmallScreen && (
        <IconButton
          variant="outlined"
          onClick={() => setDrawerOpen(true)}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1200,
          }}
        >
          <Menu />
        </IconButton>
      )}

      <Drawer
        anchor="left"
        open={isSmallScreen ? drawerOpen : true}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          content: {
            sx: {
              width: drawerWidth,
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              p: 2,
            },
          },
        }}
      >
        <Box sx={{ border: 1, borderColor: "blue", p: 1, borderRadius: 1 }}>
          <Typography level="h2" textAlign="center" color="primary" pb={4}>
            SplitGo
          </Typography>
          <List
            size="sm"
            variant="outlined"
            sx={{ maxWidth: 300, borderRadius: "sm" }}
          >
            <ListItem nested>
              <ListItem>
                <Typography level="body-xs" sx={{ textTransform: "uppercase" }}>
                  Members
                </Typography>
              </ListItem>
              <List>
                <ListItem>
                  <ListItemButton selected>Home</ListItemButton>
                </ListItem>
              </List>
            </ListItem>
            <ListDivider inset={"gutter"} />
            <ListItem sx={{ "--List-gap": "0px" }}>
              <ListItemButton>Quick Start</ListItemButton>
            </ListItem>
            <ListItem
              nested
              sx={{ my: 1 }}
              endAction={
                <IconButton
                  variant="plain"
                  size="sm"
                  color="neutral"
                  onClick={() => setOpen(!open)}
                >
                  <KeyboardArrowDown
                    sx={[
                      open
                        ? { transform: "initial" }
                        : { transform: "rotate(-90deg)" },
                    ]}
                  />
                </IconButton>
              }
            >
              <ListItem>
                <Typography
                  level="inherit"
                  sx={[
                    open
                      ? { fontWeight: "bold", color: "text.primary" }
                      : { fontWeight: null, color: "inherit" },
                  ]}
                >
                  Members
                </Typography>
                <Typography component="span" level="body-xs">
                  9
                </Typography>
              </ListItem>
              {open && (
                <List sx={{ ml: 1 }}>
                  <ListItem>
                    <ListItemButton>Acap</ListItemButton>
                  </ListItem>
                </List>
              )}
            </ListItem>
          </List>
        </Box>
        <Stack spacing={2}>
          <Typography level="h4">Settings</Typography>

          <Box>
            <Typography level="body-sm" sx={{ mb: 1 }}>
              Theme
            </Typography>
            {mounted ? (
              <IconButton
                variant="outlined"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                sx={{ width: "100%" }}
              >
                {mode === "light" ? (
                  <>
                    <DarkMode sx={{ mr: 1 }} />
                    <Typography>Dark Mode</Typography>
                  </>
                ) : (
                  <>
                    <LightMode sx={{ mr: 1 }} />
                    <Typography>Light Mode</Typography>
                  </>
                )}
              </IconButton>
            ) : (
              <IconButton variant="outlined" sx={{ width: "100%" }} />
            )}
          </Box>
        </Stack>
      </Drawer>
    </>
  );
};

export default FixedDrawer;
