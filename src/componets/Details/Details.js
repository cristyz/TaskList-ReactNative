import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Details = ({ route, navigation }) => {
    const { name, details, data, hora } = route.params
    return (
        <View style={style.view_container}>
            <View style={style.view_container_details}>
                <Text style={style.text_title}>{name}</Text>
                <Text style={style.text_description}>{details}</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#eee', fontStyle: 'italic' }}>{data}</Text>
                    <Text style={{ color: '#eee', fontStyle: 'italic' }}>{hora}</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    view_container: {
        flex: 1,
        backgroundColor: '#222831'
    },
    view_container_details: {
        height: '80%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#222831'
    },
    text_title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#00adb5'
    },
    text_description: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#eee'
    }
})

export default Details