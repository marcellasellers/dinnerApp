import React from 'react'
import RestaurantModal from "./RestaurantModal";

export default class ButtonBar extends React.Component {
    state = {
        choice: undefined
    };

    clearOption = () => {
        this.setState(() => ({choice: undefined}));
    };

    makeChoice = () => {
        const options = this.props.options;
        let index = Math.floor(Math.random() * (options.length));
        this.setState(() => ({choice: options[index].name}));
    };

    render() {
        return (
            <div>
                <button
                    className={'btn btn-dark button-bar'}
                    onClick={this.props.reset}>
                    reset
                </button>
                <button disabled={!this.props.options.length > 0}
                        onClick={this.makeChoice}
                        className={'btn btn-dark button-bar'}
                >make my choice</button>
                <RestaurantModal selectedOption={this.state.choice}
                clearOption={this.clearOption}/>
            </div>
        );
    };
};
