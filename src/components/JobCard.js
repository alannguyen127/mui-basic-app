import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import SkillChip from "../components/SkillChip";

export default function ActionAreaCard({ job }) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {job.title}
          <hr />
        </Typography>
        <SkillChip skill={job.skills} />
        <Typography variant="body2" color="text.secondary" sx={{ pt: "10px" }}>
          {job.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate(`/job/${job.id}`)}
          sx={{
            backgroundColor: "#ffa726",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
