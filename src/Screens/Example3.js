import React from "react";
import { WebView } from 'react-native';
import Layout from '../Components/Layout';

const addStyles=`
  var newCSS = 'div[class*=svgHamburger],div[class*=drawerPanel] { display: none !important; }'
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style'); 
  style.type = 'text/css';
  if (style.styleSheet){
    // This is required for IE8 and below.
    style.styleSheet.cssText = newCSS;
  } else {
    style.appendChild(document.createTextNode(newCSS));
  }
 
  head.appendChild(style);
`;

const uri = 'https://provincehotels.ru/';

export default class Example3 extends React.Component {
  render() {
    return (
      <Layout { ...this.props } name="Example3">
        <WebView source={{uri }} style={{flex:1}} injectedJavaScript={addStyles} javaScriptEnabled={true} />
      </Layout>
    );
  }
}
