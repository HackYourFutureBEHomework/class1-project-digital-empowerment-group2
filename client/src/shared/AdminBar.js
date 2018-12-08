import React from 'react';
import './AdminBar.css';

export default class AdminBar extends React.Component {
    render () {
        const { actions }= this.props;
        const actionButtons = actions.map(this._renderAction)
        return < div className="admin-bar">{actionButtons}</div>
         
    }
    
    _renderAction(action) {
        // const {title, handler } = action;
        return( <div></div>
            // <button key={title} className="admin-bar__button" onClick={handler}>
            //     {title}
            // </button>
        );
    }
}