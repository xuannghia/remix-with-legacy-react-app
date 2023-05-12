import { Box } from "@mui/material";
import { useParams } from "react-router";

export default function BlogPage() {
  const params = useParams();

  return (
    <Box px={2}>
      <h1>Blog Page</h1>
      <p>Slug: {params.slug}</p>
    </Box>
  )
}