import React from 'react'
import Restaurant from './Restaurant.js'

export default class RestaurantList extends React.Component {

    state = {
        error: undefined
    };

    render() {
        const props = this.props;
        const options = props.options;

        return (
            <div  className={'container'}>
                {props.options.length === 0 && <p className={"text-center border-bottom"}>Add a restaurant to get started</p>}
                <ul className={'list-group'}>
                    {
                        options.map((r) => <Restaurant
                            key={r.address}
                            name={r.name}
                            city={r.city}
                            state={r.state}
                            address={r.address}
                            phone={r.phone}
                            restaurant={r}
                            removeSingleOption={props.removeSingleOption}
                        />)
                    }
                </ul>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    };
};
