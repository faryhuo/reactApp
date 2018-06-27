import React            from 'react';

import Header         from 'component/Header/header.jsx';
import AccountSeachInput         from 'component/AccountSeachInput/AccountSeachInput.jsx';
import AccountGrid         from 'component/AccountGrid/AccountGrid.jsx';
import Footer         from 'component/Footer/footer.jsx';

import 'page/OrderForm/OrderForm.styl'



class OrderForm extends React.Component{
    render(){
        return (
            <div id="OrderForm" className="OrderForm">
                <Header title="Place Bond Order"></Header>
                <AccountSeachInput></AccountSeachInput>
                <AccountGrid></AccountGrid>
                <Footer></Footer>
            </div>
        );
    }
}

export default OrderForm;