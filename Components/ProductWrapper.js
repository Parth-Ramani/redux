import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Products from './Products'
const ProductWrapper = ({navigation}) => {

 const product=[
  {
    name:'Samsung Phone',
    color:'white',
    price:'31000',
    image:'data:image/jpeg;base64,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'
  },
  {
    name:'I Phone',
    color:'black',
    price:'131000',
    image:'data:image/jpeg;base64,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'
  },
  {
    name:'Vivo Phone',
    color:'blue',
    price:'22000',
    image:'data:image/jpeg;base64,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'
  },
 ]
  return (
    
    <View style={{flex:1}}> 
    <Button title='Go To User List' onPress={()=>navigation.navigate('User')}/>
    <Header/>
     <ScrollView>
     {product.map((item)=><Products item={item} />)}
     </ScrollView>
    </View>
  )
}

export default ProductWrapper

const styles = StyleSheet.create({})