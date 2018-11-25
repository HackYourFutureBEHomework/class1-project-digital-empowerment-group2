import React from 'react';


export default class EditButton extends React.Component {
    render () {
        const { actions }= this.props;
        const actionButtons = actions.map(this._renderAction)
        return < div className="">{actionButtons}</div>
    }
    
    _renderAction(action) {
        const {title, handler } = action;
        return( 
            <button key={title} className="edit-delete__button" onClick={handler}>
                {title}
            </button>
        );
    }
}