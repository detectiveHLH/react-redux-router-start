import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch({ type: 'WATCH_GET_USER', payload: { userName: '尼毕鲁星' } });
  }

  render() {
    const className = 'Base-Home';

    return (
      <div className={`${className}`}>
        <h1>Home</h1>
        <h2>The user name is : { this.props.reducer.userName }</h2>
      </div>
    );
  }
}

export default connect((state) => ({
  reducer: state.base
}))(Home)
