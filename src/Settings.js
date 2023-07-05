import { Component } from "react";
import "./styles.css";

export default class Settings extends Component {
  render() {
    return (
      <div
        className="Menu"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <img
          alt="settings"
          src="https://cdn-icons-png.flaticon.com/128/738/738853.png"
        />
      </div>
    );
  }
}
