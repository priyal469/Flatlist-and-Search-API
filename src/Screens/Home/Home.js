import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';
import Header from '../../Component/Header';
import Loader from '../../Component/Loader';

// import WeekDays from '../../Component/WeekDays';
import styles from './styles';
import actions from "../../redux/actions"
import UserPosts from '../../Component/UserPosts';
import { showMessage } from 'react-native-flash-message';
import navigationStrings from '../../constants/navigationStrings';



 export default class Home extends Component{
     constructor(props){
         super(props);
         this.state={
             userPosts:[],
             skipCount:0,
             isLoading:false,
            weekDays_array:[
                {
                    id:1,
                 dates:1,

                },
                {
                    id:2,
                 dates:2,

                },
                {
                    id:3,
                 dates:3,

                },
                {
                    id:4,
                 dates:4,

                },
                {
                    id:5,
                 dates:5,

                },
                {
                    id:6,
                 dates:6,

                },
                {
                    id:7,
                 dates:7,

                },
                {
                    id:1,
                 dates:1,

                },
                {
                    id:2,
                 dates:2,

                },
                {
                    id:3,
                 dates:3,

                },
                {
                    id:4,
                 dates:4,

                },
                {
                    id:5,
                 dates:5,

                },
                {
                    id:6,
                 dates:6,

                },
                {
                    id:7,
                 dates:7,

                },
               
               
               
               
               
             
               
            ]
         }
     }
     componentDidMount() {
        this.setState({
            isLoading:true
        })
        this.getUserPosts();
    } 
    getUserPosts = () => {
        const {skipCount,userPosts}=this.state;

        actions.getUserSearch({
            searchType:"LEADERBOARD",
            limit:6,
            skip:skipCount
        })
            .then(response => {
                console.log("get response >>>",response)
                this.setState({
                    isLoading:false,
                    userPosts:[...userPosts,...response.data]
                })
            }).catch((error) => {
                showMessage({
                    type: "danger",
                    icon: "danger",
                    message: error.message
                })
            });
            
    }
    _onEndReached =async() => {
        const{skipCount}=this.state;
        
        await this.setState({
            skipCount:skipCount+6,
            isLoading:true
        })
        this.getUserPosts();
    }

     OnNavigate=()=>{
           const{navigation}=this.props;
          navigation.navigate(navigationStrings.SEARCH)
     }
        
     render(){
         const{weekDays_array,isLoading}=this.state;
         return(
             <View style={{flex:1}}>
                 <Header headerText='Mar 2021'/> 
                   {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                     <Text style={styles.daysName}>SUN</Text>
                     <Text style={styles.daysName}>MON</Text>
                     <Text style={styles.daysName}>TUE</Text>
                     <Text style={styles.daysName}>WED</Text>
                     <Text style={styles.daysName}>THU</Text>
                     <Text style={styles.daysName}>FRI</Text>
                     <Text style={styles.daysName}>SAT</Text>
                 </View> */}
               
              
              <View style={{flex:1}}>
              <FlatList
                    data={this.state.userPosts}
                    numColumns={2}
                    ListFooterComponent={()=><View style={{height:30}}><Loader isLoading={isLoading}/></View>}
                    keyExtractor={(item,index) =>index.toString()}
                    ItemSeparatorComponent={()=><View style={{height:15}}></View>}
                    renderItem={({item}) => <UserPosts data={item} OnNavigate={this.OnNavigate}/>}
                    onEndReached={this._onEndReached}  
                    onEndReachedThreshold={0.9}    
                /> 
              </View>
              
                


              {/* <View style={styles.flatListView}>
              <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
          data={weekDays_array}
          keyExtractor={(item,index) => index.toString()}
          renderItem={( {item} ) =>
            (<WeekDays data={item}   />)
         }
         />

              </View> */}


             </View>
         )
     }
 }