import React from 'react';

import 'component/Header/header.styl'
import { Button } from '@progress/kendo-react-buttons';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
       // document.title = "Place Bond Order";
    }
    render(){
        return (
            <div className="row header">
                <div className="col-md-12">
                    <h1 className="title">{this.props.title}</h1>
                    <Button primary={true} icon="reset" className="button"> Reset</Button>
                </div>
            </div>
        );
    }
}

export default Header;