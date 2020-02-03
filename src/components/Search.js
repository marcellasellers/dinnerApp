import React from 'react'
import SearchResult from "./SearchResult";
import ButtonBar from "./ButtonBar";

const token = '2Z1jifmBWdPq3jJcc2kHgoUkl31Mi9fJfSr7h0qnlVxc2HBNdz5zAnQCPW-Y-90N7ODqDZjGwrWGEzvVe2KdLk-icR7UBhT2YBnCKRHDHascSYxx3oAfj1jmIEYuXXYx';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export default class Search extends React.Component {

    state = {
        results: undefined
    };

    add = (e, addOption, restaurant) =>{
        e.preventDefault();
        let error = addOption(restaurant);
        if(error){
            alert(error);
        }
    };

    find = (e, add) => {
        e.preventDefault();
        const term = e.target.elements.name.value;
        const city = e.target.elements.city.value;
        const state = e.target.elements.state.value;
        const results = [];
        let location = null;

        if(state){
            location = city + ", " + state;
        } else {
            location = city;
        }

        fetch(proxyurl + 'https://api.yelp.com/v3/businesses/search?location=' + location +'&term=' + term,
            {headers: {Authorization: 'Bearer ' + token}}
        ).then(res => res.json()
        ).then( res => {
                for(let x = 0; x <= 5; x++) {
                    let restaurant = {
                        pic: res.businesses[x].image_url,
                        name: res.businesses[x].name,
                        city: res.businesses[x].location.city,
                        state: res.businesses[x].location.state,
                        rating: res.businesses[x].rating,
                        address: res.businesses[x].location.address1,
                        zip: res.businesses[x].location.zip_code,
                        phone: res.businesses[x].phone,
                        url: res.businesses[x].url
                    };
                    results.push(restaurant);
                }

                this.setState( () => {
                    return {
                        results: results
                    }
                });
        }).catch(() => alert('Unable to find restaurants by that name'));
    };

    render() {
        return (
            <div className={'container'}>
                <h3>Find a restaurant to add:</h3>
                <div className={'row'}>
                    <div className={'col-sm'}>
                        <form onSubmit={this.find}>
                            <input type={'text'} name={'name'} required={true} placeholder={'name of restaurant'}/>
                            <br/><input type={'city'} name={'city'} required={true} placeholder={'city'}/>
                            <br/><input type={'state'} name={'state'} placeholder={'state'}/>
                            <br/><button className={'btn btn-dark'}>search</button>
                        </form>
                    </div>

                    <div className={'col-sm text-right buttons'}>
                        <ButtonBar
                            reset={this.props.reset}
                        options={this.props.options}/>
                    </div>
                </div>
                <br/>
                <div className={'text-center search'}>
                    {this.state.results && this.state.results.map((restaurant, index) =>
                        <SearchResult
                            key={restaurant.phone}
                            name={restaurant.name}
                            city={restaurant.city}
                            state={restaurant.state}
                            address={restaurant.address}
                            phone={restaurant.phone}
                            restaurant={restaurant}
                            rating={restaurant.rating}
                            link={restaurant.url}
                            pic={restaurant.pic}
                            add={this.add}
                            addOption={this.props.addOption}
                        />
                    )}
                </div>
            </div>
        )
    }
}