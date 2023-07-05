import { Component } from "react";
import ControlDisc from "./ControlDisc";
import DisplayScreen from "./DisplayScreen";
import "./styles.css";
import ZingTouch from "zingtouch";
// import Math from "math";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      screen: -1,
      active: 0,
      menu_items: ["Coverflow", "Music", "Games", "Settings"],
      menuDirection: 1
    };
  }

  goToScreen = (screen) => {
    this.setState({
      screen
    });
  };

  rotateWheel = () => {
    var wheel = document.getElementById("outer-circle");
    // console.log(wheel);
    var myRegion = new ZingTouch.Region(wheel);
    const self = this;
    myRegion.bind(wheel, "rotate", function (e) {
      console.log(e.detail);
      // console.log(self.state.active);
      let direction = self.state.menuDirection;
      let distanceFromLast = e.detail.distanceFromLast;
      if (distanceFromLast > 15 || distanceFromLast < -15) {
        if (self.state.active === 0) {
          direction = 1;
          self.setState({
            active: self.state.active + direction,
            menuDirection: direction
          });
        } else if (self.state.active === 3) {
          direction = -1;
          self.setState({
            active: self.state.active + direction,
            menuDirection: direction
          });
        } else {
          self.setState({
            active: self.state.active + direction
          });
        }
      }
    });
  };

  componentDidMount() {
    this.rotateWheel();
  }

  render() {
    return (
      <div className="App">
        <div className="Main-box">
          <DisplayScreen
            menu_items={this.state.menu_items}
            screen={this.state.screen}
            active={this.state.active}
          />
          <ControlDisc
            active={this.state.active}
            goToScreen={this.goToScreen}
          />
        </div>
      </div>
    );
  }
}
