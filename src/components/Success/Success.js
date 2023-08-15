import { useLocation } from "react-router-dom";
import './Success.css';

const Success = () => {
  const { state: user } = useLocation();

  return (
    <>
      <h2>New User Registered!</h2>
      <h3>User:</h3>
      <div className="Success-user-card">
        <div>
          <div>First Name</div>
          <div>{user.firstName}</div>
        </div>
        <div>
          <div>Last Name</div>
          <div>{user.lastName}</div>
        </div>
        <div>
          <div>Email</div>
          <div>{user.email}</div>
        </div>
      </div>
    </>
  )
}

export default Success;