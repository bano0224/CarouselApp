import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    touchableContainer:{
        display: 'flex', 
        width: '100%',
        flexDirection:'row', 
        justifyContent:'space-around',
        alignItems: 'center'},

    touchableStyleNext:{
        borderRadius: 100, 
        backgroundColor:'white', 
        width: 100, 
        height:40, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems:'center',
    },

    touchableStylePrev:{
        borderRadius: 100, 
        backgroundColor:'white', 
        width: 100, 
        height:40, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems:'center'},

    imgTouchable: {
        display: 'flex', 
        justifyContent: 'flex-end',
        alignItems:'center',
        width:25, 
        height: 25},
    
    imgTouchablePrev: {

    }
})

export default styles;