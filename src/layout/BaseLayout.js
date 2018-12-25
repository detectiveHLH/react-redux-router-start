import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from "react-router-dom";
import Home from "../routes/base/home";

/**
 * BaseLayout
 *
 * @author hulunhao@nibirutech.com
 * @date 2018-12-25 17:33
 **/
class BaseLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let className = 'BaseLayout';

        return (
            <div className={className}>
                <header>
                    This is Base Layout
                </header>
                <main>
                    <Switch>
                        <Route path={`${this.props.match.path}/home`} component={Home} />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default connect((state) => ({
    reducer: state.base
}))(BaseLayout);