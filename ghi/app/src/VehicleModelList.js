import { useEffect, useState } from 'react'



function VehicleModelList() {

    const [vehicleModels, setVehicleModels] = useState([])
    const fetchVehicleModels = async () => {
        const url = 'http://localhost:8100/api/models'
        const response = await fetch(url)
        const vehicleModelDict = await response.json()
        setVehicleModels(vehicleModelDict.models)
    }

    useEffect(() => {
        fetchVehicleModels();
    }, []);

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Picture</th>
                    <th>Manufacturer</th>
                </tr>
            </thead>
            <tbody>
                {vehicleModels.map(model => {
                    return (
                        <tr key={model.id}>
                            <td>{ model.name }</td>
                            <td><img src={ model.picture_url } width="100" height="100"></img></td>
                            <td>{ model.manufacturer.name }</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default VehicleModelList
