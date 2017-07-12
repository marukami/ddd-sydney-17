import * as React from "react";
import { PureComponent } from "react";
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  height: 30px;
  borderColor: gray;
  backgroundColor: #E0E0E0;
  borderBottomWidth: 0.5px
  alignItems: center;
  justifyContent: center;
  flexDirection: row;
`;

const BreakText = styled.Text`
    fontSize: 14;
    fontWeight: 500;
`;

const imagePlaceholder = "https://pbs.twimg.com/profile_images/665140480506753024/83MVBBvq_400x400.jpg";

// tslint:disable-next-line:interface-over-type-literal
export type BreakProps = {
    title: string,
    time: string,
    onPress: (id: string) => void,
};

export default class TalkRow extends PureComponent<BreakProps> {

    public render() {
        return (
            <Container>
                <BreakText>{this.props.time} - {this.props.title}</BreakText>
            </Container>
        );
    }
}
