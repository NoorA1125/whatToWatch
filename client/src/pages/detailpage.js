import React from 'react';

function MovieDetails() {
    return (
        <div>
        <div class="details-container">
            <div class="card">
                <img src="https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
                    alt="Jumanji Welcome to the Jungle" />
        </div>
                <div class="desc"><p>
                    Four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji - you must survive it. To beat the game and return to the real world, they'll have to go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves - or they'll be stuck in the game forever.
        </p></div>
            </div>
            <div class="flexspace">
                <button id="add">add to list</button>
                <div class="rating"> Overall Rating : 7 out of 10  </div>
            </div>

            <div class="whereToWatch">
                <p>Where to watch data here</p>
            </div>
            </div>
    )
}

export default MovieDetails;