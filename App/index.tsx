import * as React from "react";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView from "react-native-maps";
import { data, ITalkData } from "./Data";
import { Agenda, Talk } from "./Scenes/Agenda";

interface IdedTalkData extends ITalkData {
  id: string;
}

export default class Socialize extends Component {

  public render() {
    const talks = Object.keys(data)
    .map((id) => {
      console.log(id);
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
      <View style={styles.container}>
        <Agenda
          data={talks}
          onPressItem={this.onPressItem} />
      </View>
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
