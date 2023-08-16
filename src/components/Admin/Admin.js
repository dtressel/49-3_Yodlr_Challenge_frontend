import { useEffect, useState } from 'react';
import ApiLink from '../../helpers/ApiLink';
import UsersTable from '../UsersTable/UsersTable';
import './Admin.css';

const Admin = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const res = await ApiLink.getAllUsers();
      setUsers(res.data);
    }
    getUsers();
  }, []);

  return (
    <div className="Admin">
      <h2>List of Users For Admins</h2>
      {users && 
        <UsersTable users={users} />
      }
    </div>
  )
}

export default Admin;