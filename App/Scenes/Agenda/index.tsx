import * as React from "react";
import { PureComponent } from "react";
import { FlatList } from "react-native";
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
  data: Talk[],
  onPressItem: (id: string) => void,
};

// tslint:disable-next-line:max-classes-per-file
export class Agenda extends PureComponent<Props> {

  public render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }

  private keyExtractor = (item: Talk) => item.id;

  private renderItem = ({item}: {item: Talk}) => {
    return (
      <AgendaListRow
        {...item}
        onPressItem={this.props.onPressItem}
      />
    );
  }

}
