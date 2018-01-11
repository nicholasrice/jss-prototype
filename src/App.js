import React, { Component } from 'react';
import Button from './button';
import Placement from './placement';
import './App.css';
import faker from 'faker';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 400
        };
    }

    renderButtons() {
        return new Array(this.state.count).fill(null).map((item, index) => {
            return <Button key={ index }>Hello world { index + 1 }</Button>
        });
    }

    componentDidMount() {
        // Testing multiple components on a page
        // window.setTimeout(() => {
        //     this.setState({ count: this.state.count - 1 });
        // }, 2000);
    }

    componentDidUpdate() {
        // Testing multiple components on a page
        // if (this.state.count > 0) {
        //     window.setTimeout(() => {
        //         this.setState({ count: this.state.count - 1 });
        //     }, 2000);
        // } else if (this.state.count <= 0) {
        //     window.setTimeout(() => {
        //         this.setState({ count: this.state.count + 1 });
        //     }, 2000);
        // }
    }

    renderPlacements() {
        return new Array(this.state.count).fill(null).map((item, index) => {
            return (
                <Placement
                    userName={ faker.internet.userName() }
                    avatar={ faker.internet.avatar() }
                />
            )
        });
    }

    render() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                { this.renderPlacements() }
            </div>
        );
    }
}

export default App;
