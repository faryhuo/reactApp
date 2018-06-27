/*
* @Author: Rosen
* @Date:   2018-01-23 22:18:41
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-23 22:26:09
*/
import React from 'react';

import 'component/Header/index.styl'

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        document.title = "Place Bond Order";
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">Place Bond Order</h1>
                </div>
            </div>
        );
    }
}

export default Header;