import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const S = StyleSheet.create({
    container: {
        width: 150,
        height: 160,

        justifyContent: 'space-between',

        marginHorizontal: 5
    },
    image: {
        height: 80
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        margin: 5
    },
    bigDetails: {

    },
    littleDetailsParent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    littleDetail: {
        color: 'grey'
    }
});

export default function RestListItem({ details }){

    const { name, image_url, rating, review_count } = details;

    return (
        <View style={S.container}>
            <View style={S.bigDetails}>
                <Image style={S.image} source={{ uri: image_url }}  />
                <Text style={S.title}>
                    {name}
                </Text>
            </View>
            <View style={S.littleDetailsParent}>
                <Text style={S.littleDetail}>
                    {rating} Stars
                </Text>
                <Text style={S.littleDetail}>
                    {review_count} reviews
                </Text>
            </View>
        </View>
    )
}