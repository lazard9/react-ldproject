import { Component } from "react";
import "./ProgressBar.scss";

class ProgressBar extends Component {
  state = {
    scroll: 0,
  };

  handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.scrollHeight - windowHeight;
    const scrollPercentage = (scrollTop / bodyHeight) * 100;
    this.setState({ scroll: scrollPercentage });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { scroll } = this.state;
    return <div className="progress-bar" style={{ width: `${scroll}%` }}></div>;
  }
}

export default ProgressBar;
