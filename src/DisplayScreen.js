import { Component } from "react";
import "./styles.css";
import Menu from "./Menu";
import Coverflow from "./Coverflow";
import Music from "./Music";
import Games from "./Games";
import Settings from "./Settings";

export default class DisplayScreen extends Component {
  renderScreenComponent() {
    if (this.props.screen === -1) {
      return (
        <Menu menu_items={this.props.menu_items} active={this.props.active} />
      );
    } else if (this.props.screen === 0) {
      return <Coverflow />;
    } else if (this.props.screen === 1) {
      return <Music />;
    } else if (this.props.screen === 2) {
      return <Games />;
    } else if (this.props.screen === 3) {
      return <Settings />;
    }
  }
  render() {
    return <div className="Display-Screen">{this.renderScreenComponent()}</div>;
  }
}
