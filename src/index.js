import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import arraydata from './arrays'

ReactDOM.render(
    <>
        <h1 className='heading_style'>NetFlix Top Animes</h1>
        {arraydata.map(data => {
            return (
                <Cards imgSource={data.imgSource}
                    name={data.name} link={data.link} />
            )
        })}

    </>, document.getElementById('root'));

