import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box sx={{
      boxShadow:"none",
      borderRadius:"20px",
      display:"flex",
      alignItem:"center",
      justifyContent:"center",
      width:{xs : "356px" , md:"260px"},
      height: "326px",
      margin:"auto",
      marginTop
    }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{
          display:"flex", justifyContent:"center" , flexDirection:"column", alignItems:"center", color:"#fff"
        }}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius: '50%' , height: '180px' , width:'180px' , mb: 2, border: "1px solid #e3e3e3"}}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle
                  sx={{
                    fontSize: 14,
                    color: "gray",
                    ml: "5px"

                  }}
                />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard