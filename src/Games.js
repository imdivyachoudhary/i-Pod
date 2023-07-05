import { Component } from "react";
import "./styles.css";

export default class Games extends Component {
  render() {
    return (
      <div
        className="Menu"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <img
          alt="games"
          src="https://cdn-icons-png.flaticon.com/128/2113/2113311.png"
        />
      </div>
    );
  }
}
