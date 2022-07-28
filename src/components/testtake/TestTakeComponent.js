import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import './styles.scss';
import Questions from '../../assets/questions.json';
import time from '../../assets/images/time.png';

class TestTakeComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      btnPrev: true,
      btnNext: false,
      isActive: -1,
      qusIndex: 0
    }
  }

  handleClick = () => {
    if (Questions.qus.length - 1 > this.state.qusIndex) {
      this.setState({ btnPrev: false, qusIndex: this.state.qusIndex + 1 });
    } else {
      this.setState({ btnNext: true });
    }
  };
  handleClickPrev = () => {
    if (0 < this.state.qusIndex) {
      this.setState({ btnNext: false, qusIndex: this.state.qusIndex - 1 });
    } else {
      this.setState({ btnPrev: true });
    }
  };
  handleSelect = (i) => {
    this.setState({ isActive: i });
  };

  render() {
    let { qusIndex, isActive } = this.state;
    return (
      <Grid container className='testBody'>
        <Grid xs={8}>
          <div className='testTest'>
            <Grid container className='head'>
              <Grid Item xs={6} className='txtTest'>
                <Typography variant="h1" component="div" gutterBottom>Test -1</Typography>
              </Grid>
              <Grid Item xs={6} className='btnLeft'>
                <Button className='btnSubmit' onClick={() => { this.props.navigate('/results') }} variant="contained">SUBMIT</Button>
              </Grid>
            </Grid>
            <Grid container className='mt10'>
              <Grid Item xs={4} className='txtQusNum'>
                <span className='numCircle' component="div" gutterBottom>02</span>
                <span className='txtSubHeadTest' component="div" gutterBottom>Single Answer Type</span>
              </Grid>
              <Grid Item xs={8} className='txt-rt'>
                <Checkbox className='checkbox' />
                <span className='txtSubHeadTest' component="div" gutterBottom>Mark for review</span>
              </Grid>
            </Grid>
            <Grid className='qusAns'>
              <Typography className='txtQus' component="div" gutterBottom>{Questions.qus[qusIndex].question}</Typography>
              <ol className='olOpts'>
                {Questions.qus[qusIndex].options.map((post, i) =>
                  <div className={isActive == i ? 'divOpts gradient-Active' : 'divOpts gradient'} key={i} onClick={() => this.handleSelect(i)}>
                    <li className='liOptions'>{post}</li>
                  </div>
                )}
              </ol>
            </Grid>
            <Grid container className='btngroup'>
              <Grid Item xs={8}>
                <Button className='btnsm' disabled={this.state.btnPrev} onClick={() => this.handleClickPrev()} variant="contained">Prev</Button>
              </Grid>
              <Grid Item xs={4} className='txtRigth'>
                <Button className='btnsm' disabled={this.state.btnNext} onClick={() => this.handleClick()} variant="contained">Next</Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid xs={4} className='testRight'>
          <Grid xs={12} className='leftHead'>
            <img src={time} alt='imgTime' />
            <span className='timmer'>15:30 m</span>
          </Grid>
          <Grid container className='leftHead'>
            <Grid xs={4} className=''>
              <span className='blue'>1</span>
              <span className='answered'>Answered</span>
            </Grid>
            <Grid xs={6} className=''>
              <span className='black'>14</span>
              <span className='notAnswered'>Not Answered</span>
            </Grid>
            <Grid xs={8} className='review'>
              <span className='brown'>0</span>
              <span className='answered'>Marked for review</span>
            </Grid>
          </Grid>
          <Grid container className='qus'>
            <Grid xs={12} className=''>
              <Typography variant="h3" component="div" gutterBottom>Questions</Typography>
            </Grid>
            <Grid xs={1} className='blue'>
              <span>1</span>
              </Grid>
            <Grid xs={1} className='pink'>
              <span className=''>2</span>
              </Grid>
            <Grid xs={1} className='black'>
              <span>3</span>
              </Grid>
            <Grid xs={1} className='black'>
              <span>4</span>
              </Grid>
            <Grid xs={1} className='black'>
              <span>5</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
export default TestTakeComponent;
