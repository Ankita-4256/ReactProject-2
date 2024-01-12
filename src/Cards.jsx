import React from 'react';
import './index.css'

function Cards(props) {
    return (
        <>
            <div className="card">
                <img src={props.imgSource} />
                <div className="container">
                    <h4><b>{props.name}</b></h4>
                    <button>Watch Now</button>
                </div>
            </div>
        </>
    )
}

export default Cards;