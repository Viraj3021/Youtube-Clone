
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/fetchApi'
import { Box } from '@mui/material'
import ChannelCard from './ChannelCard'
import Videos from './Videos'


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState('')
  const [videos, setVideos] = useState([])
  const {id} = useParams()
  console.log(channelDetail, videos);
  useEffect(() => {
    fetchData(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))
    fetchData(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
  },[id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
           background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex:"20",
          height:"300px",
        }}/>
         <ChannelCard marginTop="-103px" channelDetail={channelDetail}/>
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr:{sm:"100px"}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail