import React from 'react';
import './UserDetail.css';

const UserDetail = () => {
    return (
        <div className="user-container">
            {/* Header with title */}
            <div className="user-header">
                <h1 className="user-title">All User</h1>
            </div>

            {/* Table wrapper */}
            <div className="table-wrapper">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th className="table-head">S.No.</th>
                            <th className="table-head">User Name</th>
                            <th className="table-head">Action</th>
                            <th className="table-head">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-data">1.</td>
                            <td className="table-data">name</td>
                            <td className="table-action edit">Edit</td>
                            <td className="table-action delete">Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserDetail;
