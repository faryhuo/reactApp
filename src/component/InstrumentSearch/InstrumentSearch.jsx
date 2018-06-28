import React from 'react';



//import {  Input } from '@progress/kendo-react-inputs';
import {observer} from 'mobx-react';


import 'component/InstrumentSearch/InstrumentSearch.styl'

@observer
class InstrumentSearch extends React.Component {
    constructor(props) {
        super(props);
        let instrunmentSearch=this.props.store.instrunmentInfo.instrunmentSearch;
        this.state = {
            instrunmentSearch:instrunmentSearch
        };
    }

    search(instrunmentName){
         this.props.store.search(instrunmentName);
    }

    render() {
        return (
            <div id="InstrumentSearch"  className="InstrumentSearch">
                <div className="k-form form card">
                    <div className="row">
                    <div className="cell col-sm-12">
                        <fieldset>
                                    <label className="k-form-field">
                                        <span>Instrument Search *</span>
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

export default InstrumentSearch;