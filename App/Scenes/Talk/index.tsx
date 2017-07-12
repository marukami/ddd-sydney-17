/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from "react";
import { Component } from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// tslint:disable-next-line:interface-over-type-literal
type SocialIconProps = {
  name: string;
};

class SocialIcon extends Component<SocialIconProps> {
  public setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }

  public render() {
    return (
      <View ref={component => this._root = component} {...this.props}>
        <Icon
          style={styles.profileAccountsItem}
          name={this.props.name}
          color="#D8E0E0" size={24} />
      </View>
    );
  }
}

// tslint:disable-next-line:interface-over-type-literal
type TalkScreenProps = {
  navigation: {
    state: {
      params: {
        summary: string,
        room: string,
        speaker: {
          name: string;
          twitter: string;
          github: string;
          avatar: string;
          bio: string;
          summary: string;
          website: string;
        },
      },
    },
  },
};

// tslint:disable-next-line:max-classes-per-file
export class TalkScreen extends Component<TalkScreenProps> {
  public static navigationOptions = ({ navigation }: TalkScreenProps) => ({
    title: navigation.state.params.speaker.name,
  })

  public render() {
    const { params } = this.props.navigation.state;
    const { avatar, name, twitter, github, bio, summary, website } = params.speaker;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.profile} source={{ uri: avatar }} />
          <Text style={styles.profileTitleCopy}>{name}</Text>
          <Text style={styles.profileSubTitleCopy}>{summary}</Text>
          <View style={styles.profileAccounts} >
            <TouchableHighlight onPress={this.openTwitter}>
              <SocialIcon name="twitter" />
            </TouchableHighlight>
            {
              github !== "" ? (
                <TouchableHighlight onPress={this.openGithub}>
                  <SocialIcon name="github" />
                </TouchableHighlight>
              ) : null
            }
            {
              website !== "" ? (
                <TouchableHighlight onPress={this.openWebsite}>
                  <SocialIcon name="globe" />
                </TouchableHighlight>
              ) : null
            }
          </View>
          <ScrollView>
            <View style={{ marginTop: 16, marginBottom: 16 }}>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>Room</Text>
              <Text style={{ marginTop: 4, fontWeight: "400", fontSize: 16 }}>{params.room}</Text>
              <Text style={{ marginTop: 12, fontWeight: "500", fontSize: 18 }}>Summery</Text>
              <Text style={{ marginTop: 4, fontWeight: "400", fontSize: 16 }}>{params.summary}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

  private openTwitter = () => {
    const { twitter } = this.props.navigation.state.params.speaker;
    const appUrl = `twitter://user?${twitter}`;
    const webUrl = `https://twitter.com/${twitter}`;
    Linking.canOpenURL(appUrl)
      .then((canOpen) => {
        if (canOpen) {
          Linking.openURL(appUrl);
        } else {
          Linking.openURL(webUrl);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  }

  private openGithub = () => {
    const { github } = this.props.navigation.state.params.speaker;
    const webUrl = `https://github.com/${github}`;
    Linking.canOpenURL(webUrl)
      .then(() => {
        Linking.openURL(webUrl);
      })
      .catch((err) => console.error('An error occurred', err));
  }

  private openWebsite = () => {
    const { website } = this.props.navigation.state.params.speaker;
    Linking.canOpenURL(website)
      .then(() => {
        Linking.openURL(`http://${website}`);
      })
      .catch((err) => console.error('An error occurred', err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4DDE5",
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
  profile: {
    width: 120,
    height: 120,
    alignSelf: "center",
    borderRadius: 60,
  },
  profileTitleCopy: {
    marginTop: 12,
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "500",
  },
  profileSubTitleCopy: {
    fontSize: 12,
    alignSelf: "center",
  },
  profileAccounts: {
    alignSelf: "center",
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileAccountsItem: {
    marginLeft: 8,
    marginRight: 8,
  },
  card: {
    height: 200,
    margin: 8,
    padding: 8,
    backgroundColor: "#fff",
  },
  cardHeader: {
    fontWeight: "500",
    fontSize: 24,
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
