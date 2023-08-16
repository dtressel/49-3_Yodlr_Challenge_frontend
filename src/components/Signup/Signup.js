import ApiLink from '../../helpers/ApiLink';
import { useState } from 'react';
import useFields from '../../hooks/useFields';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import './Signup.css';

const Signup = () => {
  const { formData, handleFieldChange, resetFormData } = useFields({
    email: '',
    firstName: '',
    lastName: ''
  });
  const navigate = useNavigate();
  const [alertMessages, setAlertMessages] = useState();

  const handleSubmit = async evt => {
    evt.preventDefault();
    const res = await ApiLink.signupUser(formData);
    if (res.status.toString()[0] === '2') {
      resetFormData();
      navigate("/success", { state: res.data });
    }
    else {
      let messages = ["Signup Unsuccessful!"];
      if (!res.messages && res.message) {
        messages.push(res.message);
      }
      else if (res.messages) {
        messages.push(...res.messages);
      }
      setAlertMessages(messages);
    }
  }

  return (
    <div className="AuthForm">
      <div className="AuthForm-innerWrapper rounded-paper">
        <h2>Signup</h2>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            id="email"
            name="email"
            className="AuthForm-field"
            value={formData.email}
            onChange={handleFieldChange}
            required
            fullWidth
            error={false}
          />
          <TextField
            label="First Name"
            variant="outlined"
            id="firstName"
            name="firstName"
            className="AuthForm-field"
            value={formData.firstName}
            onChange={handleFieldChange}
            required
            fullWidth
            error={false}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            id="lastName"
            name="lastName"
            className="AuthForm-field"
            value={formData.lastName}
            onChange={handleFieldChange}
            required
            fullWidth
            error={false}
          />
          <Button className="AuthForm-button" variant="contained" type="submit">Submit</Button>
        </form>
        {alertMessages && alertMessages.map((msg) => {
          return <Alert className="AuthForm-error" severity="error">{msg}</Alert>
        })}
      </div>
    </div>
  )
}

export default Signup;