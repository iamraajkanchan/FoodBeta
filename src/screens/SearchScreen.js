import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [ term, setTerm ]= React.useState('');
    const [ results, errorMessage, searchApi ] = useResults();
    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have got {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen;