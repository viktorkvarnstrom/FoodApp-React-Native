import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTitle from '../components/CategoryGridTitle'



const CategoriesScreen = props => {
    const renderGridItems = (itemData) => {
        return (
            <CategoryGridTitle 
            title={itemData.item.title} 
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate('CategoryMeals', {categoryId: itemData.item.id})
            }}/>
        )
    }
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItems} numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meals Categories'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen