import { Component } from "react";
import "./styles.css";

export default class Menu extends Component {
  render() {
    const { menu_items, active } = this.props;
    return (
      <div className="Menu">
        <div className="Menu-List">
          <h1>Menu</h1>
          <ul>
            {menu_items.map((item, i) => (
              <li key={i} className={active === i ? "active-li" : ""}>
                <p>{item}</p>
                {active === i ? (
                  <img
                    alt="right-arrow"
                    src="https://cdn-icons-png.flaticon.com/128/8213/8213522.png"
                    className="right-arrow"
                  />
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="Menu-Image"></div>
      </div>
    );
  }
}
