import React from 'react';

class AppointmentForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            vin_num: '',
            owner: '',
            date: '',
            time: '',
            technician:'',
            technicians: [],
            reason: ''
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeVin = this.handleChangeVin.bind(this);
    this.handleChangeOwner = this.handleChangeOwner.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeTechnician  = this.handleChangeTechnician.bind(this);
    this.handleChangeReason  = this.handleChangeReason.bind(this);
    }
    async componentDidMount() {
        const url = 'http://localhost:8080/api/technicians/';
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({ technicians: data.technicians });
        }
    }
    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};
        delete data.technicians;

        const appointmentUrl = "http://localhost:8080/api/appointments/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            const newAppointment = await response.json();
            this.setState({
                vin_num: '',
                owner: '',
                date: '',
                time: '',
                technician:'',
                reason:'',
            });
        }
    }
    handleChangeVin(event) {
        const value = event.target.value;
        this.setState({ vin_num: value });
    }
    handleChangeOwner(event) {
        const value = event.target.value;
        this.setState({ owner: value });
    }
    handleChangeDate(event) {
        const value = event.target.value;
        this.setState({ date: value });
    }
    handleChangeTime(event) {
        const value = event.target.value;
        this.setState({ time: value });
    }
    handleChangeTechnician(event) {
        const value = event.target.value;
        this.setState({ technician: value });
    }
    handleChangeReason(event) {
        const value = event.target.value;
        this.setState({ reason: value });
    }


    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add Appointment</h1>
                <form onSubmit={this.handleSubmit} id="create-appointment-form">
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeVin}
                        value={this.state.vin_num}
                        placeholder="vin_num"
                        required type="text"
                        name="vin_num" id="vin_num"
                        className="form-control" />
                        <label htmlFor="vin_num">VIN Number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeOwner}
                        value={this.state.owner}
                        placeholder="owner"
                        required type="text"
                        name="owner" id="owner"
                        className="form-control" />
                        <label htmlFor="owner">Car Owner</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeDate}
                        value={this.state.date}
                        placeholder="date"
                        required type="date"
                        name="date" id="date"
                        className="form-control" />
                        <label htmlFor="date">Appointment Date</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeTime}
                        value={this.state.time}
                        placeholder="time"
                        type="time"
                        name="time" id="time"
                        className="form-control" />
                        <label htmlFor="time">Appointment Time</label>
                    </div>
                    <div className="mb-3">
                        <select onChange={this.handleChangeTechnician}
                        value={this.state.technician}
                        required name="technician" id="technician"
                        className="form-select">
                        <option value="">Choose a Technician</option>
                        {this.state.technicians.map(tech => {
                            return (
                            <option key={tech.id} value={tech.id}>{tech.name}</option>
                            )
                        })}
                        </select>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeReason}
                        value={this.state.reason}
                        placeholder="reason"
                        required type="text"
                        name="reason" id="reason"
                        className="form-control" />
                        <label htmlFor="reason">Purpose of Visit</label>
                    </div>
                    <button className="btn btn-primary">Add</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}

export default AppointmentForm;
