import * as React from "react";
import { PureComponent } from "react";
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import styled from "styled-components/native";

const TalkInfo = styled.View`
  flexDirection: column;
  flex: 1;
`;

const Container = styled.View`
  height: 80px;
  borderColor: gray;
  borderBottomWidth: 0.5px
  flexDirection: row;
  marginTop: 8px
  marginLeft: 16px;
`;

const Avatar = styled.Image`
  width: 42px;
  height: 42px;
  borderRadius: 21px;
  backgroundColor: gray;
  marginRight: 16px;
`;

const Title = styled.Text`
  fontWeight: 200;
  marginBottom: 4px;
`;

const SpeakerName = styled.Text`
  fontWeight: 500;
`;

const Details = styled.View`
  justifyContent: space-between
  flexDirection: row;
`;

const imagePlaceholder = "https://pbs.twimg.com/profile_images/665140480506753024/83MVBBvq_400x400.jpg";

// tslint:disable-next-line:interface-over-type-literal
export type TalkProps = {
  time: string,
  title: string,
  speaker: string,
  room: string,
  avatar: {uri: string},
  onPress: (id: string) => void,
};

// tslint:disable-next-line:interface-over-type-literal
type State = {};

/*
time="10:10"
title="Microservices UI Composition"
speaker: Hadi Eskandari
room: Green
*/

export default class TalkRow extends PureComponent<TalkProps> {

  public render() {
    return (
        <Container>
          <Avatar source={this.props.avatar} />
          <TalkInfo>
            <Title>{this.props.time} - {this.props.title}</Title>
            <SpeakerName>{this.props.speaker}</SpeakerName>
            <Text>{this.props.room} Room</Text>
          </TalkInfo>
        </Container>
    );
  }
}
