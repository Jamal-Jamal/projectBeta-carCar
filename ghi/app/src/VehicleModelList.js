import React from 'react';

class ModelsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        models: []
    };
  };

  async componentDidMount() {
    const modelsURL = "http://localhost:8100/api/models/";
    const response = await fetch(modelsURL);
    if (response.ok) {
        const data = await response.json();
        this.setState({ models: data.models})
    }
  }
  render(){
    return (
        <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {this.state.models.map(model => {
            return (
              <tr key={model.href}>
                <td>{ model.name }</td>
                <td>{ model.manufacturer.name }</td>
                <td><img src={ model.picture_url }/></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  }
}

export default ModelsList;
