import { ADD_POKE, DELETE_POKE,MOD_POKE,ALL_POKE,ADD_INDEX } from './types';

export const addPokemon = (n,t,a) => (
  {
      type: ADD_POKE,
      name: n,
      type:t,
      attack:a
  }
);

export const deletePokemon = (key) => (
  {
    type: DELETE_POKE,
    id: key
  }
);

export const updatePokemon = (key,n,t,a) => (
    {
        type: MOD_POKE,
        key: key, 
        name: n,
        type:t,
        attack:a
    }
);

export const addAllPokemon = (li) => (
  {
    
    type: ALL_POKE,
      list: li
  }
);
export const addIndex = (i) => (
  {
    
    type: ADD_INDEX,
      index: i
  }
);