# PokedexReactNative

A simple React Native App using Redux for State Management to display existing Pokemons and with functionality to add and delete new Pokemons. Clicking on pokemon name gives additional detail.

## App Screens
<p align="center">
    <img src="/media/Screen1.jpg" width="250" height="380">
    <img src="/media/Screen3.jpg" width="250" height="380">
</p>

<p align="center">
    <img src="/media/Screen2.jpg" width="250" height="380">
</p>

## Directions to use:-
* git clone https://github.com/txtasad/pokedex.reactnative.git
*  in your folder root npm i or npm install
* cd ios then pod install
* **installing podfiles is necessary for ios app to work, not required if you want just android 


## App features
* App shows existing pokemons.
* Sort Pokemons by their english names in ascending or descending order
* Navigation pannel in the bottom has 2 option to add and view only newly added pokemons.
* Each card has option to delete existing and added pokemon.
* App uses Redux for state management.
 

## App structure
App follows below structure:
* <b>navigation</b>
    * <b> Navigation.js </b> Contains all app navigation routes to all app screens.
* <b>reducers</b>
    * <b>pokemonReducer: </b> Redux reducer for add, delete, modilfy pokemon actions.
* <b>actions</b>
    * <b>type: </b> Defines all action types ex- add pokemon, delete..
    * <b>pokemons: </b> Specifies Redux actions for all action types defined.
* <b>api</b>
    * <b>ApiClient: </b> Here you can specifiy your repository and api call to fetch existing api data, in this case an existing dummy function to return json values.
* <b>screens</b>
    * Has all ui screens of the app.


