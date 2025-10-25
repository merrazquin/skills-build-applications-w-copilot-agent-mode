import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const apiUrl = codespace
    ? `https://${codespace}-8000.app.github.dev/api/users/`
    : '/api/users/';
  
  
  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        
        
      });
  }, [apiUrl]);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-primary">Users</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id || user.email}>
                  <td>{idx + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
