import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import './styles.scss';
import '../../styles/CommonStyles.scss';
import marksImage from '../../assets/images/bigMarks.png';
import backArrowImage from '../../assets/images/Arrow.png';

class ResultsComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleClick = () => {

  };

  render() {
    return (
      <Grid item xs={12} xl={12} lg={12} className='wrapper home result'>
        <Grid container className='' direction='row' align='center' justifyContent='center'  >
          <Grid item xs={12} xl={12} lg={12}>
            <Grid item className='test-header-section' >
              <Grid container direction='row' >
                <Grid xs={12} xl={12} lg={12} >
                  <Grid container direction='row' className='card-title'>
                    <Grid xs={9} xl={9} lg={9}>
                      <Grid container direction='row'>
                        <Typography variant='h4' className='name-text'>Score Card</Typography>
                      </Grid>
                      <Grid container direction='row' className='sub-instructions'>
                        <Grid xs={6} xl={6} lg={6} >
                          <Grid container>
                            <Grid item>
                              <Typography variant='body' gutterBottom={true} className='subInstructionText'>Test Type: JEE Mains</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid xs={6} xl={6} lg={6} >
                          <Grid container>
                            <Grid item>
                              <Typography variant='body' gutterBottom={true} className='subInstructionText' >Duration: 30 min</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid xs={6} xl={6} lg={6} >
                          <Grid container>
                            <Grid item>
                              <Typography variant='body' gutterBottom={true} className='subInstructionText' >Marks: 150</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid xs={6} xl={6} lg={6} >
                          <Grid container>
                            <Grid item>
                              <Typography variant='body' gutterBottom={true} className='subInstructionText' >Questions: 30</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid xs={3} xl={3} lg={3}>
                      <Grid container direction='column' alignItems='flex-end' justifyContent='flex-end' style={{ paddingRight: 40 }}>
                        <Grid item>
                          <img src={marksImage} className='marksImage' />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} xl={12} lg={12}>
            <Grid container className='instructions-body1' direction='column' justifyContent='flex-start' alignItems='flex-start' style={{ paddingLeft: 70 }}>
              <Grid item>
                <Typography variant='h6' className='instructionsHeading' gutterBottom>
                  Your Score: 120 M
                </Typography>
              </Grid>
              <Grid container direction='row'>
                <Grid xs={12} xl={3} lg={3}>
                  <Typography variant='body1' align='left' className='textDark' gutterBottom>
                    correct: <span className='correct'>23</span>
                  </Typography>
                </Grid>
                <Grid xs={3} xl={3} lg={3}>
                  <Typography variant='body1' align='left' className='textDark' gutterBottom>
                    wrong: <span className='wrong'>23</span>
                  </Typography>
                </Grid>
                <Grid xs={3} xl={3} lg={3}>
                  <Typography variant='body1' align='left' className='textDark' gutterBottom>
                    Unattempted: <span className='missed'>23</span>
                  </Typography>
                </Grid>
                <Grid xs={12} xl={4} lg={4}>
                  <Typography variant='body1' align='left' className='textDark' gutterBottom>
                    Time Spent: <span className='spTime'>22:15 min</span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* body end */}
          <Grid item xs={12} xl={12} lg={12}>
            <Grid container className='instructions-footer' direction='row' justifyContent='flex-start' alignItems='flex-start' style={{ paddingLeft: 70 }}>
              <Grid container direction='row'>
                <Grid item xs={12} xl={12} lg={12}>
                  <Button onClick={()=> {this.props.navigate('/home')}} size="big" variant="contained" className='goToHome' style={{ height: 36, justifyContent: 'center', marginTop: 23 }}>Go To Home</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
export default ResultsComponent;
