import React from "react";
import { WebView } from 'react-native';
import Layout from '../Components/Layout';

export default class Example1 extends React.Component {
  render() {
    return (
      <Layout { ...this.props } name="Example1">
        <WebView
          source={{uri: 'https://provincehotels.ru/'}}
          style={{flex:1}}
        />
      </Layout>
    );
  }
}
