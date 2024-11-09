import React from 'react';

const Star = ({filled}) => {
    return (
        <span style={{ color: filled ? 'gold' : 'gray' }}>
          &#9733; 
        </span>
    );
};

const StarRating = ({rating}) => {
    const fullStar = Math.floor(rating); 
    const emptyStar = 5 - Math.ceil(rating); 
    const halfStar = rating % 1 >= 0.5; 

    return (
        <div>
            {[...Array(fullStar)].map((unused, i) => (
                <Star key={`full-${i}`} filled={true}/>
            ))}
            {halfStar && <Star key="half" filled={true} />}
            {[...Array(emptyStar)].map((unused, i) => (
                <Star key={`empty-${i}`} filled={false} />
            ))}
        </div>
    )
}

export default StarRating