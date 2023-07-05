import { Component } from "react";
import "./styles.css";

export default class ControlDisc extends Component {
  render() {
    const { goToScreen, active } = this.props;
    return (
      <div className="Control-Disc">
        <div className="Outer-Circle" id="outer-circle">
          <div
            className="Inner-Circle"
            onClick={() => goToScreen(active)}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "65px",
              fontWeight: "800",
              fontSize: "1.5rem"
            }}
            onClick={() => goToScreen(-1)}
          >
            MENU
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5725/5725942.png"
              style={{
                position: "absolute",
                bottom: "15px",
                left: "80px",
                height: "40px",
                width: "40px"
              }}
              alt="https://cdn-icons-png.flaticon.com/128/5725/5725942.png"
            />
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5725/5725947.png"
              style={{
                position: "absolute",
                top: "80px",
                left: "10px",
                height: "40px",
                width: "40px"
              }}
              alt="https://cdn-icons-png.flaticon.com/128/5725/5725947.png"
            />
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5725/5725916.png"
              style={{
                position: "absolute",
                top: "80px",
                right: "10px",
                height: "40px",
                width: "40px"
              }}
              alt="https://cdn-icons-png.flaticon.com/128/5725/5725916.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
