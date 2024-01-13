import Cards from './Cards';
import arraydata from './arrays'
import React from 'react';

const SpyFamily =()=>{
    return (
        <Cards key={arraydata[0].id} imgSource={arraydata[0].imgSource}
        name={arraydata[0].name} link={arraydata[0].link} />
    )
}

export default SpyFamily;