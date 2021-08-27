import React from 'react';
import { View } from 'react-native';
import Carousel from '../Carousel/Carousel';
import API_IMG from '../../Data/dataImages';



export default function Home ({navigation}) {
    return(
        <View>
          <Carousel data={API_IMG}/>
        </View>
    )
}