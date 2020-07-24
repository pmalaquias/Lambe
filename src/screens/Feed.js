import React, { Component } from 'react'
import {StyleSheet, FlatList, View} from 'react-native'

import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component{
    state = {
        post: [{
            id: Math.random(),
            nickname: 'Rafael Filho',
            email: 'rafa@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments:[{
                nickname: 'Jay Ray',
                comment: 'Stunnig!'
            },{
                nickname: 'Ana Julia',
                comment: 'Foto linda'
            }]
        },{
            id: Math.random(),
            nickname: 'Francisco Leandro Lima ',
            email: 'leandrolima@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comment:[]
        }]
    }

    render(){
        return(
            <View style={styles.container}>
                <Header />
                <FlatList 
                    data={this.state.post}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) =>
                        <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed