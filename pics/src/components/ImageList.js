import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {    
    const images = props.images
        .map( i => <ImageCard key={i.id} image={i}/>);
// or you could have
    // const images = props.images.map( ({description, id, urls}) => <img alt={description} key={id} src={urls.regular}/>);

    return <div className="image-list">{images}</div>
};

export default ImageList;