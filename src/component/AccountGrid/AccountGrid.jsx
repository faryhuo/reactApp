import React from 'react';

import "@progress/kendo-theme-bootstrap/scss/all.scss";

import 'component/AccountGrid/AccountGrid.styl'

import { Grid, GridColumn as Column, GridCell } from '@progress/kendo-react-grid';
import {observer} from 'mobx-react';


@observer
class AccountGrid extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="AccountGrid"  className="AccountGrid">
                <Grid
                    data={this.props.store.accountList}
                >
                    <Column field="AccountNumber" title="Account Number" width="200px" />
                    <Column field="ClientName" title="Client Name"  />
                    <Column field="AccountStatus" title="Account Status" width="200px"/>
                    <Column field="RMName" title="RM Name" width="150px" />
                    <Column field="bookingCentre" title="Booking Centre" width="150px" />
                    <Column field="DDCOrder" title="DDC Order" width="120px"  />
                </Grid>
            </div>
        );
    }
}

export default AccountGrid;