import { Container } from "@mui/material";
import React from "react";
import jobs from "../jobs.json";
import Grid from "@mui/material/Grid";
import JobCard from "../components/JobCard";
import Paginations from "../components/Paginations";
import { useParams } from "react-router-dom";

function HomePage() {
  const params = useParams();
  let paramNumber = 1;
  if (Number(params.page)) paramNumber = Number(params.page);
  let a = 4 * paramNumber - 4;
  let b = paramNumber * 4;

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {jobs.slice(a, b).map((job) => (
          <Grid key={job.id} item xs={12} md={6} lg={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Paginations />
    </Container>
  );
}

export default HomePage;
