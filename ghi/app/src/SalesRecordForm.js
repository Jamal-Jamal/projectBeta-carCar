import React from 'react';


class SalesRecordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            automobile: '',
            automobiles: [],
            salesperson: '',
            salespeople: [],
            customer: '',
            customers: [],
            price: '',
        };
        this.handleAutomobileChange = this.handleAutomobileChange.bind(this);
        this.handleSalespersonChange = this.handleSalespersonChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.automobiles;
        delete data.salespeople;
        delete data.customers;

        const salesUrl = 'http://localhost:8090/api/salesrecords/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(salesUrl, fetchConfig);
        if (response.ok) {
            const cleared = {
                automobile: '',
                salesperson: '',
                customer: '',
                price: '',
            };
            this.setState(cleared);
        }
    }

    handleAutomobileChange(event) {
        const value = event.target.value;
        this.setState({automobile: value});
    }

    handleSalespersonChange(event) {
        const value = event.target.value;
        this.setState({salesperson: value})
    }

    handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({customer: value})
    }

    handlePriceChange(event) {
        const value = event.target.value;
        this.setState({price: value})
    }

    async componentDidMount() {
        const automobileUrl = 'http://localhost:8090/api/automobiles/';
        const autoResponse = await fetch(automobileUrl);
        if (autoResponse.ok) {
            const data = await autoResponse.json();
            this.setState({automobiles: data.automobiles});
        }
        const salespeopleUrl = 'http://localhost:8090/api/salespeople/';
        const salesResponse = await fetch(salespeopleUrl);
        if (salesResponse.ok) {
            const data = await salesResponse.json();
            this.setState({salespeople: data.salespeople});
        }
        const customerUrl = 'http://localhost:8090/api/customers/';
        const customerResponse = await fetch(customerUrl);
        if (customerResponse.ok) {
            const data = await customerResponse.json();
            this.setState({customers: data.customers});
        }

    }

    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Record a new sale</h1>
                <form onSubmit={this.handleSubmit} id="create-sale-form">
                <div className="mb-3">
                    <select onChange={this.handleAutomobileChange} required name="automobile"
                        value={this.state.automobile} id="automobile" className="form-select">
                    <option value="">Choose an automobile</option>
                    {this.state.automobiles.map(automobile => {
                        return (
                            <option key={automobile.vin} value={automobile.vin}>
                                {automobile.vin}
                            </option>
                        );
                    })}
                    </select>
                </div>
                <div className="mb-3">
                    <select onChange={this.handleSalespersonChange} required name="salesperson"
                        value={this.state.salesperson} id="salesperson" className="form-select">
                    <option value="">Choose a sales person</option>
                    {this.state.salespeople.map(salesperson => {
                        return (
                            <option key={salesperson.employee_id} value={salesperson.employee_id}>
                                {salesperson.name}
                            </option>
                        );
                    })}
                    </select>
                </div>
                <div className="mb-3">
                    <select onChange={this.handleCustomerChange} required name="customer"
                        value={this.state.customer} id="customer" className="form-select">
                    <option value="">Choose a customer</option>
                    {this.state.customers.map(customer => {
                        return (
                            <option key={customer.id} value={customer.id}>
                                {customer.name}
                            </option>
                        );
                    })}
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handlePriceChange} placeholder="Sale price" required
                        value={this.state.price} type="number" name="price" id="price"
                        className="form-control" />
                    <label htmlFor="name">Price</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
    );
  }
}

export default SalesRecordForm;
