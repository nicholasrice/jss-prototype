import React, { Component } from 'react';
import jss from 'jss';
import Color from 'color';
import preset from 'jss-preset-default';
import manager, { theme } from '../styleManager';

jss.setup(preset());

const styles = {
    button: {
        'background-color': theme => Color(theme.accent).hex(), 
        padding: '10px 16px',
        border: 'none',
        '&:hover': {
           'background-color': theme => Color(theme.accent).darken(.5).hex(),
            cursor: 'pointer'
        },
        'span': {
            color: 'red'
        }
    }
};

// Create and link stylesheet so styles can be dynamically changed
const stylesheet = jss.createStyleSheet(styles, {link: true }).update(theme);

class Button extends Component {
    componentWillMount() {
        manager.add('button', stylesheet);
        manager.manage('button');
    }

    componentWillUnmount() {
        manager.unmanage('button');
    }

    render() {

        return (
            <button className={ stylesheet.classes.button }>{ this.props.children }</button>
        )
    }
}

export default Button;
