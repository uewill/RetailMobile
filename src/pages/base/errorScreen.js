import React from 'react';
import { View,Text,StyleSheet } from 'react-native';


export default class ErrorScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel:'错误'
    };
    constructor(props){
        super(props);
    }
    render() {
       return (<View style={styles.container}>
           <Text style={{ fontSize: 24,fontWeight:'bold'}}>{this.props.navigation.state.params.errorTitle}</Text>
            <Text>{this.props.navigation.state.params.errorMsg}</Text>
       </View>)
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
  });