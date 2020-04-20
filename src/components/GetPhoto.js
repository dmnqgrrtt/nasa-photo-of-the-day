import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowPhoto from './ShowPhoto'


const GetPhoto = () => {

    const [photoData, setPhotoData] = useState({});
    useEffect (()=>{
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => {
                console.log(response);
                setPhotoData(response.data);
            })
    },[])
    return (
        <div className='get_photo'>
            <ShowPhoto photo={photoData} />
        </div>
    );
}

export default GetPhoto;