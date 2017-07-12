import * as React from "react";
import { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView from "react-native-maps";
import { Navigation, StackNavigator, TabBarBottom, TabNavigator } from "react-navigation";
import styled from "styled-components/native";
import { data, ITalkData } from "./Data";
import { AgendaScreen, Talk } from "./Scenes/Agenda";
import { InfoScreen } from "./Scenes/Info";
import { TalkScreen } from "./Scenes/Talk";

const talks = Object.keys(data)
    .map((id) => {
      return {
        ...data[id],
        id,
      } as IdedTalkData;
    })
    .map((item) => {
      if (item.kind === "talk") {
        return {
          ...item,
          avatar: { uri: item.speaker.avatar },
          speaker: item.speaker.name,
          onPressItem: () => { return; },
        } as Talk;
      } else {
        return {...item};
      }
    });

const Tabs = TabNavigator({
  Home: {
    screen: AgendaScreen,
  },
  Notifications: {
    screen: InfoScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: "#e91e63",
    showIcon: true,
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: "bottom",
});

type AppScreenProps = {
  navigation: Navigation;
};

class AppScreen extends Component<AppScreenProps> {
  public static navigationOptions = {
    header: null,
  };

  public render() {
    return (<Tabs screenProps={{
      ...this.props.screenProps,
      onPressItem: this.onPressItem,
    }} />);
  }

  private onPressItem = (id: string) => {
    const { navigate } = this.props.navigation;
    console.log(`data at ${id} ${JSON.stringify(data[id], null, 4)}`);
    return navigate("Talk", {...data[id]});
  }
}

interface IdedTalkData extends ITalkData {
  id: string;
}

const App = StackNavigator({
  Home: {
    screen: AppScreen,
  },
  Talk: {
    screen: TalkScreen,
  },
}, {
  headerMode: "float",
});

const Root = styled.View`
  flex: 1;
  marginTop: ${(Platform.OS === "ios") ? 20 : 0}px;
`;

// tslint:disable-next-line:max-classes-per-file
export default class Socialize extends Component {

  public render() {

    return (
      <Root>
        <App screenProps={{
          data: talks,
        }}/>
      </Root>
    );
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
