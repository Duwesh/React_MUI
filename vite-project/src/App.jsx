import { Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { MuiTypography } from "./components/MuiTypography";
import { MuiButton } from "./components/MuiButton";
import { MuiAvatar } from "./components/MuiAvatar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      <MuiAvatar />
    </div>
  );
}

export default App;
