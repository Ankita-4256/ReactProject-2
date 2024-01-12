import React from 'react';
import './index.css'

function Cards(props) {
    return (
        <>
            <div className="cards">
            <div className="card">
                <img src={props.imgSource} className='card_img' />

                <div className="card_info">
                <span className='card_category'>A Netflix Series</span>
                    <h3 className='card_title'><b>{props.name}</b></h3>
                    <a href={props.link}>
                    <button>Watch Now</button>
                    </a>
                </div>
                </div>
            </div>
        </>
    )
}

export default Cards;