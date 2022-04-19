import { Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { MuiTypography } from "./components/MuiTypography";
import { MuiButton } from "./components/MuiButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <MuiTypography /> */}
      <MuiButton />
    </div>
  );
}

export default App;
