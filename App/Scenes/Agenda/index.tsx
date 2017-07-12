import * as React from "react";
import { PureComponent } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import TalkRow from "../../Components/TalkRow";

// tslint:disable-next-line:interface-over-type-literal
export type Talk = {
  id: string;
  avatar: { uri: string },
  time: string;
  speaker: string;
  title: string;
  room: string;
  onPressItem: (id: string) => void
};

const Container = styled.View`
  flex: 1;
`;

class AgendaListRow extends PureComponent<Talk> {

  public render() {
    return (
      <TalkRow {...this.props}
        onPress={this.onPress} />
    );
  }
  private onPress = (id: string) => this.props.onPressItem(this.props.id)
}

// tslint:disable-next-line:interface-over-type-literal
type Props = {
  screenProps: {
    data: Talk[],
    onPressItem: (id: string) => void,
  },
};

// tslint:disable-next-line:max-classes-per-file
export class AgendaScreen extends PureComponent<Props> {
  public static navigationOptions = {
    tabBarLabel: "Agenda",
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  };

  public render() {
    const { data } = this.props.screenProps;
    return (
      <Container>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }

  private keyExtractor = (item: Talk) => item.id;

  private renderItem = ({item}: {item: Talk}) => {
    return (
      <AgendaListRow
        {...item}
        onPressItem={this.props.screenProps.onPressItem}
      />
    );
  }

}
