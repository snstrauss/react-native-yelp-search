import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RestList from '../components/RestList';
import Searchbar from '../components/Searchbar';
import useYelpSearch from '../hooks/useYelpSearch';

const S = StyleSheet.create({
    errorText: {
        color: 'red',
        borderWidth: 4,
        borderColor: 'firebrick',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

const INITIAL_SEARCH_TERM = '';

export default function SearchScreen(){

    const [term, setTerm] = useState(INITIAL_SEARCH_TERM);
    const [sortedResultsByPrice, searchError, hideError] = useYelpSearch(term);

    return (
        <View>
            <Searchbar
                searchTerm={term}
                // onChange={setTerm}
                onSubmit={(newSearchTerm) => setTerm(newSearchTerm)}
            />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={sortedResultsByPrice}
                keyExtractor={(category) => category.price}
                renderItem={({ item }) => (
                    <RestList data={item} />
                )}
            />
            {
                searchError &&
                <TouchableOpacity onLongPress={hideError}>
                    <Text style={S.errorText}>
                        {searchError}
                    </Text>
                </TouchableOpacity>
            }
        </View>
    )
}