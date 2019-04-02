import React, { Component } from "react";

const withRequest = url => WrappedComponent => {
  return class extends Component {
    state = {
      response: null
    };
    async initialize() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        this.setState({
          data: json
        });
      } catch (e) {
        console.log(e);
      }
    }

    componentDidMount() {
      this.initialize();
    }

    render() {
      const { data } = this.state;
      return <WrappedComponent {...this.props} data={data} />;
    }
  };
};

export default withRequest;
