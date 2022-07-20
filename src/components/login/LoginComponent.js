import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import './loginStyles.scss';

const welcomeLogo = require('../../assets/images/loginWelcome.png');

class LoginComponent extends React.PureComponent {
  render() {
    return (
      <Grid container>
        <Grid xs={5}>
          <div className='main'>
            <Box sx={{ width: '100%' }}>
              <Typography variant="h3" className='txtHeading1' component="div" gutterBottom>Hi, Good Morning</Typography>
            </Box>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '26ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className='txtBox'
                id="standard-email-input"
                label="Email"
                type="email"
                autoComplete="current-email"
                variant="filled"
              />
            </Box>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, mt: 4, width: '26ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className='txtBox'
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
            </Box>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <Button className='btnLogin' variant="contained">Login</Button>
              {/* <input className='txtBox' type="email" placeholder='Email' /> */}
              <nav>
                <Link href="/register" color="inherit" className='txtLink'>New user register here</Link>
              </nav>
            </Box>
          </div>
        </Grid>
        <Grid xs={7} className='leftSide'>
          <Box sx={{ width: '100%' }}>
            <Typography variant="h3" className='txtHeading' component="div" gutterBottom>Welcome to</Typography>
            <Typography variant="h3" className='txtHeading2' component="div" gutterBottom>Test Taking Platform</Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <img src={welcomeLogo} className="App-logo" alt='logo' />
          </Box>
        </Grid>
      </Grid>
    )
  }
}
export default LoginComponent;
