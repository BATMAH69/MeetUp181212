import React from "react";
import { View } from "react-native";
import {
  Button,
  Container,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";

export default class AsyncLoader extends React.Component {
  state = {mounted: false};
  componentDidMount() {
    this.setState({mounted: true})
  }

  render() {
    const { mounted } = this.state;
    const { children } = this.props;
    return (
        <View style={{flex:1}}>
          {mounted ? children : null}
        </View>
    );
  }
}
