const form = document.getElementById('form');
const input = document.getElementById('search');
const cardsContainer = document.getElementById('cards');

const request = async (value) => { 
    const response = await fetch(`http://www.omdbapi.com/?s=${value}&apikey=d4fff8ef`);
    const data = await response.json();
    setData(data.Search);
}

const setData = (movies) =>{

    const values = movies.map(movie => {
        const {Poster, Title, imdbID} = movie;
        return(`
            <div class="card-wrapper">
                <div class="card">
                    <div class='img-container'>
                        <img src=${Poster} alt="">
                    </div>
                    <div class="card-info">
                        <h2>${Title}</h2>
                    </div>
                    <button onclick="changeRequest('${movie.imdbID}')">More info</button>
                </div>
            </div> 
        `);
    }).join('');
    cardsContainer.innerHTML = values;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    request(value);
})


const changeRequest = (id) => {
    sessionStorage.setItem('movie',id);
    window.location = 'movie.html';
    return false;
}

// export default function getMovie(){
//     let movie = sessionStorage.getItem('movie');
//     console.log(movie)
// }

