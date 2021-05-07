import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Switch } from 'react-native'

import Button from '../Button/Button'

import functions from '../../functions/functions'

const Header = ({ list, setList, theme, setTheme }) => {

    const [task, setTask] = useState('')
    const [details, setDetails] = useState('')

    const { dataFormat, getHora } = functions

    const mudarTheme = () => {
        theme == 'dark' ? setTheme('light') : setTheme('dark')
    }


    const addItemList = () => {
        setList([...list, { id: Math.random(), nome: task, details: details, data: dataFormat(), hora: getHora() }])
        setTask('')
        setDetails('')
    }

    return (
        <View style={style.header_container}>

            <View style={style.title_container}>
                <Text style={[style.title_text, { color: theme == 'dark' ? '#eee' : '#222831' }]}>
                    Task Lisk
                </Text>
                <Switch
                    trackColor={{ false: "black", true: "#eee" }}
                    value={theme == 'light' ? false : true}
                    thumbColor='#00adb5'
                    onValueChange={mudarTheme}
                />

            </View>

            <View style={style.view_header_body_container}>
                <View style={style.view_add}>
                    <TextInput
                        onChangeText={(e) => setTask(e)}
                        value={task}
                        style={style.textInput}
                        placeholder='Tarefa'
                        placeholderTextColor='#555'
                    />
                    <View>
                        <Button onClick={() => { addItemList() }}>
                            Adicionar
                        </Button>
                    </View>
                </View>
                <View style={style.view_add}>
                    <TextInput
                        onChangeText={(e) => setDetails(e)}
                        value={details}
                        style={[style.textInput, { height: 80, marginTop: 30, width: '100%' }]}
                        placeholder='Detalhes'
                        placeholderTextColor='#555'
                    />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header_container: {
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        minHeight: 300
    },
    title_container: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title_text: {
        fontSize: 28,
        color: '#eeeeee',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textInput: {
        color: '#555',
        width: '70%',
        borderRadius: 10,
        paddingHorizontal: 13,
        backgroundColor: '#fff',
        elevation: 2
    },
    view_add: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    view_header_body_container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    }
})

export default Header