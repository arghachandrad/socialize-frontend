import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Gear } from "phosphor-react";
import React, { useState } from "react";
import { Nav_Buttons } from "../../data";
import useSettings from "../../hooks/useSettings";
import Logo from "../../assets/Images/logo.ico";
import AntSwitch from "../../components/AntSwitch";

export default function Sidebar() {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  const { onToggleMode } = useSettings();
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        height: "100vh",
        width: 100,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        direction="column"
        sx={{ width: "100%", alignItems: "center", height: "100%" }}
        spacing={3}
        justifyContent="space-between"
      >
        <Stack alignItems="center" spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5, // 1.5 * 8 = 12px
            }}
          >
            <img src={Logo} alt={"SocializeLogo"} />
          </Box>
          <Stack
            sx={{
              width: "max-content",
            }}
            direction="column"
            alignItems="center"
            spacing={3}
          >
            {Nav_Buttons.map((btn) =>
              btn.index === selected ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  key={btn.index}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    {btn.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelected(btn.index)}
                  sx={{
                    width: "max-content",
                    color: theme.palette.mode === "light" ? "#000" : "#fff",
                  }}
                  key={btn.index}
                >
                  {btn.icon}
                </IconButton>
              )
            )}
            <Divider sx={{ width: 48 }} />
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => setSelected(3)}
                sx={{
                  width: "max-content",
                  color: theme.palette.mode === "light" ? "#000" : "#fff",
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Stack spacing={4} alignItems="center">
          <AntSwitch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          />
          <Avatar src={faker.image.avatar()} />
        </Stack>
      </Stack>
    </Box>
  );
}
