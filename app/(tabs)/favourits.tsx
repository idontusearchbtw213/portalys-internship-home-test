import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function favourits() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Favourits</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.shared.red,
        fontSize: 18
    }
})