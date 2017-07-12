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
  backgroundColor: #fff;
  borderColor: gray;
  borderBottomWidth: 0.5px
  flexDirection: row;
`;

const Avatar = styled.Image`
  width: 42px;
  height: 42px;
  borderRadius: 21px;
  backgroundColor: transparent;
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

const ContainerPadding = styled.View`
  flexDirection: row;
  flex: 1;
  margin: 8px;
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

const roomView = (props: TalkProps) => {
  const { room } = props;
  const color = (() => {
    if (room === "Red") {
      return "red";
    } else if (room === "Blue") {
      return "blue";
    } else {
      return "green";
    }
  })();
  return <View style={{backgroundColor: color, width: 8}} />;
};

export default class TalkRow extends PureComponent<TalkProps> {

  public render() {
    return (
        <Container>
          { roomView(this.props) }
           <ContainerPadding>
            <Avatar source={this.props.avatar} />
            <TalkInfo>
              <Title>{this.props.time} - {this.props.title}</Title>
              <SpeakerName>{this.props.speaker}</SpeakerName>
              <Text>{this.props.room} Room</Text>
            </TalkInfo>
           </ContainerPadding>
        </Container>
    );
  }
}
