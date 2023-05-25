import { Avatar, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Video() {
    const [index, setIndex] = useState(0);
    const [hover, setHover] = useState(false);
    let videos = [
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumb: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumb: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
            thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
        },
    ];

    useEffect(() => {
        setIndex(0);
    }, [])

    return (
        <Grid container sx={{ height: '100vh', background: 'linear-gradient(#2C3E50, #000000)' }} display="flex" justifyContent="center" alignItems="center">
            <Grid item xs={12} display="flex" justifyContent="center">
                <ReactPlayer loop playing={true} controls width="70%" height="70%" url={videos[index].url} />
            </Grid>

            {/* <div onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <Grid sx={{ visibility: hover ? 'visible' : 'hidden' }} item container display="flex" justifyContent="center" gap={2}>
                {
                    videos.map((v, index) => (
                        <Grid></Grid>
                    ))
                }
            </Grid>
            </div> */}
            <div onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} style={{ width: '60%', display: 'flex', overflowX: 'auto' }}>
                <div className="scroll" style={{ width: '100%', display: 'flex', overflowX: 'auto', visibility: hover ? 'visible' : 'hidden' }}>
                    {
                        videos.map((v, index) => (
                            <div style={{ color: 'red', margin: 10 }}><img onClick={() => setIndex(index)} width="40px" style={{ borderRadius: '50%', cursor: 'pointer' }} src={v.thumb} /></div>
                        ))
                    }
                </div>
            </div>
        </Grid>
    )
}