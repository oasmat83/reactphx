import React, { Component } from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import './search.css';

class CommandBarNonFocusableItemsExample  extends Component {
    render() {
        return (
            <div>
                <CommandBar
                    isSearchBoxVisible={ true }
                    searchPlaceholderText='Search'
                />
            </div>
        );
    }
}

export default CommandBarNonFocusableItemsExample ;

