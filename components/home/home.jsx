import React from 'react';
import { View } from 'react-native';
import Carousel from '../Carousel/Carousel';
import { API_IMG } from '../../Data/dataImages';
import styles from './homeStyle'



export default function Home () {
    return(
        <View style={styles.home}>
          <Carousel data={API_IMG}/>
        </View>
    )
}