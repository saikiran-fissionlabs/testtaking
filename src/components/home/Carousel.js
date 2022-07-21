import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import testNow from '../../assets/images/testNow.png';

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

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 2 }}>
      <div
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className='cards'
      >
        {cards.map((step, index) =>
          <Card sx={{ minWidth: 275, margin: '10px' }} key={index} className='card' >
            <CardContent className='cardContent'>
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
              <Box sx={{ width: '100%' }}>
                <img src={testNow} className="App-logo" alt='logo' />
              </Box>
            </CardActions>
          </Card>
        )}
        </div>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
