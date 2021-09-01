import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import CarouselImg from '../CarouselImg/CarouselImg';
import styles from './CarouselStyle'
import { API_IMG } from '../../Data/dataImages';

const imagenes = [];
const imgData = API_IMG.map(e => e.images.map((d)=> imagenes.push(d)))
const length = imagenes.length


export default function Carousel () {
    
    const refImg = useRef();
    const [current, setCurrent] = useState(0);
    
    useEffect(() => {
        refImg.current.scrollToIndex({index:current, animated: true})
    })

    function prev() {
        setCurrent(current ? current - 1 : length - 1)
        refImg.current.scrollToIndex({index: current, animated: false})
    }

    function next() {
        setCurrent(current < length -1 ? current + 1 : 0)
        refImg.current.scrollToIndex({index: current, animated: false})
    }

    if(imagenes && imagenes.length) {
        return(
            <View style={styles.body}>
                <FlatList data={imagenes}
                keyExtractor={(index) => 'key' + index}
                horizontal
                pagingEnabled
                bounces={true}
                scrollEnabled={false}
                snapToAlignment='center'
                scrollEventThrottle={16}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                ref={refImg}
                renderItem={({ item }) => {
                return (
                    <View>
                        <CarouselImg item={imagenes} />
                    </View>
                )}}
                /> 

            <View style={styles.touchableContainer}>
                {current === 0 ? null : (
                <View style={styles.touchableStylePrev}>
                <TouchableOpacity onPress={prev} disabled={current == 0 ? true : false}>
                    <Image style={styles.imgTouchable} source={require('../../assets/left.png')}/>
                </TouchableOpacity>
                </View>
                )}
                {current === length - 1 ? null : (
                <View style={styles.touchableStyleNext}>
                <TouchableOpacity onPress={next} disabled={current == length -1 ? true : false}>
                    <Image style={styles.imgTouchable} source={require('../../assets/right.png')}/>
                </TouchableOpacity>
                </View>
                )}
            </View>
        </View>
        )
    }
}