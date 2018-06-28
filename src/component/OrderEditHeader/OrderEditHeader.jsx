import React from 'react';



import { DropDownList, ComboBox, AutoComplete } from '@progress/kendo-react-dropdowns';
import { DateInput, Calendar, DatePicker, TimePicker } from '@progress/kendo-react-dateinputs';

import 'component/OrderEditHeader/OrderEditHeader.styl'

class OrderEditHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CommunicationMedia:["Email"],
            ExecutiomType:["Advisory"]
        };
    }



    render() {
        return (
            <div id="OrderEditHeader"  className="OrderEditHeader">
                <div className="k-form form card">
                    <div className="row">
                    <div className="cell col-sm-3">
                        <fieldset>
                           <label className="k-form-field">
                            <span>Communication Media *</span>
                           <DropDownList className="k-input" data={this.state.CommunicationMedia} defaultValue={this.state.CommunicationMedia[0]}  />                                    
                           </label>
                        </fieldset>
                    </div>
                    <div className="cell col-sm-3">
                        <fieldset>
                           <label className="k-form-field">
                             <span>Order Received Date & Time *</span>
                           <DatePicker className="k-input" format={"dd-MMM-yyyy hh:mm a"} />                                   
                         </label>
                        </fieldset>
                    </div>
                    <div className="cell col-sm-3">
                        <fieldset>
                                    <label className="k-form-field">
                                        <span>Account Serch *</span>
                                        <input  className="k-textbox"   placeholder="Account No" />
                                    </label>
                        </fieldset>
                    </div>
                    <div className="col-sm-3">
                        <fieldset>
                                    <label className="k-form-field">
                                        <span>Executiom Type *</span>
                                        <DropDownList className="k-input" data={this.state.ExecutiomType} defaultValue={this.state.ExecutiomType[0]}  />                                  
                                    </label>
                        </fieldset>
                    </div>                                                            
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderEditHeader;