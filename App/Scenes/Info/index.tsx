import * as React from "react";
import { Component } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justifyContent: center;
  alignContent: center;
`;

export class InfoScreen extends Component {
 public static navigationOptions = {
    tabBarLabel: "Info",
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  };

  public render() {
    return (
      <Container>
        <MapView style={{flex: 1, height: 200}}
          initialRegion={{
            latitude: -33.883282,
            longitude: 151.202109,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0121,
          }}
        >
          <MapView.Marker
            coordinate={{
                latitude: -33.883282,
                longitude: 151.202109,
            }}
          />
        </MapView>
        <View style={{flex: 1}}>
          <Text>Aaron Powel</Text>
        </View>
      </Container>
    );
  }
}
