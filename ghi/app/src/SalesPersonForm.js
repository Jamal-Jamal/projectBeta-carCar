import React from 'react';


class SalesPersonForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            employeeId: '',
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmployeeIdChange = this.handleEmployeeIdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.employee_id = data.employeeId;
        delete data.employeeId;


        const salespeopleUrl = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(salespeopleUrl, fetchConfig);

        if (response.ok) {
            const cleared = {
                name: '',
                employeeId: '',
            };
            this.setState(cleared);
        }
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value});
    }

    handleEmployeeIdChange(event) {
        const value = event.target.value;
        this.setState({employeeId: value})
    }

    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add a new sales person</h1>
                <form onSubmit={this.handleSubmit} id="create-salesperson-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleNameChange} placeholder="Name" required
                        value={this.state.name} type="text" name="name" id="name"
                        className="form-control" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input  onChange={this.handleEmployeeIdChange} placeholder="Employee ID" required
                        value={this.state.employeeId} type="number" name="employee_id" id="employee_id"
                        className="form-control" />
                    <label htmlFor="room_count">Employee ID</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
    );
  }
}

export default SalesPersonForm;
