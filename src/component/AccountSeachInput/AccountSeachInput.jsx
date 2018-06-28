import React from 'react';



//import {  Input } from '@progress/kendo-react-inputs';
import {observer} from 'mobx-react';


import 'component/AccountSeachInput/AccountSeachInput.styl'

@observer
class AccountSeachInput extends React.Component {
    constructor(props) {
        super(props);
        let accountNo=this.props.store.accountInfo.accountNoSearch;
        this.state = {
            accountNo:accountNo
        };
    }

    search(accountNo){
         this.props.store.search(accountNo);
    }

    render() {
        return (
            <div id="AccountSeachInput"  className="AccountSeachInput">
                <div className="k-form form card">
                    <div className="row">
                    <div className="cell col-sm-12">
                        <fieldset>
                                    <label className="k-form-field">
                                        <span>Account Serch *</span>
                                        <input onChange={(e)=>{this.search(e.target.value)}} className="k-textbox" defaultValue={this.state.accountNo}  placeholder="Account No" />
                                    </label>
                        </fieldset>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountSeachInput;