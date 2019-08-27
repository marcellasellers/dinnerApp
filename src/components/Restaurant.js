import React from "react";

export default class Restaurant extends React.Component {

    removeOption = () =>{
        this.props.removeSingleOption(this.props.restaurant);
    };

    render() {
        const props = this.props;

        if (props.name) {
            return (
                <div>
                    <li className={'list-group-item'}>
                        <div className={'row'}>
                            <div className={'col-md'}>
                                {props.name}
                                <br/>
                                <img className={'icon'} src={require('../../public/images/003-pin.png')}/>
                                {props.address} {props.city}, {props.state}
                                <br/>
                                {props.phone && <img className={'icon'} src={require('../../public/images/004-telephone.png')}/>}
                                {props.phone}
                            </div>
                            <div className={'col-md text-right'}>
                                <button
                                    type={'button'}
                                    className={'btn btn-dark'}
                                    onClick={this.removeOption}
                                >
                                    remove
                                </button>
                            </div>
                        </div>
                    </li>
                </div>);
        } else {
            return <div/>
        }
    };
};
