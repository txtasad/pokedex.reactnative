import React from "react";
import {Navigation} from 'react-native-navigation';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  RefreshControl,
  Platform,
  Text,
  Dimensions, TextInput, FlatList
} from 'react-native'

import enUS from '@ant-design/react-native/lib/locale-provider/en_US';
import {Button, Flex, Provider, WingBlank, Modal,List} from '@ant-design/react-native';


import {TitleOptions} from "../utils/Constants";

import Toast from 'react-native-simple-toast';


import { connect } from 'react-redux';
import { addCat,deleteCat } from '../actions/pokemons';


const TAG = 'PokemonDetail';


const width = Dimensions.get('window').width;
const widths=width-50
const widthHalf=widths/2


class ScreenDetail extends React.Component {

  constructor(props) {
    super(props)
    console.log("csk->","constructor")
  }

  state = {
  }


  static get options() {
    return ScreenDetail.getDefaultOptions()
  }

  static getDefaultOptions() {
    const options = JSON.parse(JSON.stringify(TitleOptions));
    options.topBar.largeTitle.fontSize = 36;
    return options
  }

  componentDidMount() {
    console.log("csk->","componentDidMount")
  }

  setErrorState() {
    this.setState({
      error: true,
      refreshing: false
    })
  }


  _onRefresh = () => {
    //this.setState({refreshing: true, error: false});
  }



  render() {
    const {error} = this.state
    if (error) {
      return (
        <View style={{flexDirection: 'column', flex: 1,justifyContent:'center',alignItems:'center'}}>
          <Text>Something Went Wrong!</Text>
        </View>
      )
    }
    return (

      <Provider locale={enUS}>
        <View style={{flexDirection: 'column', flex: 1}}>


        
              {this.renderPokemon()}

        </View>
      </Provider>
    );
  }


  renderPokemon() {
    const cats=this.props.pokemons[this.props.index];

    return (
        <View style={[styles.cardStyle,{flex:0.5, flexDirection: 'column',backgroundColor:'#fff',marginTop:40}]}>

          <View style={{flexDirection:'column',marginTop:4,alignContent:'center',alignItems:'center',marginBottom:16}}>

            <Image source={require("../assets/images/pokeball.png")} style={{marginTop:1,opacity:0.8}}/>
            <View style={{flexDirection:'column',backgroundColor:'transparent'}}>
              <View style={{flexDirection:'row',justifyContent:'center',marginLeft:14,marginBottom:8}}>
                <Text style={{color:'#31132E',fontSize:14,marginTop:6}}> > {cats.name.english} </Text>
              </View>
            </View>

            <View style={{flexDirection:'row',flex:1,marginTop:16,marginBottom:16, justifyContent:'center'}}>
              <View style={{flex:0.5,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <View style={[styles.redBox]}><Text style={[styles.redBoxText]}>Attack</Text></View>
              </View>
              <View style={{flex:0.5,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <View style={[styles.grayBox]}><Text style={[styles.grayBoxText]}>{cats.base.Attack}</Text></View>
              </View>
          </View>
          <View style={{flexDirection:'row',flex:1,marginTop:16, marginBottom:16,justifyContent:'center'}}>
            
          <View style={{flex:0.5,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <View style={[styles.grayBox]}><Text style={[styles.grayBoxText]}>{cats.type.split(",")}</Text></View>
              </View>
              <View style={{flex:0.5,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <View style={[styles.redBox]}><Text style={[styles.redBoxText]}>Type</Text></View>
              </View>
          </View>
          <View style={{flexDirection:'row',flex:1,marginTop:16,marginBottom:16, justifyContent:'center'}}>
              <View style={{flex:0.5,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <View style={[styles.redBox]}><Text style={[styles.redBoxText]}>Matches</Text></View>
              </View>
              <View style={{flex:0.5,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <View style={[styles.grayBox]}><Text style={[styles.grayBoxText]}>{cats[0].breed}</Text></View>
              </View>
          </View>
          
          </View>
          </View>
    )
  }

  //end
}
const styles = StyleSheet.create({
  cardStyle: {
    marginHorizontal: 18,
    marginBottom: 16,
    height: 90,
    flexDirection: 'row',
    flex: 1,
    ...Platform.select({
      ios: {
        shadowColor: '#DCDCDC',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        borderRadius: 16,
        borderWidth: 0.5,
        borderColor: '#DCDCDC',
      },
      android: {
        elevation: 8,
        borderRadius: 16,
        backgroundColor: '#f1f1f1',

      },
    }),

  },
  blockStyle: {
    marginHorizontal: 2,
    marginBottom: 16,
    width:widthHalf,
    flexDirection: 'row',
    justifyContent:"space-around",
    flex: 1,
    ...Platform.select({
      ios: {
        shadowColor: '#DCDCDC',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        borderRadius: 16,
        borderWidth: 0.5,
        borderColor: '#DCDCDC',
      },
      android: {
        padding:4,
        elevation: 6,
        borderRadius: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#D1CAD0',

      },
    }),

  },
  blockActive:{
    backgroundColor:'#EBECEF',
    borderColor:'#472C44'
  },

  bottomNav:{
    height:70,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 36,

    marginLeft:-1,
    marginRight:-1,
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center'
  },
  submit:{
    padding:5,
    backgroundColor:'#fff',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#FFCCBA',
    marginLeft:17,
    marginRight:17,
    marginBottom: 8
  },
  submitText:{
    color:'#F78765',
    textAlign:'center',
  },
  redBox:{backgroundColor:'#006064',padding:4,borderRadius:4,marginLeft:4,alignItems:'center'},
  redBoxText:{color:'#fff',fontSize:14},
  grayBox:{backgroundColor:'#969BA920',padding:4,borderRadius:4,marginLeft:4,alignItems:'center'},
  grayBoxText:{color:'#000',fontSize:14},
});



const mapStateToProps = (state) => {
  console.log("csk-> state",state);
  return {
    cats: state.pokeReducer.pokemonList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (name,color,breed) => dispatch(addPokemon(name,color,breed)),
    delete: (cat) => dispatch(deletePokemon(cat))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ScreenDetail);
