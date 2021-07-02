const container = document.getElementById('movieInfo');
const Plot = document.getElementById('plot');

async function getMovie(){
    let movie = sessionStorage.getItem('movie');
    console.log(movie)
    const response = await fetch(`http://www.omdbapi.com/?i=${movie}&apikey=d4fff8ef`);
    const data = await response.json();
    setData(data);
}

const setData = (movie) =>{
    console.log(movie)
    const body = `
        <div class="movie">
            <img src=${movie.Poster} alt=${movie.Title}>
            <div class='movie-details'>
            <span> Title : <span>${movie.Title}</span> </span>    
            <span> Year : <span>${movie.Year}</span> </span>
            <span> Rated : <span>${movie.Rated} </span> </span>
            <span> Realeased :<span> ${movie.Released}</span>  </span>
            <span> RunTime : <span>${movie.Runtime} </span> </span>
            <span> Actors : <span>${movie.Actors} </span> </span>
            <span> Director: <span>${movie.Director} </span> </span>
                <button onclick="goBack()">Home</button>
            </div>
        </div>
        `

    const plotText =` 
            <h2>Plot</h2>
            <p>${movie.Plot} </p>
        `
    Plot.innerHTML = plotText;
    container.innerHTML = body;
}

const goBack  = () => {
    window.location = 'index.html';
    return false;
}


getMovie();