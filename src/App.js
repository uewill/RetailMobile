import React from 'react';
import { View,StatusBar,StyleSheet,Modal} from 'react-native';
import { connect } from 'react-redux';

import IndexRoute from './route/index';
import LoadingModel from './components/loadingModel';

class App extends React.Component {
  render() {
    return (
    <View style={styles.container}>
    <StatusBar
      backgroundColor="#37384d"
      barStyle="light-content"
    />
    {/* 加载进度框 */}
    <Modal animationType="fade"
        transparent={true}
        visible={this.props.loadingState.isLoading}
        onRequestClose={() => {
            alert("Modal has been closed.");
        }}>
        <LoadingModel/>
    </Modal>

    <IndexRoute/>
    </View>)
  }    
  componentDidUpdate(){
    if(this.props.networkState.isError){
      if(this.props.baseNavigation.navigation!=undefined){
        this.props.baseNavigation.navigation.navigate('Error',{errorTitle:'网络错误',errorMsg:'err content'});
      }
    }
  }
}

const styles=StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      flexDirection:'column'
  }
});

function select(state){
  return {
      networkState:state.network,
      baseNavigation:state.baseNavigation,
      loadingState:state.loading
  }
}
export default connect(select)(App);