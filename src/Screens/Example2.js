import React from "react";
import { WebView, Picker} from 'react-native';

import Layout from '../Components/Layout';

const states = [ 'Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing' ];
const uri = 'https://artexoid.ru/181212/example2/';

export default class Example2 extends React.Component {
  myWebView = React.createRef();
  state = {robot: states[0]};
  render() {
    return (
      <Layout { ...this.props } name="Example2">
        <Picker
          mode="dropdown"
          selectedValue={this.state.robot}
          onValueChange={(item) => {
            this.setState({robot: item});
            this.myWebView.current.postMessage(item);
          }}
        >
          {states.map((item => <Picker.Item key={item} label={item} value={item} /> ))}
        </Picker>
        <WebView ref={this.myWebView} source={{uri}} style={{flex:1}} />
      </Layout>
    );
  }
}
