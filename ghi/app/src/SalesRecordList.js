import React from 'react';

class SalesRecordList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        salesrecords: []
    };
  };

  async componentDidMount() {
    const salesrecordsUrl = "http://localhost:8090/api/salesrecords/";
    const response = await fetch(salesrecordsUrl);
    if (response.ok) {
        const data = await response.json();
        this.setState({ salesrecords: data.sales})
    }
  }

  render(){
    return (
      <table className="table table-striped">
      <thead>
        <tr>
          <th>Sales Person Name</th>
          <th>Sales Person Number</th>
          <th>Customer Name</th>
          <th>Automobile VIN</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {this.state.salesrecords.map(sale => {
          return (
            <tr key={sale.id}>
              <td>{ sale.salesperson.name }</td>
              <td>{ sale.salesperson.employee_id }</td>
              <td>{ sale.customer.name }</td>
              <td>{ sale.automobile.vin }</td>
              <td>{ sale.price }</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
  }

}
export default SalesRecordList;
