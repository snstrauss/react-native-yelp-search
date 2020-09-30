import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

const S = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        height: 50,
        borderRadius: 10,
        margin: 15,
        flexDirection: "row",
    },
    icon: {
        marginHorizontal: 10,
        fontSize: 30,
        alignSelf: 'center'
    },
    input: {
        flex: 1,
        marginRight: 15,
        fontSize: 20
    }
});

export default function Searchbar({ searchTerm, onChange, onSubmit }){

    return (
        <View style={S.container}>
            <Feather style={S.icon} name="search" color="black"/>
            <TextInput
                style={S.input}
                placeholder="search restaurant..."
                value={searchTerm}
                autoCorrect={false}

                onChangeText={onChange}
                onEndEditing={onSubmit}
            />
        </View>
    )
};