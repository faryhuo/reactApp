/*
* @Author: Rosen
* @Date:   2018-01-13 11:27:21
* @Last Modified by:   Rosen
* @Last Modified time: 2018-02-05 14:02:20
*/  
import 'babel-polyfill'
import React            from 'react';
import ReactDOM         from 'react-dom';

import OrderForm         from 'page/OrderForm/OrderForm.jsx';


import "bootstrap/scss/bootstrap.scss";


class App extends React.Component{
    render(){
        return (
            <div id="App_Conponent">
                <OrderForm></OrderForm>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
