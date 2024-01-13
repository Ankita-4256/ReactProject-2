
import Cards from './Cards';
import arraydata from './arrays'
import DemonSlayer from './DemonSlayer';
import SpyFamily from './SpyFamily';

var searchValue = 'Demon Slayer';

const sea =()=>{
  if(searchValue === 'Demon Slayer'){
    return <DemonSlayer/>
  }else{
    return <SpyFamily/>
  }
}

const App = () => (
<>
  <h1 className='heading_style'>NetFlix Top Animes</h1>

  {/* calling the fucntion to learn if else  */}
 {/* {sea()} */}

 {/* we can use ternary operator also to show data on cond  */}
 {/* {searchValue==='Demon Slayer'? <DemonSlayer/>:<SpyFamily/>} */}


 {arraydata.map(data => {
     return (
      <Cards key={data.id} imgSource={data.imgSource}
          name={data.name} link={data.link} />
      )
    })
  }

  </>

)

export default App;
