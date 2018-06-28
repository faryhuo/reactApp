import React            from 'react';

import Header         from 'component/Header/header.jsx';
import AccountSeachInput         from 'component/AccountSeachInput/AccountSeachInput.jsx';
import AccountGrid         from 'component/AccountGrid/AccountGrid.jsx';
import Footer         from 'component/Footer/footer.jsx';

import 'page/OrderForm/OrderForm.styl'
import AccountListStore from 'store/AccountListStore.js';

const accountListStore=new AccountListStore();
class OrderForm extends React.Component{
    render(){
        return (
            <div id="OrderForm" className="OrderForm">
                <Header title="Place Bond Order"></Header>
                <AccountSeachInput store={accountListStore}></AccountSeachInput>
                <AccountGrid store={accountListStore}></AccountGrid>
                <Footer></Footer>
            </div>
        );
    }
}

export default OrderForm;