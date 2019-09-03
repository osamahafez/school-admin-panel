import React, { Component } from 'react'
import SidebarTemplate from '../common/SidebarTemplate/SidebarTemplate';
import AreaChart from '../Charts/AreaChart';
import ColumnChart from '../Charts/ColumnChart';
import LineChart from '../Charts/LineChart';
import PieChart from '../Charts/PieChart';

class Dashboard extends Component {
    render() {
        return (
            <SidebarTemplate>
                <div className="row justify-content-around mb-5">
                    <div className="col-md-5 mt-3">
                        <ColumnChart />
                    </div>
                    <div className="col-md-5 mt-3">
                        <AreaChart />
                    </div>
                    <div className="col-md-5 mt-3">
                        <LineChart />
                    </div>
                    <div className="col-md-5 mt-3">
                        <PieChart />
                    </div>
                </div>
                
            </SidebarTemplate>
        );
    }
}

export default Dashboard;