import React from "react";
import jobs from "../jobs.json";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

function DetailPage() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);

  if (!job)
    return (
      <Typography variant="h3" marginTop={3}>
        Job not found
      </Typography>
    );

  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" marginTop={3}>
        Job Title: {job.title}
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }} alignItems="center">
        Job Desciption: {job.description}
      </Box>
      <Box marginTop={3} sx={{ display: "flex" }} alignItems="center">
        Requirements: {job.skills.map((skill) => `, ${skill}`)}
      </Box>
      <Box marginTop={3} sx={{ display: "flex" }} alignItems="center">
        Salary: {job.salaryLow} USD - {job.salaryHigh} USD per year
      </Box>
    </Container>
  );
}

export default DetailPage;
