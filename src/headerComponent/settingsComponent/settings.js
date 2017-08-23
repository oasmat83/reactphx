import React, { Component } from 'react';
import { IconButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import './settings.css';

class PanelLightDismissExample  extends Component {
    constructor() {
        super();

        this.state = { showPanel: false };
    }
    render() {
        let { disabled, checked } = this.props;
        return (
            <div className='ms-CommandButton'>

                <IconButton
                disabled={ disabled }
                checked={ checked }
                iconProps={ { iconName: 'Settings' } }
                title='Settings'
                ariaLabel='Settings' 
                onClick={ () => this.setState({ showPanel: true }) }
                />

                <Panel
                isOpen={ this.state.showPanel }
                isLightDismiss={ true }
                headerText='Light Dismiss Panel'
                onDismiss={ () => this.setState({ showPanel: false }) }
                >
                <span>Light Dismiss usage is meant for the Contextual Menu on mobile sized breakpoints.</span>
                </Panel>
            </div>
        );
    }
}

export default PanelLightDismissExample ;