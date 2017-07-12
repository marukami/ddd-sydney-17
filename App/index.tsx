import * as React from "react";
import { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView from "react-native-maps";
import { TabBarBottom, TabNavigator } from "react-navigation";
import styled from "styled-components/native";
import { data, ITalkData } from "./Data";
import { AgendaScreen, Talk } from "./Scenes/Agenda";
import { InfoScreen } from "./Scenes/Info";

interface IdedTalkData extends ITalkData {
  id: string;
}

const App = TabNavigator({
  Home: {
    screen: AgendaScreen,
  },
  Notifications: {
    screen: InfoScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: "#e91e63",
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: "bottom",
});

const Root = styled.View`
  flex: 1;
  marginTop: ${(Platform.OS === "ios") ? 20 : 0}px;
`;

export default class Socialize extends Component {

  public render() {
    const talks = Object.keys(data)
    .map((id) => {
      return {
        ...data[id],
        id,
      } as IdedTalkData;
    })
    .filter((item) => {
      return item.kind === "talk";
    })
    .map((item) => {
      return {
        ...item,
        avatar: { uri: item.speaker.avatar },
        speaker: item.speaker.name,
        onPressItem: () => { return; },
      } as Talk;
    });

    return (
      <Root>
        <App screenProps={{
          data: talks,
          onPressItem: this.onPressItem,
        }}/>
      </Root>
    );
  }

  private onPressItem = (x: string) => {
    return void 0;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
