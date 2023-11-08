import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addToCart,removeFromCart} from './Redux/action';
import {useDispatch, useSelector} from 'react-redux';

const Products = props => {
  const dispatch = useDispatch();
  const [added, isAdded] = useState(false);
  const cartItem = useSelector(state => 
    state.reducer
  );
 
  
  const handleAddToCart = item => {
    console.log('called', item);
    dispatch(addToCart(item));
  };


  const HandleremoveFromCart=(item)=>{
    console.log('removed items',item)
    dispatch(removeFromCart(item.name))
  console.log(item.name)
  }
  useEffect(() => {
   let result = cartItem.filter((ele)=>{
   return ele.name=== props.item.name
   })
   console.log('cartItem',result)
if(result.length){
  isAdded(true)
}else{
  isAdded(false)
}
  }, [cartItem]);





  return (
    <View
      style={{
        flex: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        alignItems: 'center',
        padding: 4,
        
      }}>
      <Text style={{fontSize: 30,color:'grey'}}>{props.item.name}</Text>
      <Text style={{fontSize: 30,color:'grey'}}>{props.item.color}</Text>
      <Text style={{fontSize: 30,color:'grey'}}>{props.item.price}</Text>
      <Image
        style={{height: 100, width: 100}}
        source={{uri: props.item.image}}
      />
      {added ? (
        <Button
          onPress={() => HandleremoveFromCart(props.item)}
          title="Remove from Cart"
        />
      ) : (
        <Button
          onPress={() => handleAddToCart(props.item)}
          title="Add to Cart"
        />
      )}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
