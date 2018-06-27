import React from 'react';


import 'component/AccountSeachInput/AccountSeachInput.styl'

//import {  Input } from '@progress/kendo-react-inputs';
import {observer} from 'mobx-react';



@observer
class AccountSeachInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                                        <input value={this.props.accountNoSearch} className="k-textbox" placeholder="Account No" />
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