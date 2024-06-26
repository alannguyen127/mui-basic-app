import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function BasicPagination() {
  const navigate = useNavigate();

  const handleChange = (event, value) => {
    navigate(`/${value}`);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={4}
        color="primary"
        onChange={handleChange}
        sx={{
          display: "flex",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
          "& .Mui-selected": {
            backgroundColor: "#d74742",
            "&:hover": {
              backgroundColor: "#d95f5b",
            },
          },

          //Work well on desktop but not mobile:
          // position: "absolute",
          // left: "50%",
          //   top: "50%",
          //   transform: "translate(-50%, -50%)",
        }}
      />
    </Stack>
  );
}
