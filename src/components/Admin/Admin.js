import { useEffect, useState } from 'react';
import ApiLink from '../../helpers/ApiLink';
import UsersTable from '../UsersTable/UsersTable';

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
    <>
      <h2>Users</h2>
      {users && 
        <UsersTable users={users} />
      }

    </>

  )
}

export default Admin;