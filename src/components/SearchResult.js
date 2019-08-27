import React from 'react';

export default class SearchResult extends React.Component {
    render() {
        const props = this.props;
        return (
            <div className="card">
                {props.pic && <img className="card-img-top border border-dark" src={props.pic}/>}
                <div className="card-body border border-dark">
                    <h1 className="card-title">{props.name}</h1>
                    rating: {props.rating}
                    <p className="card-text">{props.address} {props.city}, {props.state}</p>
                    <button onClick={(e) => props.add(e, this.props.addOption, props)}>
                        add restaurant
                    </button>
                </div>
            </div>
        )
    }
}