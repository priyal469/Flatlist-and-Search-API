import React, { Compo, Component } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import Loader from '../../Component/Loader';
import SimpleBtn from '../../Component/SimpleBtn';
import UserPosts from '../../Component/UserPosts';
import strings from '../../constants/lang/en';
import actions from '../../redux/actions';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            isLoading: false,
            userPosts:[],
        }
    }
    _onChangeText = (value) => {
            this.setState({
                searchInput: value,
                isLoading: true,
            })
            this.onSearch(); 
    }

    onSearch = ()=> {
        const {searchInput} = this.state;
    
        if(this.isSearchUsers){
            clearTimeout(this.isSearchUsers);
        }
        this.isSearchUsers = setTimeout(() => {
            actions.searchUsers(searchInput)
           
                .then((res) =>
                // alert(JSON.stringify(res.data))
                    this.setState({
                        userPosts:res.data,
                        isLoading:false
                    })
                )

                .catch((error) =>
                showMessage({
                    message:error.message
                })
                    );
        }, 500)


    }



    render() {
        const { isLoading,userPosts } = this.state;
        console.log("in search ary=> ", userPosts);
        return (
            <View style={{ flex: 1 }}>
                <TextInput placeholder={strings.SEARCH_HERE}
                    onChangeText={this._onChangeText}
                />

                <View style={{ flex: 1 }}>
                    <FlatList
                        data={userPosts}
                        numColumns={2}
                        ListHeaderComponent={() => <View style={{ height: 30 }}><Loader isLoading={isLoading} /></View>}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={() => <View style={{ height: 15 }}></View>}
                        renderItem={({ item }) => <UserPosts data={item} />}
                        // renderItem={( item ) => <View style={{height:50, width:50, backgroundColor:"green"}}></View>}

                        onEndReached={this._onEndReached}
                        onEndReachedThreshold={0.9}
                    />
                </View>

            </View>
        )
    }
}