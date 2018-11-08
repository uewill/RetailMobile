import React from 'react';
import { View,StyleSheet,Text,Button,TextInput,ProgressBarAndroid, } from 'react-native';

export default class LoadingModel extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
        <View  style={styles.container}>
             <View style={styles.progress}>
                <ProgressBarAndroid></ProgressBarAndroid>
                <Text>正在加载...</Text>
                </View>
        </View>)
    }

}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    },
    progress:{
        height:100,
        width:200,
        backgroundColor:'#ddd',
        alignItems:'center',
        justifyContent:'center',
    }


});