import React from 'react';

class AutomobileList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      automobiles: []
    };
  };

  async componentDidMount() {
    const automobilesURL = "http://localhost:8100/api/automobiles/";
    const response = await fetch(automobilesURL);
    if (response.ok) {
        const data = await response.json();
        this.setState({ automobiles: data.autos})
    }
  }
  render (){
    return (
        <table className='table table-striped mt-5'>
          <thead>
            <tr>
              <th>VIN</th>
              <th>Color</th>
              <th>Year</th>
              <th>Model</th>
              <th>Manufacturer</th>
            </tr>
          </thead>
          <tbody>
            {this.state.automobiles.map(automobile => {
              return(
                  <tr key={automobile.id}>
                    <td>{automobile.vin}</td>
                    <td>{automobile.color}</td>
                    <td>{automobile.year}</td>
                    <td>{automobile.model.name}</td>
                    <td>{automobile.model.manufacturer.name}</td>
                  </tr>
              );
            })}
          </tbody>
        </table>
    )
  }
}
export default AutomobileList;
