import { useEffect, useState } from "react";

type videoType = {
    titulo: string,
    thumbnail: string
}

const UseVideo = () => {

    const [videos, setVideos] = useState<videoType[]>();

    async function fetchVideos() {
        const res = await fetch('/data.json');
        const data = await res.json();
        setVideos(data);
    }

    useEffect(() => {
        fetchVideos();
    }, []);
    return videos;
}
export default UseVideo;
