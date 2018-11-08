import React from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback, TextInput, Image, Alert, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { connect } from 'react-redux';
import { login } from '../../actions/auth/loginActions';
var { height, width } = Dimensions.get('window');
class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      companyIsFocus: false,
      mdIsFocus: false,
      unameIsFocus: false,
      upassIsFocus: false,
      cname: '',
      mdname: '',
      uname: '',
      upass: '',
    };
  }
  render() {
    const { signInState, doLogin } = this.props;
    return (
      <View style={styles.container} >
            <View style={styles.logoContainer}>
                <Image source={require('../../static/images/login_logo.png')} 
                style={{ width: 90,height: 90, marginTop: 22 }}/>
                <Text style={styles.logoText}>章鱼侠云零售</Text>
            </View>
            <View style={{backgroundColor: '#FFF'}}>
            <Svg height="20" width={width}>
                <Circle cx={width / 2} cy="-980" r="1000" fill="#37384d"/>
            </Svg>
        </View>
    <View style={styles.inputContainer}>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <Image source={this.state.companyIsFocus ? 
                require('../../static/images/login_input_build_focus.png') : 
                require('../../static/images/login_input_build.png')} 
                style={{width: 18, height: 18 }}/>
            <View style={styles.inputItemContainer}>
                <TextInput style={styles.input} underlineColorAndroid="transparent"
                onFocus={() => {this.setState({companyIsFocus: true})}}
                onBlur={() => {this.setState({companyIsFocus: false})}}
                onChangeText={(text) => {this.setState({cname: text})}} value={this.state.cname} placeholder='请输入公司名称'/>
            </View>
        </View>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <Image source={this.state.mdIsFocus ? 
                require('../../static/images/login_input_md_focus.png') : 
                require('../../static/images/login_input_md.png')} style={{width: 18,height: 18}}/>
            <View style={styles.inputItemContainer}>
                <TextInput style={styles.input} underlineColorAndroid="transparent" 
                onFocus={() => {this.setState({mdIsFocus: true})}}  
                onBlur={() => {this.setState({mdIsFocus: false})}}
                onChangeText={(text) => {this.setState({mdname: text})}} value={this.state.mdname} placeholder='请输入门店名称'/>
            </View>
        </View>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <Image source={this.state.unameIsFocus ? 
                require('../../static/images/login_input_yh_focus.png') : 
                require('../../static/images/login_input_yh.png')} 
                style={{width: 18,height: 18}}/>
                <View style={styles.inputItemContainer}>
                    <TextInput style={styles.input} underlineColorAndroid="transparent"
                    onFocus={() => {this.setState({unameIsFocus: true})}}  
                    onBlur={() => {this.setState({unameIsFocus: false})}}
                    onChangeText={(text) => {this.setState({uname: text})}} value={this.state.uname}
                    placeholder='请输入用户名称'/>
                </View>
        </View>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <Image source={this.state.upassIsFocus ? 
                require('../../static/images/login_input_mm_focus.png') : 
                require('../../static/images/login_input_mm.png')} 
                style={{width: 16,height: 18}}/>
                <View style={styles.inputItemContainer}>
                <TextInput style={styles.input} underlineColorAndroid="transparent"
                onFocus={() => {this.setState({upassIsFocus: true})}}  
                onBlur={() => {this.setState({upassIsFocus: false})}}
                onChangeText={(text) => {this.setState({upass: text})}} value={this.state.upass}
                placeholder='请输入用户密码'/>
                </View>
            </View>

            <TouchableNativeFeedback
            onPress={()=>doLogin(this.state.cname,this.state.uname, this.state.upass)}
            //onPress={() => doLogin('测试ls9-0412', 'ldwen', 'grasp147+')}
            background={TouchableNativeFeedback.SelectableBackground()}>
                <View  style={styles.btnLogin} >
                    <Text style={{margin: 10,color: '#FFF', fontSize: 16}}>登录</Text>
                </View>
            </TouchableNativeFeedback>
            </View>
        </View>);
  }
  componentDidUpdate() {
    const { signInState } = this.props;
    console.log();
    if (signInState.isSuccess) {
      this.props.navigation.navigate('Home');
    } else if (signInState.isLoginFail) {
      Alert.alert(signInState.error.title, signInState.error.message);
    }
    console.log(this.props.signInState);
  }
}
// function doLogin(){
//     this.props.dispatch(login());
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF'
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: '#37384d',
  },
  logoText: {
    fontSize: 20,
    color: '#FFF',
    marginTop: 18
  },
  inputContainer: {
    marginTop: 34,
    marginLeft: 40,
    marginRight: 40
  },
  btnLogin: {
    marginTop: 32,
    backgroundColor: '#f78100',
    alignItems: 'center',
    borderRadius: 30
  },
  inputItemContainer: {
    paddingLeft: 10,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f7'
  },
  input: {
    paddingLeft: 5,
    marginBottom: 0,
    paddingBottom: 0,
    color: '#414171',
    fontSize: 16,
    //placeholderTextColor:'#bebed0'
  }
});
const mapStateToProps = function(State, ownProps) {
  return {
    signInState: State.login
  };
}
const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    doLogin: (...props) => dispatch(login(...props))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);