import React, { Component } from 'react';
import {
  SearchBox
} from 'office-ui-fabric-react/lib/SearchBox';

class SearchBoxSmallExample extends Component {
    render() {
        return (
            <div className='ms-SearchBoxSmallExample ms-SearchBox--commandBar'>
                <SearchBox
                onChange={ (newValue) => console.log('SearchBox onChange fired: ' + newValue) }
                onSearch={ (newValue) => console.log('SearchBox onSearch fired: ' + newValue) }
                />
            </div>
        );
    }
}

export default SearchBoxSmallExample;

