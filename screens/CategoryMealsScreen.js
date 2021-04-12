import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealsScreen = props => {
    const renderMealItem = itemData => {
        return <MealItem
            duration={itemData.item.duration}
            title={itemData.item.title}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelectMeal={() => { 
                props.navigation.navigate({routeName: 'MealDetail', params: {
                    mealId: itemData.item.id
                }})
            }} />
    }

    const catId = props.navigation.getParam('categoryId')
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    return (
        <FlatList data={displayMeals} renderItem={renderMealItem} />
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen