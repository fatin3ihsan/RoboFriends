import React from 'react';

const Card = (props) =>{

    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5 tc'>
            <img alt='robot' src={`https://robohash.org/${props.name}?200*200`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;