import React, { useState, useEffect } from 'react';
import { View, Dimensions, FlatList } from 'react-native';
import CarouselImg from '../CarouselImg/CarouselImg';


const {width} = Dimensions.get('window');
const height = width * 100/60;

export default function Carousel ({data}) {
    
    const [dataImg, setDataImg] = useState(data)
    
    useEffect(() => {
        setDataImg(data)
    })

    if(data && data.length) {
        return(
            <View>
                <FlatList data={data}
                keyExtractor={(item, index) => 'key' + index}
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment='center'
                scrollEventThrottle={16}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                return <CarouselImg item={item} index={index}/>
                }}
                />
            </View>
        )
    }
}
