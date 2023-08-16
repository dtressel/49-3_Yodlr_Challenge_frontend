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

  const activateSelected = async (selectedUsers) => {
    const selectedUsersWithData = selectedUsers.map((userId) => {
      const userIdx = users.findIndex((user) => user.id === userId);
      return users[userIdx];
    })
    const res = await ApiLink.activateUsers(selectedUsersWithData);
    const usersCopy = [...users];
    for (const id of res.activated) {
      const indexToActivate = usersCopy.findIndex((user) => user.id === id);
      usersCopy[indexToActivate].state = "active";
    }
    setUsers(usersCopy);
  }

  const deleteSelected = async (selectedUsers) => {
    const res = await ApiLink.deleteUsers(selectedUsers);
    const usersCopy = [...users];
    for (const id of res.deleted) {
      const indexToDelete = usersCopy.findIndex((user) => user.id === id);
      usersCopy.splice(indexToDelete, 1);
    }
    setUsers(usersCopy);
  }

  return (
    <div className="Admin">
      <h2>List of Users For Admins</h2>
      {users && 
        <UsersTable users={users} deleteSelected={deleteSelected} activateSelected={activateSelected} />
      }
    </div>
  )
}

export default Admin;