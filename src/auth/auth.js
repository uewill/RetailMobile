import React from 'react';
import { View,StyleSheet, Button,ActivityIndicator, } from 'react-native';
import NavigationService from '../common/navigationService';

class SignInScreen extends React.Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (<View>
            <Button title="登录" onPress={this._test} />
        </View>);
    }
    _test(){
        NavigationService.navigate('Home');
    }
}
class CheckAuthScreen extends React.Component {
    state={
        isAuthed :false,
    };
    static navigationOptions = {
        header:null,
    };
    render() {
        return (
        <View style={styles.container}>
             <ActivityIndicator></ActivityIndicator>
        </View>);
    };
    componentDidMount(){
        this.timer = setTimeout(
            () => {
                NavigationService.navigate('Auth');
                //NavigationService.navigate('App');
            },
            3000
        );
    };
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});


module.exports={CheckAuthScreen,SignInScreen};