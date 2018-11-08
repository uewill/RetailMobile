import React from 'react';
import { View, Button ,StyleSheet} from 'react-native';
import storageUtil from '../../utils/storageUtil';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '设置'
    };
    render() {
        return (<View>
            <Button title="设置" style={sytles.btn} onPress={this._Test.bind(this)} />
        </View>);
    }
    _Test(){
        console.log(this);
        storageUtil.setItem("authData",'');
        this.props.navigation.navigate('SignIn');
    }
}
const sytles=StyleSheet.create({
    btn:{
        width:10
    }

});