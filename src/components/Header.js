import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import icon from '../../assets/imgs/icon.png'


class Header extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image}/>
                    <Text style={styles.tilte}>Lambe Lambe</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: Platform.os === 'ios' ? 20 : 25,
        padding: 10,
        borderWidth: 1,
        borderColor: '#BBB'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image :{
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    tilte: {
        color: '#000',
        height: 30,
        fontSize: 28
    }
})

export default Header