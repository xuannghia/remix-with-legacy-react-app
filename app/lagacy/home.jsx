import { useContext } from "react"
import { SharingContext } from "~/contexts/SharingContext"

import Button from '@mui/material/Button'
import { Box } from "@mui/material"

export default function HomePage() {
  const { count, increase } = useContext(SharingContext)
  return (
    <Box px={2}>
      <h1>Home page</h1>
      <Box mb={2}>Count: {count}</Box>
      <Button variant="contained" onClick={increase}>Increase</Button>
    </Box>
  )
}