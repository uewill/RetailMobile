import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native';
import Root from './src/Root';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Warning: componentWillUpdate is deprecated', 'Module RCTImageLoader']);


AppRegistry.registerComponent('RetailMobile', () =>Root);
