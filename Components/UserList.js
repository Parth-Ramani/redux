import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getUserList } from './Redux/action';



const UserList = ({}) => {
const dispatch=useDispatch()
const userList =useSelector((state)=>state.reducer)
useEffect(()=>{
  dispatch(getUserList())
},[])
  
  return (
    <View></View>
  )
}

export default UserList

const styles = StyleSheet.create({})