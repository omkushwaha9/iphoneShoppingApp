import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//React navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../App"
import ProductItem from '../Components/ProductItem'
import seperator from '../Components/seperator'
//Data
import { PRODUCTS_LIST } from '../Data/Constants'

type HomeProps = NativeStackScreenProps<RootStackPramList, "Home">

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.Container}>
     <FlatList 
     data={PRODUCTS_LIST}
     keyExtractor={item => item.id}
     ItemSeparatorComponent={seperator}
     renderItem={({item})=>(
        <Pressable
        onPress={()=> {
            navigation.navigate('Details',{
                product: item
            })
        }}
        >
            <ProductItem product={item}/>
        </Pressable>
     )}
     />
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center',

        padding:12,
        backgroundColor:"#FFFFFF",
    },
})

export default Home