import { Component } from "react";
import "./styles.css";

export default class Music extends Component {
  render() {
    return (
      <div
        className="Menu"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <img
          alt="music"
          src="https://cdn-icons-png.flaticon.com/128/5598/5598798.png"
        />
      </div>
    );
  }
}
