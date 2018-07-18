// core
import React from 'react'

export default class SideMenuItem extends React.Component { 

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li 
                tabIndex='0'
                
                onKeyPress={ () => {                     
                    this.props.parentHandleInfoFn(this.props.location['v_id']);
                    // when press enter the focus goes to the infoWindow
                    this.props.parentFocusInfoWindow();
                } }

                onClick={ () => { 
                    this.props.parentHandleInfoFn(this.props.location['v_id']);
                } }>

                    <p>
                    { this.props.location.title }
                    </p>

            </li>
        )
    }

}
