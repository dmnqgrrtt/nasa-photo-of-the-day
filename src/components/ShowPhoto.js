import React from 'react';
import styled from 'styled-components';


const Footer = styled.p`
    font-weight: bold;
    color: red;
`;

const Description = styled.p`
    width: 65%;
    margin-top: 3%;
    border: 2px solid black;    
    padding: 1%; 
`;

const PhotoTitle = styled.h2`
    background: grey;
    color: white;
    width: 63.5%;
    padding-top: 2%;
    padding-bottom: 2%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const ShowPhoto = (props) => {

    const photo = props.photo;
    return (
        <div className='show_photo'>
            <Wrapper>
                <PhotoTitle>{photo.title}</PhotoTitle>
                <img src={photo.url} alt='picture text'/>
                <Description>{photo.explanation}</Description>
            </Wrapper>  
            <div className='copyright'>
                <Footer> Copyright {photo.copyright}</Footer>
            </div>
        </div>      
    );
}

export default ShowPhoto;