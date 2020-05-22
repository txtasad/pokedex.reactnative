import {ADD_POKE, DELETE_POKE, MOD_POKE,ALL_POKE, ADD_INDEX} from '../actions/types';

const initialState = {
  pokemonList: [],index:-1
}

const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKE:
      return {
        ...state,
        pokemonList: state.pokemonList.concat({
          id: 89+Math.random(),
          name: {english:action.name},
          type: [action.type],
          base: {
            HP: 45,
            Attack: action.attack
        }})
      };
    case DELETE_POKE:
      return {
        ...state,
        pokemonList: state.pokemonList.filter((item) =>
          item.id !== action.id)
      };
      case MOD_POKE:
        return {
          ...state,
          pokemonList: state.pokemonList.map((item) =>
              item.key === action.key ? {key: item.key,
                name: action.name,
                color: action.color,
                breed: action.breed} : item)
        };
        case ALL_POKE:
        return {
          ...state,
          pokemonList: action.list
        };
        case ADD_INDEX:
          return {
            ...state,
            index: action.index
          };
          case ALL_POKE:
          return {
            ...state,
            pokemonList: action.list
          };
    default:
      return state;
  }
}

export default pokeReducer;
