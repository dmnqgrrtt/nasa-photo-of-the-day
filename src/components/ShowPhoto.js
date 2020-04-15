import React from 'react';

const ShowPhoto = (props) => {

    const photo = props.photo;
    return (
        <div className='show_photo'>
            <div className='photo_info'>
                <h2>{photo.title}</h2>
                <img src={photo.url}/>
                <p>{photo.explanation}</p>
            </div>  
            <div className='copyright'>
                <p> Copyright {photo.copyright}</p>
            </div>
        </div>      
    );
}

export default ShowPhoto;