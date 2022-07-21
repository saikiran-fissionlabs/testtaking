import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

import testNow from '../../assets/images/testNow.png'
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );
const cards = [
  {
    label: 'Test -1',
    time: '30 mins',
    marks: '150 M',
    qus: '30 Q',
    imgPath: ''
  },
  {
    label: 'Test -2',
    time: '1:20 hr',
    marks: '160 M',
    qus: '40 Q',
    imgPath: ''
  },
  {
    label: 'Test -3',
    time: '30 mins',
    marks: '150 M',
    qus: '30 Q',
    imgPath: ''
  }
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = cards.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      <div
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {/* {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))} */}
        {cards.map((step, index) =>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h4" color="text.secondary" gutterBottom>
                {step.label}
              </Typography>
              <Typography sx={{ fontSize: 16, fontWeight: 700 }} component="div">
                {step.time}
              </Typography>
              <Typography sx={{ fontSize: 16, fontWeight: 700 }} color="text.sucess">
                {step.marks}
              </Typography>
              <Typography variant="body2">
                {step.qus}
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">TEST NOW</Button> */}
              <Box sx={{ width: '100%' }}>
                <img src={testNow} className="App-logo" alt='logo' />
              </Box>
            </CardActions>
          </Card>
        )}
        </div>
      {/* </AutoPlaySwipeableViews> */}
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
    </Box>
  );
}

export default SwipeableTextMobileStepper;
