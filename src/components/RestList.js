import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import RestListItem from './RestListItem';

const S = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 5
    }
});

const PRICE_TO_TITLE = {
    "---": 'Not Sure...',
    "$": "Super Cheap!",
    "$$": "Kind of OK..",
    "$$$": "More Money!",
    "$$$$": "Super Expensive!!!"
};

export default function RestList({ data }){

    const { price, results: restaurants  } = data;
    const title = PRICE_TO_TITLE[price];

    return (
        <View style={S.container}>
            <Text style={S.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={(rest) => rest.id}
                renderItem={({ item }) => (
                    <RestListItem details={item} />
                )} />
        </View>
    )
}