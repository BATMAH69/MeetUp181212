import React from "react";
import { View } from "react-native";
import {
  Button,
  Container,
  Body,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";

export default class Layout extends React.Component {
  render() {
    const { children, navigation } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.name}</Title>
          </Body>
          <Right />
        </Header>
        <View style={{flex:1}}>
          {children}
        </View>
      </Container>
    );
  }
}
