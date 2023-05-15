import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useContext } from "react";

import { SharingContext } from "~/contexts/SharingContext";

export default function HomePage() {
  const { count, increase } = useContext(SharingContext);
  return (
    <Box px={2}>
      <h1>Home page</h1>
      <Box mb={2}>
        Count: <span data-testid="counter">{count}</span>
      </Box>
      <Button variant="contained" onClick={increase}>
        Increase
      </Button>
    </Box>
  );
}
