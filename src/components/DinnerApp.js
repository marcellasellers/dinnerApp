import React from 'react'
import Header from './Header.js'
import NavBar from './NavBar.js'
import Search from "./Search";
import RestaurantList from './RestaurantList';

export default class DinnerApp extends React.Component {

    state = {
        options : [],
        displayLoader: false,
        pBarValue: 0,
        pBarStyle : {
            width: '0%'
        }
    };

    handleAddOption = (option) => {

        if(!option) {
            return 'Enter a restaurant to add..';
        } else if(this.state.options.includes(option)) {
            return 'Restaurant is already on list';
        }

        this.setState((prevState) => {
            const numOptions = ((prevState.options.length + 1) / 10) * 100;
                return {
                    options: prevState.options.concat([option]),
                    pBarValue: numOptions.toString(),
                    pBarStyle: {
                        width: numOptions.toString().concat('%')
                    }
                }
            }
        );

    };

    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: [],
                pBarValue: '0',
                pBarStyle: {
                    width: '0%'
                }
            }
        });
    };

    handleDeleteSingleOption = (optionToBeRemoved) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => optionToBeRemoved !== option),
                pBarValue: prevState.pBarValue - 10,
                pBarStyle: {
                    width: (prevState.pBarValue - 10).toString().concat('%')
                }
            }
        });
    };

    render() {
        const currentUser = this.props.user;
        return (
            <div className={'container'}>
                <NavBar/>
                <div className={'parallax'}/>
                <div className={'greeting text-center'}>
                    <Header user={currentUser}/>
                </div>
                <div className={'container'}>

                <RestaurantList
                    options={this.state.options}
                    addOption={this.handleAddOption}
                    removeOptions={this.handleDeleteOptions}
                    removeSingleOption={this.handleDeleteSingleOption}
                />
                    <div className={'progress container'}>
                        <div
                            className={'progress-bar progress-bar-striped progress-bar-animated bg-warning'}
                            role={'progressbar'}
                            style={this.state.pBarStyle}
                            aria-valuenow={this.state.pBarValue}
                            aria-valuemin={'0'}
                            aria-valuemax={'100'}
                        >
                            {this.state.pBarValue/10} / 10
                        </div>
                    </div>

                    <Search
                        options={this.state.options}
                        addOption={this.handleAddOption}
                        reset={this.handleDeleteOptions}
                    />
                    <br/>
            </div>
            </div>
        );
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options); // converts array to json string
            localStorage.setItem('options', json); // localStorage only accepts strings
        }
    };

    componentDidMount() {
        try {
            const optionsStorage = localStorage.getItem('options');
            const options = JSON.parse(optionsStorage);
            if (options) {
                this.setState(() => {
                    return {
                        options,
                        displayLoader: true,
                        pBarValue: (options.length/10) * 100,
                        pBarStyle : {
                            width: ((options.length/10) * 100).toString().concat('%')
                        }
                    }
                });
            }
        } catch (e) {
            console.log(e);
        }
    };
};
