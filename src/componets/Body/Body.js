import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native'

import Info from 'react-native-vector-icons/Entypo';
import Delete from 'react-native-vector-icons/MaterialIcons';

import Button from '../Button/Button'



const Body = ({ list, setList, navigation, theme }) => {

    const removeItemList = (taskId) => {
        const listFiltred = list.filter(e => e.id !== taskId)
        setList(listFiltred)
    }

    return (
        <View style={style.body_container}>
            <FlatList
                data={list}
                renderItem={(e) => {
                    return (
                        <View style={style.view_task}>
                            <Text style={[style.text_task, {color: theme == 'dark' ? '#eee' : '#222831'}]}>{e.item.nome}</Text>

                            <View style={style.view_buttons}>
                                <View style={{height: 45 }}>
                                    <Button onClick={() => navigation.navigate('Details', { name: e.item.nome, details: e.item.details, data: e.item.data, hora: e.item.hora })}>
                                        <Info name="info" size={20} color="#eee" />
                                    </Button>
                                </View>

                                <View style={{ height: 45 }}>
                                    <Button onClick={() => removeItemList(e.item.id)} styleButton={{backgroundColor:'#393e46'}}>
                                        <Delete name='delete' size={20} color='#eee' />
                                    </Button>
                                </View>
                            </View>
                        </View>
                    )
                }}
                keyExtractor={e => e.id}
            />
        </View>
    )
}

const style = StyleSheet.create({
    body_container: {
        flex: 1,
        paddingHorizontal: 30,
    },
    view_task: {
        width: '100%',
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text_task: {
        fontSize: 24,
        color: '#eee',
        fontWeight: 'bold'
    },
    text_task_description: {
        fontSize: 16,
        color: 'white'
    },
    view_buttons: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-evenly'
    }
})

export default Body