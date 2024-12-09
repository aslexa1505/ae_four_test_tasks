import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.initialName || "Anonymous",
      clicks: 0,
    };
  }

  componentDidMount() {
    // Аналог useEffect с зависимостями [count] и [clicks] на первом рендере
    console.log(`Count has changed to: ${this.props.count}`);
    console.log(`Clicks have been updated: ${this.state.clicks}`);

    // Аналог useEffect([]): вызывается один раз при монтировании
    console.log("Setting up observers");
  }

  componentDidUpdate(prevProps, prevState) {
    // Аналог useEffect для count
    if (this.props.count !== prevProps.count) {
      console.log(`Count has changed to: ${this.props.count}`);
    }

    // Аналог useEffect для clicks
    if (this.state.clicks !== prevState.clicks) {
      console.log(`Clicks have been updated: ${this.state.clicks}`);
    }
  }

  componentWillUnmount() {
    // Аналог функции очистки в useEffect([]) return
    console.log("Clear observers");
  }

  handleClick = () => {
    this.setState((prevState) => ({ clicks: prevState.clicks + 1 }));
  };

  render() {
    const { count } = this.props;
    const { name, clicks } = this.state;

    return (
      <div>
        <div>Name: {name}</div>
        <div>Count: {count}</div>
        <div>Clicks: {clicks}</div>
        <button onClick={this.handleClick}>Increment Clicks</button>
      </div>
    );
  }
}

export default ClassCounter;
