// {
//     type: 'ADD_MOVIE'
//     movies:  [m1, m2, m3]
// }
// {
//     type: 'DECREASE_COUNT'
// }

//action types
 export const ADD_MOVIE = 'ADD_MOVIE';
 export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
 export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
 export const SET_SHOW_FAVOUTITES = 'SET_SHOW_FAVOUTITES';
 export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
 export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

 // action creator
 export function addMovies (movies) {
    return{
        type: ADD_MOVIE,
        movies
    }
 }

 export function addFavourite (movie) {
    return{
        type: ADD_TO_FAVOURITES,
        movie
    }
 }

 export function removeFromFavourites (movie) {
    return{
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
 }

 export function setShowFavourites (val) {
    return{
        type: SET_SHOW_FAVOUTITES,
        val
    }
 }
 
 export function addMovieToList(movie){
    return{
        type: ADD_MOVIE_TO_LIST,
        movie
    }
 }

 export function handleMovieSearch (movie) {
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    
    return function (dispatch) {
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log('movie', movie);
    
            //dispatch action
             dispatch(addMovieSearchResult(movie));
        })
    } 
 }

 export function addMovieSearchResult (movie) {
    return {
        type: ADD_SEARCH_RESULT,
        movie
    };
 }