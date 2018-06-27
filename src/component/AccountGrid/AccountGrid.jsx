import React from 'react';

import "@progress/kendo-theme-bootstrap/scss/all.scss";

import 'component/AccountGrid/AccountGrid.styl'

import { Grid, GridColumn as Column, GridCell } from '@progress/kendo-react-grid';


class AccountGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridData: [{},{}]
        };
    }
    render() {
        return (
            <div id="AccountGrid"  className="AccountGrid">
                <Grid
                    data={this.state.gridData}
                >
                    <Column field="AccountNumber" title="Account Number" width="200px" />
                    <Column field="ClientName" title="Client Name" width="200px" />
                    <Column field="AccountStatus" title="Account Status" />
                    <Column field="RMName" title="RM Name" width="150px" />
                    <Column field="bookingCentre" title="Booking Centre" width="80px" />
                    <Column field="DDCOrder" title="DDCO rder" width="120px"  />
                </Grid>
            </div>
        );
    }
}

export default AccountGrid;