import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';

ReactDOM.render(
<>
<h1>NetFlix Animes</h1>

<Cards imgSource="https://picsum.photos/200/300"
name = "Spy X Family" />

<Cards imgSource="https://picsum.photos/200/300"
name = "Inuyasha" />

</>,document.getElementById('root'));

