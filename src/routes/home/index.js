import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const className = 'Home';

        return (
            <div className={`${className}`}>
                <h1>This is App Home</h1>
                <div>
                    <Link to={'/base/home'}>Base Home</Link>
                </div>
                <div>
                    <Link to={'/wechat/home'}>Wechat Home</Link>
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    reducer: state.app
}))(Home);
