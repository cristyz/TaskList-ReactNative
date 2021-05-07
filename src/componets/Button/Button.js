import React from 'react'
import {Text, TouchableOpacity, StyleSheet } from 'react-native'

const Button = ({children, onClick, styleButton}) => {
    
    return(
        <TouchableOpacity onPress={onClick} style={[style.button, styleButton]}>
            <Text style={style.text_button}>{children}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button:{
        flex:1,
        backgroundColor:'#00adb5',
        borderRadius:10,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        elevation:4
    },
    text_button:{
        fontSize:16,
        color:'#eeeeee',
        fontWeight:'bold'
    }
})

export default Button