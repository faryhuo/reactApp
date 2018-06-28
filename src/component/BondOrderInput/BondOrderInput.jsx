import React from 'react';



import { DropDownList, ComboBox, AutoComplete } from '@progress/kendo-react-dropdowns';

import 'component/BondOrderInput/BondOrderInput.styl'
import { Input, NumericTextBox } from '@progress/kendo-react-inputs';

class BondOrderInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OrderType: ["Market"],
            Duration: ["Day Order"],
            Confirmed: ["To Be Confirmed"]
        };
    }



    render() {
        return (
            <div id="BondOrderInput" className="BondOrderInput">
                <div className="k-form form card">
                    <div className="row">
                        <div className="cell col-sm-3">
                            <fieldset>
                                <label className="k-form-field">
                                    <span>Direction *</span>
                                    <input type="radio" name="Direction" id="Direction_Buy" className="k-radio" />
                                    <label for="Direction_Buy" className="k-radio-label">Buy</label>
                                    <input type="radio" name="Direction" id="Direction_Sell" className="k-radio" />
                                    <label for="Direction_Sell" className="k-radio-label">Sell</label>
                                </label>
                            </fieldset>
                        </div>

                        <div className="cell col-sm-3">
                            <fieldset>
                                <label className="k-form-field">
                                    <span>Order Type *</span>
                                    <DropDownList className="k-input" data={this.state.OrderType} defaultValue={this.state.OrderType[0]} />
                                </label>
                            </fieldset>
                        </div>

                        <div className="cell col-sm-3">
                            <fieldset>
                                <label className="k-form-field">
                                    <span>Order Type *</span>
                                    <DropDownList className="k-input" data={this.state.Duration} defaultValue={this.state.Duration[0]} />
                                </label>
                            </fieldset>
                        </div>
                        <div className="col-sm-3">
                            <fieldset>
                                <label className="k-form-field">
                                    <span>Notional *</span>
                                    <NumericTextBox className="k-input" />
                                </label>
                            </fieldset>
                        </div>
                    </div>
                </div>

                <div className="k-form form card">
                    <div className="row">
                        <div className="cell col-sm-3">
                            <fieldset>
                                <label className="k-form-field">
                                    <span>RTC / Spread *</span>
                                    <input placeholder="RTC / Spread" />
                                </label>
                            </fieldset>
                        </div>

                        <div className="cell col-sm-3">
                            <fieldset>
                                <label className="k-form-field">
                                    <span>RTC / Spread Amound *</span>
                                    <NumericTextBox className="k-input" />
                                </label>
                            </fieldset>
                        </div>

                        <div className="cell col-sm-3">
                            <fieldset>
                                <label className="k-form-field">
                                    <span>Handing Fee Amount *</span>
                                    <NumericTextBox className="k-input" />
                                </label>
                            </fieldset>
                        </div>
                        <div className="col-sm-3">
                            <fieldset>
                                <label className="k-form-field">
                                    <span>Confirmed / To Ve Confirmed *</span>
                                    <DropDownList className="k-input" data={this.state.Confirmed} defaultValue={this.state.Confirmed[0]} />
                                </label>
                            </fieldset>
                        </div>
                    </div>

                </div>

                <div className="k-form form card">
                    <div className="row">
                        <div className="cell col-sm-6">
                            <fieldset>
                                <label className="k-form-field">
                                    <span>Front Office Comments</span>
                                    <input className="bigInput" placeholder="Front Office Comments" />
                                </label>
                            </fieldset>
                        </div>
                        <div className="cell col-sm-6">
                            <fieldset>
                                <label className="k-form-field">
                                    <span>Trading Instructions</span>
                                    <input className="bigInput" placeholder="Trading Instructions" />
                                </label>
                            </fieldset>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BondOrderInput;