import React from 'react'

function PlantDetailTable({ plantDetail }) {
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="table-success">
                    <tr>
                        <th scope="col">Manufacturer</th>
                        <th scope="col">Model</th>
                        <th scope="col">Year</th>
                        <th scope="col">Weight Capacity</th>
                        <th scope="col">Lifting Height</th>
                        <th scope="col">Horsepower</th>
                        <th scope="col">Boom Length</th>
                        <th scope="col">Digging Depth</th>
                        <th scope="col">Blade Size</th>
                        <th scope="col">Bucket Capacity</th>
                        <th scope="col">Tipper Capacity</th>
                        <th scope="col">Demolition</th>
                        <th scope="col">Lease Type</th>
                        <th scope="col">Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={plantDetail?.reference}>
                        <td>{plantDetail?.manufacturer}</td>
                        <td>{plantDetail?.model}</td>
                        <td>{plantDetail?.year}</td>
                        <td>{plantDetail?.weightCapacity || 'N/A'}</td>
                        <td>{plantDetail?.liftingHeight || 'N/A'}</td>
                        <td>{plantDetail?.horsepower || 'N/A'}</td>
                        <td>{plantDetail?.boomLength || 'N/A'}</td>
                        <td>{plantDetail?.diggingDepth || 'N/A'}</td>
                        <td>{plantDetail?.bladeSize || 'N/A'}</td>
                        <td>{plantDetail?.bucketCapacity || 'N/A'}</td>
                        <td>{plantDetail?.tipperCapacity || 'N/A'}</td>
                        <td>{plantDetail?.demolition || 'N/A'}</td>
                        <td>{plantDetail?.typeOfLease}</td>
                        <td>{plantDetail?.ratePerHour}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PlantDetailTable