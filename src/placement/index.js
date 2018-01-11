
import React, { Component } from 'react';
import jss from 'jss';
import Color from 'color';
import preset from 'jss-preset-default';
import manager, { theme } from '../styleManager';
import Button from '../button';
import faker from 'faker';

jss.setup(preset());

const styles = {
    placement: {
        border: '1px solid red',
        h2: {
            fontSize: '12px'
        }
    },
};

// Create and link stylesheet so styles can be dynamically changed
const stylesheet = jss.createStyleSheet(styles, {link: true }).update(theme);

class Placement extends Component {
    componentWillMount() {
        manager.add('placement', stylesheet);
        manager.manage('placement');
    }

    componentWillUnmount() {
        manager.unmanage('placement');
    }

    render() {
        return (
            <div className={ stylesheet.classes.placement }>
                <h2>{ this.props.userName }</h2>
                <img src={ this.props.avatar } alt="wee" />
                <Button>{ faker.lorem.word() }</Button>
            </div>
        )
    }
}

export default Placement;
