import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import axios from 'axios'
import './ViewEmployee.css'
export class ViewEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],

        };

    }

    componentDidMount() {

       axios.get('http://localhost:5002/getallemployees')
            .then(res => {
                console.log(res.data);
                this.setState({
                    employees:res.data
                })

            });


    }

    render() {
        const columns = [
            {field: 'employeeNo', header: 'EmployeeNo'},
            {field: 'firstName', header: 'First Name'},
            {field: 'lastName', header: 'Last Name'},
            {field: 'email', header: 'Email'},
            {field: 'mobileNo', header: 'Mobile No'}
        ];

        const dynamicColumns = columns.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div className="table">

        <div className="content-section implementation">

        <DataTable value={this.state.employees}>
            {dynamicColumns}
            </DataTable>
            </div>
            </div>
    );
    }

}




