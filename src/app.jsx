/*
* @Author: Rosen
* @Date:   2018-01-13 11:27:21
* @Last Modified by:   Rosen
* @Last Modified time: 2018-02-05 14:02:20
*/  

import React            from 'react';
import ReactDOM         from 'react-dom';

import Header         from 'component/Header/header.jsx';
import AccountGrid         from 'component/AccountGrid/AccountGrid.jsx';

import Footer         from 'component/Footer/footer.jsx';

import "bootstrap/scss/bootstrap.scss";


class App extends React.Component{
    render(){
        return (
            <div id="App_Conponent">
                <Header title="Place Bond Order"></Header>
                <AccountGrid></AccountGrid>
                <Footer></Footer>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
