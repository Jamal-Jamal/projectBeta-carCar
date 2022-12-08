import React from 'react';

class SalesList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            salesperson: '',
            salespeople:[],
            salesrecords: [],
        };
    this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);

    }
    async componentDidMount(){
        const url = 'http://localhost:8090/api/salespeople/';
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            this.setState({salespeople: data.salespeople})
        }
        const saleUrl = 'http://localhost:8090/api/salesrecords/';
        const saleResponse = await fetch(saleUrl);
        if (saleResponse.ok) {
            const saleData = await saleResponse.json();
            this.setState({salesrecords: saleData.sales})
        }
    }

    async handleSalesPersonChange(event){
        const value = event.target.value;
        this.setState({ salesperson: value })
    }

    render() {
        return (
            <div>
                <h1>Sales Person History</h1>
                <div className="mb-3">
                    <select onChange={this.handleSalesPersonChange} name="salesperson"
                        value={this.state.salesperson} id="salesperson" className="form-select">
                    <option value="">Choose a Sales Person</option>
                    {this.state.salespeople.map(salesperson => {
                            return (
                                <option key={salesperson.employee_id} value={salesperson.employee_id}>
                                    {salesperson.name}
                                </option>
                            );
                    })}
                    </select>
                    <div>
                        <table className='table table-striped'>
                        <thead>
                            <tr>
                            <th>Sales Person</th>
                            <th>Customer</th>
                            <th>VIN</th>
                            <th>Sale Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.salesrecords
                            .filter((sale) => (sale.salesperson.employee_id == this.state.salesperson))
                            .map(sale =>
                                    (
                                    <tr key={sale.id} value={sale.id}>
                                        <td>{ sale.salesperson.name }</td>
                                        <td>{ sale.customer.name }</td>
                                        <td>{ sale.automobile.vin }</td>
                                        <td>{ sale.price }</td>
                                    </tr>
                                    )
                            )
                            }
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}
export default SalesList;
