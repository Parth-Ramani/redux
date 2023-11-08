import { StyleSheet, Text, View } from 'react-native'

import   {useSelector} from 'react-redux'

import { useEffect,useState } from 'react'
const Header = () => {
const [count,setCount]=useState(0)
  const dataCart =useSelector((state)=>state.reducer)
  
  useEffect(()=>{
setCount(dataCart.length)
  },[dataCart])
  
  return (
    <View style={{ }}>
      <Text style={{fontSize:20 ,backgroundColor:'skyblue',color:'white',padding:10,textAlign:'right'}}>{count}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})