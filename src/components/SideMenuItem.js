// core
import React from 'react'

export default class SideMenuItem extends React.Component { 

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <li 
                tabIndex='0'
                
                onKeyPress={ () => { 
                    this.setState({counter: this.state.counter + 1}, ()=> {
                        if(this.state.counter % 2 !== 0) {
                            this.props.parentHandleInfoFn(this.props.location['v_id']);
                            // when press enter the focus goes to the infoWindow
                            this.props.parentFocusInfoWindow(); 

                        }else{
                            this.props.parentHandleInfoFn(null);
                        }
                    });


                } }

                onClick={ () => { 
                    this.setState({counter: this.state.counter + 1}, ()=> {
                    if(this.state.counter % 2 !== 0) {
                        this.props.parentHandleInfoFn(this.props.location['v_id']);

                    }else{
                        this.props.parentHandleInfoFn(null);
                    }
                   });
                } }>

                    <p>
                    { this.props.location.title }
                    </p>

            </li>
        )
    }

}