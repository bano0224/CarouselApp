import React from 'react'
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';


const {width} = Dimensions.get('window');
const height = width * 100/60;

export default function CarouselImg ({item, index}) {
    return (
        <View>
        <View style={styles.text} >
            <Text style= {{textDecorationLine: 'underline'}}>{item.title}</Text>
        </View>
        <View style={styles.touchableContainer}>
            <View style={styles.touchableStyle}>
            <TouchableOpacity>
                <Image style={styles.imgTouchable} source={require('../../assets/left.png')}/>
            </TouchableOpacity>
            </View>
            <View style={styles.touchableStyle}>
            <TouchableOpacity>
                <Image style={styles.imgTouchable} source={require('../../assets/right.png')}/>
            </TouchableOpacity>
            </View>
        </View>
        <View >
            <Image style={{width, height}} source={{uri:item.images[Math.floor(Math.random()*item.images.length)]}} /> 
        </View>
        </View>
        
    )
}

styles = StyleSheet.create({
    text: {
        display:'flex', 
        justifyContent:'center'},

    touchableContainer:{
        display: 'flex', 
        flexDirection:'row', 
        justifyContent:'space-between'},

    touchableStyle:{
        borderRadius: 100, 
        backgroundColor:'white', 
        width: 40, 
        height:40, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems:'center'},
    
    imgTouchable: {
        display: 'flex', 
        justifyContent: 'center',
        alignItems:'center',
        width:25, 
        height: 25}, 
})