import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';


function SwipeableTextMobileStepper(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const handleClick = () => {
    props.navigate('/instrucations');
  }

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 2 }}>
      <div
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className='cards'
      >
        
        {props.cards.map((step, index) =>
          <Card sx={{ minWidth: 275, margin: '32px', padding: '22px' }} key={index} className='card' >
            <CardContent className='cardContent'>
              <Typography variant="h4" color="text.secondary" gutterBottom>
                {step.label}
              </Typography>
              <Grid container className='grids'>
                <Grid Item xs={3} className='grid'>
                  <img src={step.iconTime} className="App-logo" alt='logo' />
                  <Typography sx={{ fontSize: 16, fontWeight: 700 }} color='#16642C' component="div">
                    {step.time}
                  </Typography>
                </Grid>
                <Grid Item xs={3} className='grid'>
                  <img src={step.iconMarks} className="App-logo" alt='logo' />
                  <Typography sx={{ fontSize: 16, fontWeight: 700 }} color='#16642C'>
                    {step.marks}
                  </Typography>
                </Grid>
                <Grid Item xs={3} className='grid'>
                  <img src={step.iconQus} className="App-logo" alt='logo' />
                  <Typography sx={{ fontSize: 16, fontWeight: 700 }} color="#16642C">
                    {step.qus}
                  </Typography>
                </Grid>
                <Grid Item xs={2}>
                  <img onClick={handleClick}src={step.imgPath} className="testNowImg" alt='logo' />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        )}
      </div>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
