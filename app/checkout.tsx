import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heading from '@/components/ui/heading'

const Checkout = () => {
  return (
    <View style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      margin:"auto"
    }}>
      <Image  source={require("../assets/images/verified.png")} />
  <Heading style={{
    fontSize:20,
    margin:20,
  }} text='Order Successful' />
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({})