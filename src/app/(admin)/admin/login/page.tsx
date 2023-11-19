"use client";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  alpha,
  lighten,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";
const Page = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [fData, setFData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  return (
    <Box
      sx={{
        flex: 1,
        height: "100%",
        width: "100%",
        ".MuiPageTitle-wrapper": {
          background:
            theme.palette.mode === "dark"
              ? theme.colors.alpha.trueWhite[5]
              : theme.colors?.alpha.white[50],
          marginBottom: `${theme.spacing(4)}`,
          boxShadow:
            theme.palette.mode === "dark"
              ? `0 1px 0 ${
                  alpha(lighten(theme.colors.primary.main, 0.7), 0.15) || ""
                }, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
              : `0px 2px 4px -3px ${alpha(
                  theme.colors?.alpha.black[100] || "#FFFFFF",
                  0.1
                )}, 0px 5px 12px -4px ${alpha(
                  theme.colors?.alpha.black[100] || "#FFFFFF",
                  0.05
                )}`,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card>
          <CardHeader title="LOGIN" />
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <FormControl>
                  <InputLabel>Email</InputLabel>
                  <OutlinedInput
                    value={fData.email}
                    onChange={(e) =>
                      setFData((s) => ({ ...s, email: `${e.target.value}` }))
                    }
                    required
                    id="standard-required"
                    label="Email"
                    fullWidth
                  />
                </FormControl>
                <FormControl>
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    value={fData.password}
                    required
                    onChange={(e) =>
                      setFData((s) => ({ ...s, password: e.target.value }))
                    }
                    fullWidth
                    id="standard-required"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
              <Box py={2}>
                <Button type={"submit"} sx={{ mb: 1 }} fullWidth>
                  Submit
                </Button>
                <Divider />
                <Typography
                  sx={{ pt: 2, textTransform: "uppercase" }}
                  textAlign={"center"}
                >
                  <Link
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                    href={"/admin/sign-in"}
                  >
                    Sign-up
                  </Link>
                </Typography>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Page;
