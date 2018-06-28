import React            from 'react';

import Header         from 'component/Header/header.jsx';
import AccountSeachInput         from 'component/AccountSeachInput/AccountSeachInput.jsx';
import AccountGrid         from 'component/AccountGrid/AccountGrid.jsx';
import InstrumentSearch         from 'component/InstrumentSearch/InstrumentSearch.jsx';
import InstrumentList         from 'component/InstrumentList/InstrumentList.jsx';
import OrderEditHeader         from 'component/OrderEditHeader/OrderEditHeader.jsx';

import BondOrderInput         from 'component/BondOrderInput/BondOrderInput.jsx';

import OrderEditFooter         from 'component/OrderEditFooter/OrderEditFooter.jsx';


import 'page/OrderForm/OrderForm.styl'
import AccountListStore from 'store/AccountListStore.js';
import InstrunmentStore from 'store/InstrunmentStore.js';


const accountListStore=new AccountListStore();
const instrunmentStore=new InstrunmentStore();


class OrderForm extends React.Component{
    render(){
        return (
            <div id="OrderForm" className="OrderForm">
                <Header title="Place Bond Order"></Header>
                <OrderEditHeader className="component"></OrderEditHeader>
                <AccountSeachInput className="component" store={accountListStore}></AccountSeachInput>
                <AccountGrid className="component" store={accountListStore}></AccountGrid>
                <InstrumentSearch className="component" store={instrunmentStore}></InstrumentSearch>
                <InstrumentList className="component" store={instrunmentStore}></InstrumentList>        
                <BondOrderInput className="component"></BondOrderInput>       
                <OrderEditFooter className="component"></OrderEditFooter>
            </div>
        );
    }
}

export default OrderForm;