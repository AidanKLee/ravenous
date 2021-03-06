import React from 'react';
import './Business.css';

const Business = props => {

    const { business } = props;

    return (
        <div className="Business">
            <div className="image-container">
                <a href={business.url} target='_blank' rel='noreferrer'>
                    <img src={business.imageSrc} alt=''/>
                </a>
            </div>
            <a href={business.url} target='_blank' rel='noreferrer'>
                <h2>{business.name}</h2>
            </a>
            <div className="Business-information">
                <div className="Business-address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{`${business.state} ${business.zipCode}`}</p>
                </div>
                <div className="Business-reviews">
                    <h3>{business.category}</h3>
                    <h3 className="rating">{business.rating}</h3>
                    <p>{business.reviewCount}</p>
                </div>
            </div>
        </div>
    )
}

export default Business;