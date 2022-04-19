import React from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

export const MuiButton = () => {
  return (
    // Stack for layout
    <Stack>
      <Stack spacing={2} direction="row">
        {/* Three diff types of buttons */}
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="error">
          Secondary
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("Clicked!")}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("Left Btn Clicked!")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup aria-label="text formatting">
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
