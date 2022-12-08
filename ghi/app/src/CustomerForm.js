import React from 'react';


class CustomerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            phoneNumber: '',
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.phone_number = data.phoneNumber;
        delete data.phoneNumber;

        const customersUrl = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(customersUrl, fetchConfig);

        if (response.ok) {
            const cleared = {
                name: '',
                address: '',
                phoneNumber: '',
            };
            this.setState(cleared);
        }
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value});
    }

    handleAddressChange(event) {
        const value = event.target.value;
        this.setState({address: value})
    }

    handlePhoneNumberChange(event) {
        const value = event.target.value;
        this.setState({phoneNumber: value})
    }

    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add a potential customer</h1>
                <form onSubmit={this.handleSubmit} id="create-customer-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleNameChange} placeholder="Name" required
                        value={this.state.name} type="text" name="name" id="name"
                        className="form-control" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea onChange={this.handleAddressChange} value={this.state.address} className="form-control"
                        id="address" name="address" rows="3"></textarea>
                </div>
                <div className="form-floating mb-3">
                    <input  onChange={this.handlePhoneNumberChange} placeholder="Phone Number" required
                        value={this.state.phoneNumber} type="text" name="phone_number" id="phone_number"
                        className="form-control" />
                    <label htmlFor="room_count">Phone</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
    );
  }
}

export default CustomerForm;
