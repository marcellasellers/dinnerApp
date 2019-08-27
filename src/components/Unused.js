<div className={'search-results'}>
    <div className={'row'}>
        <div className={'col-sm'}>
            <h1>{props.name}</h1>
            rating: {props.rating}
            <br/>{props.address} {props.city}, {props.state}
        </div>
        <div className={'col-sm'}>
            <img src={props.pic} className={'search-image'}/>
            <br/>
            <button onClick={(e) => props.add(e, this.props.addOption, props)}>
                Add restaurant?
            </button>
        </div>
    </div>
</div>