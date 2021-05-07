import React, { useState, useEffect } from 'react'
import { View, StyleSheet, LogBox } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';


import Header from '../Header/Header';
import Body from '../Body/Body';

LogBox.ignoreAllLogs()


const HomePage = ({ navigation }) => {
    const [list, setList] = useState()
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const storeData = async () => {
            const listJson = JSON.stringify(list)
            await AsyncStorage.setItem('list', listJson)
        }

        storeData()
    }, [list])

    useEffect(() => {
        const getData = async () => {
            const list = await AsyncStorage.getItem('list')
            const listJson = null ? [] : JSON.parse(list)
            setList(listJson)
        }

        getData()
    }, [])

    return (
        <View style={[style.container_app, {backgroundColor: theme != 'light' || undefined ? '#222831' : '#eee'}]}>
            <Header list={list} setList={setList} theme={theme} setTheme={setTheme} />
            <Body list={list} setList={setList} navigation={navigation} theme={theme} />
        </View>
    )
}

const style = StyleSheet.create({
    container_app: {
        flex: 1,
    }
})

export default HomePage