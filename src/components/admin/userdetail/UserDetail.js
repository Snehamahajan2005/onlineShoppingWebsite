import React, { useContext } from 'react';
import './UserDetail.css';
import myContext from '../../../context/myContext';



const UserDetail = () => {
    const context = useContext(myContext);
    const { allUsers} = context;

    
    console.log("Fetched Users:", allUsers);

    return (
        <div className="user-container">
            {/* Header with title */}
            <div className="user-header">
                <h1 className="user-title">All Users</h1>
            </div>

            {/* Table wrapper */}
            <div className="table-wrapper">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th className="table-head">S.No.</th>
                            <th className="table-head">Name</th>
                            <th className="table-head">Email</th>
                            <th className="table-head">UID</th>
                            <th className="table-head">Role</th>
                            <th className="table-head">Date</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.length > 0 ? (
                            allUsers.map((users, index) => (
                                <tr key={users.id}>
                                    <td className="table-data">{index + 1}</td>
                                    <td className="table-data">{users.name}</td>
                                    <td className="table-data">{users.email}</td>
                                    <td className="table-data">{users.uid}</td>
                                    <td className="table-data">{users.role}</td>
                                    <td className="table-data">{users.date}</td>
                                    
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="table-data">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserDetail;
