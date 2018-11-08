import React from 'react';
import { View,StyleSheet,Text,ActivityIndicator,StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { connect } from 'react-redux';

import {authCheck} from '../../actions/auth/authCheckActions';
import {setNavigation} from '../../actions/base/rootNavigation';


class CheckAuthScreen extends React.Component {
    static navigationOptions = {
        header:null,
    };
    render() {
        const { authCheckState,dispatch } = this.props;
        return (
        <View style={styles.container}> 
             <Text>{authCheckState.status}</Text>
             <ActivityIndicator></ActivityIndicator>
        </View>);
    };
    componentDidMount(){
        this.timer = setTimeout(
            () => {
                SplashScreen.hide();
                this.props.dispatch(setNavigation(this.props.navigation));
                this.props.dispatch(authCheck());
            },
            1000
        );
    };
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    };
    componentDidUpdate(){
        if(!this.props.authCheckState.isChecking){
            if(this.props.authCheckState.isAuthed){
                 this.props.navigation.navigate('Home');
            }else{
                this.props.navigation.navigate('SignIn');
            }
        }
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});
function select(state){
    return {
        authCheckState:state.authCheck
    }
}

export default connect(select)(CheckAuthScreen);