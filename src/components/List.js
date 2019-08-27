import React from 'react'
import ButtonBar from './ButtonBar.js'
import Restaurant from './Restaurant.js'

export default class List extends React.Component {

    state = {
        error: undefined
    };

    addRestaurant = (e) => {
        e.preventDefault(); // stops auto refresh
        let newRestaurant = e.target.elements.option.value;
        const error = this.props.addOption(newRestaurant); // potential error return

        this.setState(() => ({ error }));

        if(!error){
            e.target.elements.option.value = '';
        }

    };

    render() {
        const props = this.props;
        const options = props.options;

        return (
            <div  className={'container'}>
                {props.options.length === 0 && <p className={"text-center"}>Add a restaurant to get started</p>}
                <ul className={'list-group'}>
                    {
                        options.map((r) => <Restaurant
                            key={r.name}
                            restaurant={r}
                            removeSingleOption={props.removeSingleOption}
                        />)
                    }
                </ul>

                <div className={'row'}>
                    <div className={'col'}>
                    <form onSubmit={this.addRestaurant}>
                        <input type="text" name="option"/>
                        <br/>
                        <button>add a restaurant</button>
                    </form>
                    </div>

                    <div className={'col text-right'}>
                        <button onClick={props.removeOptions}>reset</button>
                        <ButtonBar options={options}/>
                    </div>
                </div>

                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    };
};
