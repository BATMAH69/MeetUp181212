import React from "react";
import { Text, View } from 'react-native';
import Layout from '../Components/Layout';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Layout { ...this.props }>
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>MeetUp 181212</Text>
        </View>
      </Layout>
    );
  }
}
