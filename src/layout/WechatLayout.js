import React, { Component } from 'react';
import Home from '../routes/wechat/home';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

class WechatLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
  }

  render() {
    const className = 'Wechat-Layout';

    return (
      <div className={`${className}`}>
        <header>
          This is  Wechat Layout
        </header>
        <main>
          <Switch>
            <Route path={`${this.props.match.path}/home`} component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default connect((state) => ({
  reducer: state.wechat
}))(WechatLayout);
