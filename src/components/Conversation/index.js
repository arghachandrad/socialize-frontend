import { Box, Stack } from "@mui/material";

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Conversation() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width="auto">
      {/* Chat Header */}
      <Header />
      {/* Chat Msg */}
      <Box width={"100%"} sx={{ flexGrow: 1 }}></Box>
      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
}
