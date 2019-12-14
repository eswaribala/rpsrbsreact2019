import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import axios from 'axios'
import './ViewEmployee.css'
export class ViewEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],

        };
        this.export = this.export.bind(this);
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
    export() {
        this.dt.exportCSV();
    }

    displaySelection(data) {
        if(!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if(data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((employee,i) => <li key={employee.employeeNo}>{employee.employeeNo + ' - ' + employee.firstName + ' - ' + employee.lastName + ' - ' + employee.mobileNo}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Employee: {data.employeeNo + ' - ' + data.firstName+ ' - ' + data.lastName + ' - ' + data.mobileNo}</div>
            }
        }
    render() {
        let paginatorLeft = <Button icon="pi pi-refresh"/>;
        let paginatorRight = <Button icon="pi pi-cloud-upload"/>;
        var header = <div style={{textAlign:'left'}}><Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={this.export}></Button></div>;
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
            <div className="content-section">
            <div className="feature-intro">
            <h1>Employee Table - Export</h1>

        </div>
        </div>
        <div className="content-section implementation">

        <DataTable value={this.state.employees}  header={header}
            footer={this.displaySelection(this.state.selectedEmployee)}
            selection={this.state.selectedEmployee} onSelectionChange={e => this.setState({selectedEmployee: e.value})}
        ref={(el) => { this.dt = el; }} paginator={true} paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rows={10} rowsPerPageOptions={[5,10,20]}>
           {dynamicColumns}
    <Column selectionMode="multiple" style={{width:'5em'}}/>
            </DataTable>
            </div>
            </div>
    );
    }

}




