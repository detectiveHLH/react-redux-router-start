import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch({ type: 'WATCH_GET_PROJECT', payload: { projectName: 'tap4fun' } });
  }

  render() {
    const className = 'Wechat-Home';

    return (
      <div className={`${className}`}>
        <h1>Home</h1>
        <h2>The project name is : { this.props.reducer.projectName }</h2>
      </div>
    );
  }
}

export default connect((state) => ({
  reducer: state.wechat
}))(Home)
