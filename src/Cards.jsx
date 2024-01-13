import React from 'react';
import './index.css'
import Images from './Images';

function Cards(props) {
    return (
        <>
            <div className="cards">
            <div className="card">
              <Images imgSource={props.imgSource}/>

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