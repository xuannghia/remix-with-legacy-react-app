import { useContext } from "react"
import Button from '@mui/material/Button'

import { SharingContext } from "~/contexts/SharingContext"
import { Link } from "@remix-run/react"
import { Box } from "@mui/material"

export default function Index() {
  const { count, increase } = useContext(SharingContext)

  return (
    <Box p={2}>
      <h1>This is Remix page</h1>
      <Box mb={2}>Count: {count}</Box>
      <Button variant="contained" color="secondary" onClick={increase}>Increase</Button>
      <Box mt={2}><Link to="/about">Go to About</Link></Box>
    </Box>
  )
}