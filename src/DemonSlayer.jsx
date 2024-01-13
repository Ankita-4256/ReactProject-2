import Cards from './Cards';
import arraydata from './arrays'
import React from 'react';

const DemonSlayer =()=>{
    return (
        <Cards key={arraydata[1].id} imgSource={arraydata[1].imgSource}
        name={arraydata[1].name} link={arraydata[1].link} />
    )
}

export default DemonSlayer;