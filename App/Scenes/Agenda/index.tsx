import * as React from "react";
import { PureComponent } from "react";
import { FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";
import BreakRow from "../../Components/BreakRow";
import TalkRow from "../../Components/TalkRow";

type Kinds = "break" | "talk";

// tslint:disable-next-line:interface-over-type-literal
export type Talk = {
  id: string;
  kind: Kinds;
  avatar: { uri: string },
  time: string;
  speaker: string;
  title: string;
  room: string;
  onPressItem: (id: string) => void
};

// tslint:disable-next-line:interface-over-type-literal
export type Break = {
  title: string;
  time: string;
  kind: Kinds;
  onPressItem: (id: string) => void
};

const Container = styled.View`
  flex: 1;
`;

class AgendaListRow extends PureComponent<Talk|Break> {

  public render() {
    if (this.props.kind === "talk") {
      return (
        <TalkRow {...this.props as Talk}
          onPress={this.onPress} />
      );
    } else {
      return (
        <BreakRow {...this.props as Break} />
      );
    }
  }
  private onPress = () => this.props.onPressItem((this.props as Talk).id);
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
    tabBarIcon: ({tintColor}: {tintColor: string}) => (
      <Icon name="users" size={18} color={tintColor} />
    ),
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

  private renderItem = ({item}: {item: Talk | Break}) => {
    return (
      <AgendaListRow
        {...item}
        onPressItem={this.props.screenProps.onPressItem}
      />
    );
  }
}
