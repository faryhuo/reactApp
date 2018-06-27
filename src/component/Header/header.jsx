import React from 'react';

import 'component/Header/header.styl'

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
       // document.title = "Place Bond Order";
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">{this.props.title}</h1>
                </div>
            </div>
        );
    }
}

export default Header;