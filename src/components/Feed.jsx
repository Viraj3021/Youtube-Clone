import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchApi";
import Videos from "./Videos";

const Feed = () => {
  const [selectCategory, setSelectCategory] = useState("New");
  const [videos , setVideos] = useState([])


  useEffect(() => {
    fetchData(`search?part=snippet&q=${selectCategory}`).then((data) => setVideos(data.items));
  }, [selectCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "88vh" },
          borderRight: "1px solid #3d3d3d",
          p: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
        <Typography className="copyright" variant="body2" sx={{ color: "#fff" }}>
          CopyRight @Youtube Clone
        </Typography>
      </Box>
      <Box  p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2} sx={{ color: "white" }}
        >
          {selectCategory}{" "}
          <span
            style={{
              color: "#FC1503",
            }}
          >
            videos
          </span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
