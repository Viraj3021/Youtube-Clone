import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchApi";
import Videos from "./Videos";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchData(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search result for: <span
          style={{
            color: "#FC1503",
          }}
        >
          {searchTerm}
        </span>{" "}
        videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr:{sm:"100px"}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  );
};

export default SearchFeed;
