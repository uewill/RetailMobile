import React from 'react';
import { View, Button ,StyleSheet} from 'react-native';
import {getDpSize} from '../utils/screenUtil';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '设置'
    };
    render() {
        return (<View>
            <Button title="设置" style={sytles.btn} onPress={this._Test} />
        </View>);
    }
    _Test(){
        alert('hello');
    }
}
const sytles=StyleSheet.create({
    btn:{
        width:getDpSize(10)
    }

});