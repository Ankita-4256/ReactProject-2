import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';

ReactDOM.render(
<>
<h1 className='heading_style'>NetFlix Top Animes</h1>

<Cards imgSource="https://images.justwatch.com/poster/308633830/s332/season-2"
name = "Spy X Family" link="https://www.netflix.com/title/81511410" />

<Cards imgSource="https://images.justwatch.com/poster/258527365/s718/season-1.jpg"
name = "Demon Slayer" link="https://www.netflix.com/title/81091393" />

<Cards imgSource="https://m.media-amazon.com/images/S/pv-target-images/1c7673199fafc72304080c0811a5ff1b7bb18bb59631ec51dca09853e2344629.jpg"
name = "Blue Lock" link="https://www.netflix.com/title/81640753"/>

<Cards imgSource="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22812509_b_v13_ab.jpg"
name = "Cyber Punk" link="https://www.netflix.com/title/81054853" />

<Cards imgSource="https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtYWUwOWFlY2IxZGVjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
name = "Jujutsu Kaisen" link="https://www.netflix.com/title/81278456" />

</>,document.getElementById('root'));

