import React from "react";
import { WebView } from 'react-native';
import Layout from '../Components/Layout';

const addScripts=`
  document.querySelector('input[type=password]').addEventListener("change", (event) => alert(event.target.value));
`;

const uri = 'https://www.facebook.com/';

export default class Example4 extends React.Component {
  render() {
    return (
      <Layout { ...this.props } name="Example4">
        <WebView source={{uri }} style={{flex:1}} injectedJavaScript={addScripts} javaScriptEnabled={true} />
      </Layout>
    );
  }
}
