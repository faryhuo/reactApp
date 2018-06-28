import React from 'react';

import "@progress/kendo-theme-bootstrap/scss/all.scss";

import 'component/InstrumentList/InstrumentList.styl'

import { Grid, GridColumn as Column, GridCell } from '@progress/kendo-react-grid';
import {observer} from 'mobx-react';


@observer
class InstrumentList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="InstrumentList"  className="InstrumentList">
                <Grid
                    data={this.props.store.accountList}
                >
                    <Column field="InstrumentName" title="Instrument Name" width="300px" />
                    <Column field="CCY" title="CCY" width="100px" />
                    <Column field="ISIN" title="ISIN" width="200px"/>
                    <Column field="InstrumentDesc" title="Instrument Description" width="250px" />
                    <Column field="MaturityDate" title="Maturity Date" width="200px"  />
                </Grid>
            </div>
        );
    }
}

export default InstrumentList;