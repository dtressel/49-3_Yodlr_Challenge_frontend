import { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ReactRouterLink } from "react-router-dom";
import Button from '@mui/material/Button';
import './Success.css';

const Success = () => {
  const { state: user } = useLocation();
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate("/signup");
    }
  }, [user, navigate]);

  return (
    <>
      {user && 
        <div className="Success">
          <h2>New User Registered!</h2>
          <div className="Success-user-card-wrapper">
            <div className="Success-user-card">
              <h3>User:</h3>
              <div className="Success-user-card-row">
                <div>First Name</div>
                <div>{user.firstName}</div>
              </div>
              <div className="Success-user-card-row">
                <div>Last Name</div>
                <div>{user.lastName}</div>
              </div>
              <div className="Success-user-card-row">
                <div>Email</div>
                <div>{user.email}</div>
              </div>
              <div className="Success-user-card-row">
                <div>Status</div>
                <div>{user.state}</div>
              </div>
            </div>
          </div>
          <Button component={ReactRouterLink} to='/'>Return to Home</Button>
        </div>
      }
    </>
  )
}

export default Success;