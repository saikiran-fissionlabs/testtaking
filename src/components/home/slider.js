import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

// import LeftArrow from '../../assets/images/time.png';
// import RightArrow from '../../assets/images/marks.png';
// import qus from '../../assets/images/qus.png';
import './HomeStyles.scss';

class DemoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: ''
    }
  }
  handleClick = () => {
    this.props.navigate('/instrucations');
  }

  render() {
    return (
      <Carousel showIndicators={false} showThumbs={false} showStatus={false} className='Carousel'>
        {this.props.cards.map((step, index) =>
          <div>
            <Card sx={{ minWidth: 275, margin: '32px', padding: '22px' }} key={index} className='card' >
              <CardContent className='cardContent'>
                <Typography variant="h4" className='testName' color="text.secondary" gutterBottom>{step.label}</Typography>
                <Grid container className='grids'>
                  <Grid Item xs={3} className='grid'>
                    <img src={step.iconTime} className="imgIcons" alt='logo' />
                    <Typography sx={{ fontSize: 16, fontWeight: 700 }} color='#16642C' component="div">
                      {step.time}
                    </Typography>
                  </Grid>
                  <Grid Item xs={3} className='grid'>
                    <img src={step.iconMarks} className="imgIcons" alt='logo' />
                    <Typography sx={{ fontSize: 16, fontWeight: 700 }} color='#16642C'>
                      {step.marks}
                    </Typography>
                  </Grid>
                  <Grid Item xs={3} className='grid'>
                    <img src={step.iconQus} className="imgIcons" alt='logo' />
                    <Typography sx={{ fontSize: 16, fontWeight: 700 }} color="#16642C">
                      {step.qus}
                    </Typography>
                  </Grid>
                  <Grid Item xs={3} className='imgTestNow'>
                    <img onClick={this.handleClick} src={step.imgPath} className="testNowImg" alt='logo' />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, margin: '32px', padding: '22px' }} key={index} className='card' >
              <CardContent className='cardContent'>
                <Typography variant="h4" className='testName' color="text.secondary" gutterBottom>{step.label}</Typography>
                <Grid container className='grids'>
                  <Grid Item xs={3} className='grid'>
                    <img src={step.iconTime} className="imgIcons" alt='logo' />
                    <Typography sx={{ fontSize: 16, fontWeight: 700 }} color='#16642C' component="div">
                      {step.time}
                    </Typography>
                  </Grid>
                  <Grid Item xs={3} className='grid'>
                    <img src={step.iconMarks} className="imgIcons" alt='logo' />
                    <Typography sx={{ fontSize: 16, fontWeight: 700 }} color='#16642C'>
                      {step.marks}
                    </Typography>
                  </Grid>
                  <Grid Item xs={3} className='grid'>
                    <img src={step.iconQus} className="imgIcons" alt='logo' />
                    <Typography sx={{ fontSize: 16, fontWeight: 700 }} color="#16642C">
                      {step.qus}
                    </Typography>
                  </Grid>
                  <Grid Item xs={3} className='imgTestNow'>
                    <img onClick={this.handleClick} src={step.imgPath} className="testNowImg" alt='logo' />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, margin: '32px', padding: '22px' }} key={index} className='card' >
              <CardContent className='cardContent'>
                <Typography variant="h4" className='testName' color="text.secondary" gutterBottom>{step.label}</Typography>
                <Grid container className='grids'>
                  <Grid Item xs={3} className='grid'>
                    <img src={step.iconTime} className="imgIcons" alt='logo' />
                    <Typography sx={{ fontSize: 16, fontWeight: 700 }} color='#16642C' component="div">
                      {step.time}
                    </Typography>
                  </Grid>
                  <Grid Item xs={3} className='grid'>
                    <img src={step.iconMarks} className="imgIcons" alt='logo' />
                    <Typography sx={{ fontSize: 16, fontWeight: 700 }} color='#16642C'>
                      {step.marks}
                    </Typography>
                  </Grid>
                  <Grid Item xs={3} className='grid'>
                    <img src={step.iconQus} className="imgIcons" alt='logo' />
                    <Typography sx={{ fontSize: 16, fontWeight: 700 }} color="#16642C">
                      {step.qus}
                    </Typography>
                  </Grid>
                  <Grid Item xs={3} className='imgTestNow'>
                    <img onClick={this.handleClick} src={step.imgPath} className="testNowImg" alt='logo' />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </div>
        )}
      </Carousel>
    );
  }
};
export default DemoCarousel;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));