/*
* @Author: Rosen
* @Date:   2018-01-13 11:27:21
* @Last Modified by:   Rosen
* @Last Modified time: 2018-02-05 14:02:20
*/  

import React            from 'react';
import ReactDOM         from 'react-dom';

import Header         from 'component/Header/index.jsx';


class App extends React.Component{
    render(){
        return (
            <Header></Header>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
