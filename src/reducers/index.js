import {ADD_MOVIE, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOUTITES} from '../actions';

const initialMoviesState ={
   list: [],
   favourites: [],
   showFavourites: false
}
export default function movies (state = initialMoviesState, action) {
//  if (action.type === ADD_MOVIE) {
//     return {
//       ...state,
//       list: action.movies
//     }
//  }
//  return state;

switch (action.type) {
     case ADD_MOVIE:
      return {
         ...state,
         list: action.movies
      }
      case ADD_TO_FAVOURITES:
         return {
            ...state,
            favourites: [action.movie, ...state.favourites]
         }

      case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
               movie => movie.Title !== action.movie.Title
            );
      
      return{
         ...state,
         favourites: filteredArray
      };

      case SET_SHOW_FAVOUTITES:
         return{
            ...state,
            showFavourites: action.val
         }
   
      default: 
      return state;
   }
 } 

