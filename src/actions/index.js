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
