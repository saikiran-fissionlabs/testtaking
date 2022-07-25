import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import './styles.scss';
import Arrow from '../../assets/images/Arrow.png';
import BigMarks from '../../assets/images/bigMarks.png';

class TestTakeComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      classType: '',
      itemsList: ['class', 'class0', 'class1', 'class2']
    }
  }

  handleChange = (event) => {
    this.setState({ classType: event.target.value });
  };

  render() {
    return (
      <div className='testBody'>
        <Grid container className=''>
          <Grid Item xs={6} className=''>
            <Typography variant="h1" className='txtTest' component="div" gutterBottom>Test -1</Typography>
          </Grid>
          <Grid Item xs={6} className='imgMarks'>
            <Button className='btnStart' onClick={() => { this.props.navigate('/submit') }} variant="contained">SUBMIT</Button>
          </Grid>
        </Grid>
        <hr />
        <Grid>
        <Grid Item xs={12} className='inline'>
          <Typography className='numCircle' component="div" gutterBottom>02</Typography>
          <Typography className='txtSubHeadIns' component="div" gutterBottom>Single Answer Type</Typography>
        </Grid>
        <Grid Item xs={8} className='mark'>
          <Checkbox className='checkbox' />
          <Typography className='txtSubHeadIns' component="div" gutterBottom>Mark for review</Typography>
        </Grid>
          {/* <Box sx={{ width: '100%', textAlign: 'left' }}>
          </Box> */}
          <Box sx={{ width: '100%' }}>
            <Typography className='txtSubIns' component="div" gutterBottom>Lorem ipsum it Lorem ipsum Lorem ipsum it Lorem ipsum Lorem ipsum it</Typography>
          </Box>
          <Typography className='txtSubIns' component="div" gutterBottom>a. Lorem ipsum</Typography>
          <Typography className='txtSubIns' component="div" gutterBottom>b. Lorem ipsum it</Typography>
          <Typography className='txtSubIns' component="div" gutterBottom>c. Lorem ipsum</Typography>
        </Grid>
        <hr className='hr'  />
        <Grid container className='pl'>
        <Grid Item xs={8} className=''>
          <Button className='btnStart' onClick={() => { this.props.navigate('/prev') }} variant="contained">Prev</Button>
        </Grid>
        <Grid Item xs={4} className='txtRigth'>
          <Button className='btnStart' onClick={() => { this.props.navigate('/next') }} variant="contained">Next</Button>
        </Grid>
        </Grid>
      </div>
    )
  }
}
export default TestTakeComponent;
