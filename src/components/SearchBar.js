import React from "react"
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return(
        <View style={styles.backgroundStyle}>
            <Icon iconStyle={styles.iconStyle} name="search" type="feather" size={30}/>
            <TextInput
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        height: 50,
        backgroundColor: "#F0EEEE",
        marginTop: 15,
        marginBottom: 15,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
    },
    iconStyle: {
        margin: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    }
})

export default SearchBar;