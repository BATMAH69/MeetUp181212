import React from "react";
import { Image } from "react-native";
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
} from "native-base";
const routes = ["Home", "Example1","Example2"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={require('../../assets/logo.jpeg')}
            style={{
              height: 180,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 180 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
