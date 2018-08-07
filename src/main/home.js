import React from 'react';
import { View, Button ,StyleSheet} from 'react-native';
import {getDpSize} from '../utils/screenUtil';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '主页'
    };
    render() {
        return (<View>
            <Button title="主页" style={sytles.btn} onPress={this._Test} />
            <Button title="主页2" style={{width:10}} onPress={this._Test} />
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