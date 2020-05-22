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
  Dimensions, TextInput, FlatList, StatusBar
} from 'react-native'

import enUS from '@ant-design/react-native/lib/locale-provider/en_US';
import {Button, Flex, Provider, WingBlank, Modal,List} from '@ant-design/react-native';


import {TitleOptions} from "../utils/Constants";
import {getRandomColor,getDataUtil} from "../utils/FunctionGenerator";

import Toast from 'react-native-simple-toast';


import { connect } from 'react-redux';
import { addPokemon,deletePokemon,addAllPokemon } from '../actions/pokemons';
//import {getData} from '../api/ApiClient';


const TAG = 'Pokedex';


const width = Dimensions.get('window').width;
const widths=width-50
const widthHalf=widths/2


class Screen1 extends React.Component {

  constructor(props) {
    super(props)
    console.log("csk->","constructor")
  }

  state = {
    catAddition:false,
    pName:"",pType:"",pAttack:"",
    refreshing: false,
    sortby:""
  }


  static get options() {
    return Screen1.getDefaultOptions()
  }

  static getDefaultOptions() {
    const options = JSON.parse(JSON.stringify(TitleOptions));
    options.topBar.title.text = 'Pokedex';
    options.topBar.largeTitle.fontSize = 36;
    return options
  }



  componentDidMount() {
    console.log("csk->","componentDidMount")
    const d= getDataUtil().then((d)=>{
      console.log("csk->","got data",d)
      this.props.addAll(d)}).catch((e)=>console.log("error",e))
    
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



  toggleModal =() => {
        let m = this.state.catAddition
        this.setState({
            catAddition: !m,
        });
    }

  render() {
    StatusBar.setBarStyle('light-content', true);
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
          <View style={{marginTop:2,backgroundColor:'#fff'}}>
            {this.renderFilters()}
          </View>
          <ScrollView contentContainerStyle={[styles.scrollViewStyle]}
                      refreshControl={
                        <RefreshControl
                          refreshing={this.state.refreshing}
                          onRefresh={this._onRefresh.bind(this)}
                        />
                      }>
            <View style={{flexDirection: 'column'}}>

              {this.renderFlatList()}
            </View>
          </ScrollView>
          <WingBlank style={[styles.bottomNav]}>
            <Flex>
              <Flex.Item style={{alignItems: 'center',justifyContent: 'center'}}>
                  <TouchableOpacity onPress={this.toggleModal}>
                <Image source={require("../assets/images/add.png")} style={{tintColor:'#4A90E2',alignItems: 'center',justifyContent: 'center'}}/>
                  </TouchableOpacity>
              </Flex.Item>

              <Flex.Item style={{alignItems: 'center',justifyContent: 'center'}}>
                <TouchableOpacity onPress={()=>{
                    Toast.showWithGravity('Pokemon Added on Device!', Toast.SHORT, Toast.BOTTOM)
                  this.showScreen2();
                }}>
                  <Image source={require("../assets/images/settings.png")}/>

                    <Modal
                        popup
                        visible={this.state.catAddition}
                        onClose={() => { console.log(TAG,"onClose") }}
                        animationType="slide-up"
                        afterClose={() => { console.log(TAG,"afterClose") }}
                    >
                        <List renderHeader={() => <View style={{flexDirection:"row",justifyContent:"center"}}><Text>Add a Pokemon</Text></View>} className="popup-list">
                            <List.Item><Text>Name</Text><TextInput
                                style={{ height: 40, borderColor: '#969BA9', borderWidth: 1 }} placeholder={"Name "} onChangeText={n=>this.state.pName=n}/></List.Item>
                            <List.Item><Text>Type</Text><TextInput
                                style={{ height: 40, borderColor: '#969BA9', borderWidth: 1 }} placeholder={"Type "} onChangeText={c=>this.state.pType=c}/></List.Item>
                            <List.Item><Text>Attack</Text><TextInput
                                style={{ height: 40, borderColor: '#969BA9', borderWidth: 1 }} placeholder={"Attack "} onChangeText={b=>this.state.pAttack=b}/></List.Item>
                            <List.Item>
                                <Button type="primary" onPress={
                                  ()=>{this.props.add(this.state.pName,this.state.pType,this.state.pAttack)
                                    this.setState({ catAddition: false })}
                                }>Add</Button>
                            </List.Item>
                        </List>
                    </Modal>

                </TouchableOpacity>
              </Flex.Item>

            </Flex>

          </WingBlank>
        </View>
      </Provider>
    );
  }


  renderFilters=()=>{
    const style=[styles.blockStyle]
    const styleA=[styles.blockStyle,styles.blockActive]
    let na=this.state.sortby==="nameA"?styleA:style;
    let nd=this.state.sortby==="nameD"?styleA:style;
    console.log("csk->",this.state.sortby,na)
    return(
        <View style={{ width : '100%', flexDirection:'column', backgroundColor: '#f1f1f1'}}>
          <View style={{flexDirection:'row',justifyContent:"flex-start",alignItems:"flex-start",marginLeft:18,marginBottom:2}}>
            <Text style={{color:"#969BA9"}}>Sort</Text>
          </View>

          <View style={{flexDirection:'row',justifyContent:"center",marginLeft:5,marginRight:5}}>

            <View style={na}>
              <TouchableOpacity onPress={()=>{
                this.setSortBy("nameA")
              }}>
              <Text style={{color:'#c51162'}}>Name</Text>
              <Text style={{color:'#880e4f'}}>Ascending</Text>
              </TouchableOpacity>
              </View>

            <View style={nd}>
              <TouchableOpacity onPress={()=>this.setSortBy("nameD")}>
              <Text style={{color:'#c51162'}}>Name</Text>
              <Text style={{color:'#880e4f'}}>Descending</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
        )
  }



  renderFlatList(){


    let dataOrders=[]
        if(this.state.sortby==="")
          dataOrders=this.props.pokemons;
    else if(this.state.sortby==="nameD" && this.props.pokemons!==[])
      dataOrders=this.props.pokemons.reverse()
    else
      dataOrders=this.props.pokemons.sort(this.sortComparison)

    if(dataOrders===null || dataOrders===undefined || dataOrders.length===0) {
      return (

                <View style={{flex:1,justifyContent:"center",alignItems:"center",marginTop:15}}>
                  <Text style={{fontSize:20}}>No Pokemon Available!</Text>
                </View>
      )
    }




    else {
      return (
        <FlatList
            data={dataOrders}
            renderItem={({item,index})=>{
              console.log(TAG, 'item', item);
              return this.tasksCardContent(item,index)
            }}
            keyExtractor={(item)=>item.name}
            style={{paddingTop : 12}}
        >
        </FlatList>
    )}
  }


  tasksCardContent({name,id,type,base},i) {
    if (name===null || type===undefined) {
      return this.getErrorStateForCards()
    }
    const col=i%2!==0?"#CBCE91FF":"#EA738DFF"

    return (
        <View style={[styles.cardStyle,{flex:1, flexDirection: 'column',backgroundColor:getRandomColor()}]}>

        <View style={{flexDirection:'row',flex:1,marginTop:4}}>
            <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{
                  this.showScreenDetail(name.english);
                }}>
              <View style={[styles.textBox,{backgroundColor:col}]}>
              <Text style={{color:'#f1f1f1',fontSize:28}}> D </Text>
              </View>
              </TouchableOpacity>
            </View>
             <View style={{flex:0.6,justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
             <TouchableOpacity onPress={()=>{
                  this.showScreenDetail(name);
                }}>
                <Text style={{color:'#f6f6f6',fontSize:16}}>{name.english}</Text>
               <Text style={{color:'#f6f6f6',fontSize:16}}>{name.chinese}</Text>
               <Text style={{color:'#f6f6f6',fontSize:16}}>{name.french}</Text>
               </TouchableOpacity>
               </View>

             <View style={{flexDirection:'row',flex:0.1,justifyContent:'center',alignItems:'center'}}>

               <Text style={{color:'#4A90E2',fontSize:14,alignItems:'center',justifyContent:'center'}}></Text>
               <TouchableOpacity onPress={
                 ()=>this.props.delete(key)
               }>
                 <Image source={require("../assets/images/delete.png")} style={{width:24,height:24}}/>
               </TouchableOpacity>
             </View>
          </View>


          </View>
    )
  }


  sortComparison=(a,b)=>{
    let valA,valB;
    if(this.state.sortby==="nameA")
    {
      valA=a.name.toLowerCase()
      valB=b.name.toLowerCase()
    }else if(this.state.sortby==="colorA")
    {
      valA=a.color.toLowerCase()
      valB=b.color.toLowerCase()
    }

    if (valA < valB) //sort string ascending
      return -1
    if (valA > valB)
      return 1
    return 0
  }

  setSortBy=(key)=>{
    if(this.state.sortby===key){
      this.setState({sortby:""})
    }
    else{
      this.setState({sortby:key})
    }
  }


  showScreen2 = () => {
    console.log(TAG, 'showScreen2')
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.playground.Screen2',
        options: {
          topBar: {
            title: {
              text: "Added Later"
            }
          }
        }
      }
    });
  }

  showScreenDetail = (namePoke) => {
    console.log(TAG, 'showScreen2')
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.playground.ScreenDetail',
        options: {
          topBar: {
            title: {
              text: namePoke
            }
          }
        }
      }
    });
  }

  //end
}
const styles = StyleSheet.create({
  cardStyle: {
    marginHorizontal: 18,
    marginBottom: 16,
    height: 80,
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
    marginHorizontal: 12,
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
        elevation: 3,
        borderRadius: 12,
        backgroundColor: '#f4f4f4',
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
  textBox:{padding:4,borderRadius:6,alignSelf:'center',height:48,width:48,justifyContent:'center',alignItems:'center'},
  redBoxText:{color:'#FF5D5D',fontSize:11},
  grayBox:{backgroundColor:'#969BA920',padding:4,borderRadius:4,marginLeft:8},
  grayBoxText:{color:'#969BA9',fontSize:11},
});


const mapStateToProps = (state) => {
  console.log("csk-> state",state);
  return {
    pokemons: state.pokeReducer.pokemonList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (name,color,breed) => dispatch(addPokemon(name,color,breed)),
    delete: (cat) => dispatch(deletePokemon(cat)),
    addAll: (d)=>dispatch(addAllPokemon(d))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);
