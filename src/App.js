import React, { Component } from "react";
import Typist from "react-typist";
import "./App.css";
import Configs from "./configurations.json";
import ParticlesBg from "particles-bg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkBackgroundModes: [
        "day",
        "terminal",
        "torquoise",
        "alizarin",
        "amythyst",
        "carrot",
        "peterriver",
      ],
      lightBackgroundModes: [
        "night",
        "lightred",
        "lightpurple",
        "lightgreen",
        "lightblue",
        "lightyellow",
      ],
      backgroundType: Configs.backgroundType || "plain",
      appClass: Configs.plainBackgroundMode || "daylight",
      devIntro: Configs.devIntro || "Software Engineer",
      devDesc:
        Configs.devDesc ||
        "I'm a full stack software developer creating open source projects and writing about modern JavaScript, Python,PHP, and etc.",
      backgroundMode: "default",
      backgroundIndex: 0,
      bgStyle: {},
      icons: Configs.icons || [],
    };
  }

  componentWillMount = () => {};

  render() {
    const {
      appClass,
      bgStyle,
      backgroundMode,
      devIntro,
      devDesc,
      icons,
    } = this.state;

    return (
      <div className={appClass} style={bgStyle}>
        <div className={backgroundMode}>
          <main className="App-main">
            <ParticlesBg type="thick" bg={true} />
            <div className="container">
              <h1 className="intro">{devIntro}</h1>
              <div className="shell">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://muhammadfahri.com"
                >
                  <i className="fa fa-terminal"></i>./aboutme.sh
                </a>
              </div>
              <div className="tagline">
                <Typist>{devDesc}</Typist>
              </div>

              <div className="icons-social">
                {icons.map((icon, i) => (
                  <a
                    target="_blank"
                    key={i}
                    rel="noopener noreferrer"
                    href={`${icon.url}`}
                  >
                    <i className={`fab ${icon.image}`} />
                  </a>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
