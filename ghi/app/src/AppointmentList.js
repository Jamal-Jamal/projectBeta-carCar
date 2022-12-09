import React from "react";

class AppointmentList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            appointments:[]
        }
    }

    async componentDidMount(){
        const url = 'http://localhost:8080/api/appointments/';
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            this.setState({appointments: data.appointments})
        }
    }

    async handleDelete(id){
        const deleteURl = `http://localhost:8080/api/appointments/${id}/`;
        const fetchConfig = {
            method: "delete"
        };
        const response = await fetch(deleteURl, fetchConfig);
        if (response.ok){
            const appointmentsToKeep = this.state.appointments.filter(appointment => (
                appointment.id !== id
              ))
              this.setState({appointments: appointmentsToKeep});
          }

    }
    async handleComplete(id){
      const updateURl = `http://localhost:8080/api/appointments/${id}/`;
      const fetchConfig = {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({is_finished: true})
      };
      const response = await fetch(updateURl, fetchConfig);
      if(response.ok){
        this.setState({is_finished: true});
      }
      window.location.reload();
    }

    render(){
        return (
            <table className='table table-striped mt-5'>
              <thead>
                <tr>
                  <th>VIN</th>
                  <th>Car Owner</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Technician</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {this.state.appointments.map((appointment,i) => {
                    let isComplete=""
                    if(appointment.is_finished === true){
                      isComplete="d-none"
                    }
                    let isVip=""
                    if(appointment.is_vip===true){
                      isVip="table-dark"
                    }
                  return(
                      <tr className={isComplete} key={appointment.id}>
                        <td className={isVip}>{appointment.vin_num}</td>
                        <td>{appointment.owner}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.time}</td>
                        <td>{appointment.technician}</td>
                        <td>{appointment.reason}</td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>this.handleDelete(appointment.id)} to="">Cancel</button>
                            <button className="btn btn-success" onClick={()=>this.handleComplete(appointment.id)} to="">Finished</button>
                        </td>
                      </tr>
                  );
                })}
              </tbody>
            </table>
        )
    }
}
export default AppointmentList;
