import React from 'react';
import { View,Text,Button ,Modal,StyleSheet} from 'react-native';
import { connect } from 'react-redux';

import {getDpSize} from '../../utils/screenUtil';
import {login} from '../../actions/auth/loginActions';


class HomeScreen extends React.Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: '主页'
    };
    render() {
        const { loginState,dispatch,loadingState } = this.props;
        return (<View>
                
            <Button title="主页2" style={{width:10}} onPress={()=>dispatch(login())} />
            <Text>{loginState.status}</Text>       
        </View>);
    }
    componentDidUpdate(){
        if(this.props.loginState.isSuccess){
            this.props.navigation.navigate('Home');
        }
        console.log(this.props.loginState);
    }
}
function doLogin(){
    this.props.dispatch(login());
}
const sytles=StyleSheet.create({
    btn:{
        width:getDpSize(10)
    }

});

function select(state){
    return {
        loginState:state.login,
        loadingState:state.loading
    }
}
export default connect(select)(HomeScreen);