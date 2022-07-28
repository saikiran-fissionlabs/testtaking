import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import './styles.scss';
import Arrow from '../../assets/images/Arrow.png';
import BigMarks from '../../assets/images/bigMarks.png';

class InstrucationsComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    }
  }

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <Grid className='main'>
        <Grid container className=''>
          <Grid Item xs={1}>
            <a href=''><img src={Arrow} onClick={() => { this.props.navigate('/home') }} className="backArrow" alt='logo' /></a>
          </Grid>
          <Grid Item xs={3} className=''>
            <Typography variant="h3" className='' component="div" gutterBottom>Test -1</Typography>
            <Box sx={{ width: '100%' }}>
              <Typography className='txtTestIns' component="div" gutterBottom>Test Type: JEE Mains</Typography>
              <Typography className='txtTestIns' component="div" gutterBottom>Marks: 150 M</Typography>
            </Box>
          </Grid>
          <Grid Item xs={2} className='col3'>
            <Box sx={{ width: '100%' }}>
              <Typography className='txtTestIns' component="div" gutterBottom>Duration: 30 min</Typography>
              <Typography className='txtTestIns' component="div" gutterBottom> Questions: 30</Typography>
            </Box>
          </Grid>
          <Grid Item xs={6} className='imgMarks'>
              <img src={BigMarks} className="" alt='logo' />
          </Grid>
        </Grid>
        <hr />
        <Grid>
          <Typography className='txtSubHeadIns' component="div" gutterBottom>Instrucations</Typography>
          {/* <Box sx={{ width: '100%', textAlign: 'left' }}>
          </Box> */}
          <Box sx={{ width: '100%' }}>
            <Typography className='txtSubIns' component="div" gutterBottom>Lorem ipsum it</Typography>
            <Typography className='txtSubIns' component="div" gutterBottom>Lorem ipsum</Typography>
            <Typography className='txtSubIns' component="div" gutterBottom>Lorem ipsum it</Typography>
            <Typography className='txtSubIns' component="div" gutterBottom>Lorem ipsum</Typography>
            <Typography className='txtSubIns' component="div" gutterBottom>Lorem ipsum it</Typography>
          </Box>
        </Grid>
        <hr className='hr'  />
        <Grid container className='pl'>
          <Checkbox className='checkbox' onChange={this.handleChange} />
        <Grid Item xs={7} className=''>
          <Typography variant="h6" className='txtTC' component="div" gutterBottom>I accept to the terms and conditions</Typography>
          </Grid>
        <Grid Item xs={4} className='txtRigth'>
          <Button className='btnStart' disabled={this.state.checked} onClick={() => { this.props.navigate('/test') }} variant="contained">Start Test</Button>
        </Grid>
        </Grid>
      </Grid>
    )
  }
}
export default InstrucationsComponent;
