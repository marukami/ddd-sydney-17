import * as React from "react";
import { Component } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justifyContent: center;
  alignContent: center;
`;

export class InfoScreen extends Component {
 public static navigationOptions = {
    tabBarLabel: "Info",
    tabBarIcon: ({tintColor}: {tintColor: string}) => (
      <Icon name="map" size={18} color={tintColor} />
    ),
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
        <View style={{flex: 1, flexDirection: "row", margin: 16}}>
          <Icon name="map-o" size={16} style={{marginRight: 8}} />
          <Text>
            DDD Sydney will be held at UTS CBD campus, on Level 3 of the Peter
            Johnson Building, CB06 (entrance via Harris Street).
          </Text>
        </View>
      </Container>
    );
  }
}
