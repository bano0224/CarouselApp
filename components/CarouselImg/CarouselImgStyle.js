import { Dimensions, StyleSheet } from 'react-native'

const {width} = Dimensions.get('window');
const height = width * 100/90;

const styles = StyleSheet.create({
    container: {
    width: width,
    height: height,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'

    },
    text: {
        width: 100,
        display:'flex', 
        justifyContent:'center'}, 
})

export default styles; 