import React from 'react'
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './CarouselImgStyle'


const {width} = Dimensions.get('window');
const height = width * 100/60;

export default function CarouselImg ({item}) {
    return (
        <View style={styles.container}>
            <Image style={{width:'90%', height:'90%', borderRadius: 50, marginTop: 20}} source={{uri:item[Math.floor(Math.random()*item.length)]}} /> 
        </View>
    )
}

