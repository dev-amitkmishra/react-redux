import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import HomeView from './views/HomeView';
import client from './ApolloClient';
import store from './store';
import ApartmentView from "./views/ApartmentView";
import Locations from './views/LocationsView';
import Search from './views/Search';
import SearchResult from './views/SearchResult';
import Filter from './views/Filter';
import data from './sampleData/data.json';

class App extends Component {
    state = {
        searchText: '',
        isDisplay: false,
        showFilter: false,
		suggestions: [],
		checkedFilter: ''
    }
    inputChangeHandler = (input) => {
        const searchText = input.target.value;
        this.setState({searchText: searchText});
    };
    buttonClicked = () => {
        if (this.state.searchText.length > 0) {
            let sTxt = this.state.searchText;
            const dt = data.filter(item => {
                return item
                    .location
                    .toLowerCase() === sTxt.toLowerCase();
			});
            if (dt.length === 0) {
                dt.push({message: 'NotFound', searchedText: sTxt});
                this.setState({isDisplay: true, suggestions: dt, showFilter: false});
            }else{
                this.setState({showFilter: true});
                this.setState({isDisplay: true, suggestions: dt, showFilter: true});
            }
            
        } else {
            this.setState({isDisplay: false, suggestions: [], showFilter: false});
        }
    }
    radioChangeHandler = (that) => {
        const filterOption = that.target.value;
		const sTxt = this.state.searchText;
		this.sortByOption(filterOption.toLowerCase()).then(res => {
			this.setState({isDisplay: true, checkedFilter: filterOption, suggestions: res});
		}).catch(err => {
			let errData = [];
			errData.push({message: 'NotFound', searchedText: sTxt});
			this.setState({isDisplay: true, suggestions: errData});
		})

	}
	
	sortByOption = (option) => {
        const filterOption = option === 'details' ? 'name' : option;
		return new Promise((resolve, reject) => {
			let suggestions = [...this.state.suggestions];
			suggestions.sort(function(a, b) {
				var x = a[filterOption]; var y = b[filterOption];
				return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			});
			resolve(suggestions);
		})
	}
    render() {
        return (
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <Router>
                        <div>
                            {window.location.pathname.includes('locations') ? null :  <Search onInput={this.inputChangeHandler} clicked={this.buttonClicked} />}
                            {this.state.showFilter ? <Filter changed={(e) => this.radioChangeHandler(e)} checkedFilter={this.state.checkedFilter}/> : null}
                            <SearchResult show={this.state.isDisplay} suggestions={this.state.suggestions}/>
                            <Route exact path="/" component={HomeView}/>
                            <Route exact path="/apartments/:apartmentId" component={ApartmentView}/>
                            <Route exact path="/locations/:location" component={Locations}/>
                        </div>
                    </Router>
                </Provider>
            </ApolloProvider>
        );
    }
}

export default App;
