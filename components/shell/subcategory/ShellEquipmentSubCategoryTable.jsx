import React from 'react'

function ShellEquipmentSubCategoryTable({ shell }) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {shell?.map((shell, index) => (
                        <tr key={shell?.reference}>
                            <td scope="row">{index + 1}</td>
                            <td>{shell?.source_location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShellEquipmentSubCategoryTable