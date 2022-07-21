import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';

import './registerStyles.scss';
import DropdownList from '../../common/dropdownList';

// const Item = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(1),
//   textAlign: 'center',
// }));

class RegisterComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      classType: '',
      itemsList: ['class', 'class0', 'class1', 'class2']
    }
  }

  handleChange = (event) => {
    this.setState({classType: event.target.value});
  };

  render() {
    return (
      <div className='main'>
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant="h3" className='txtHeading' component="div" gutterBottom>New User</Typography>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Typography variant="h6" className='txtSubHeading' component="div" gutterBottom>Please fill the details to register</Typography>
        </Box>
        <Grid container className='form'>
          <Grid Item xs={4} className='mb-40'>
            <TextField
              className='txtBox'
              id="outlined-text-input"
              label="Name"
              type="text"
              autoComplete="current-text"
              variant="outlined"
            />
          </Grid>
          <Grid Item xs={6}>
            <TextField
              className='txtBox'
              id="outlined-email-input"
              label="Email"
              type="email"
              autoComplete="current-email"
              variant="outlined"
            />
          </Grid>
          <Grid Item xs={4} className='mb-40'>
            <TextField
              className='txtBox'
              id="outlined-password-input"
              label="Password"
              type="Password"
              autoComplete="current-Password"
              variant="outlined"
            />
          </Grid>
          <Grid Item xs={6}>
            <TextField
              className='txtBox'
              id="outlined-password-input"
              label="Confirm Password"
              type="Password"
              autoComplete="current-Password"
              variant="outlined"
            />
          </Grid>
          <Grid Item xs={4} className='mb-40'>
            <DropdownList label='class' value={this.state.classType} itemsList={this.state.itemsList} handleChange={this.handleChange} />
          </Grid>
          <Grid Item xs={9} className='btnGrid'>
            <Button className='btnSignUp' onClick={() => {this.props.navigate('/home')}} variant="contained">REGISTER</Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}
export default RegisterComponent;
