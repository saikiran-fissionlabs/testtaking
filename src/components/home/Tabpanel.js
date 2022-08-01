import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './HomeStyles.scss';
import DemoCarousel from './slider';
import Carousel from './Carousel';
import testNow from '../../assets/images/testNow.png';
import time from '../../assets/images/time.png';
import marks from '../../assets/images/marks.png';
import qus from '../../assets/images/qus.png';

const cards = [
  {
    label: 'Test -1',
    time: '30 min',
    marks: '150 M',
    qus: '30 Q',
    imgPath: testNow,
    iconTime: time,
    iconMarks: marks,
    iconQus: qus
  },
  {
    label: 'Test -2',
    time: '1:20 hr',
    marks: '160 M',
    qus: '40 Q',
    imgPath: testNow,
    iconTime: time,
    iconMarks: marks,
    iconQus: qus
  },
  {
    label: 'Test -3',
    time: '30 min',
    marks: '150 M',
    qus: '30 Q',
    imgPath: testNow,
    iconTime: time,
    iconMarks: marks,
    iconQus: qus
  }
];
const cardOne = [
  {
    label: 'EAM -1',
    time: '15 min',
    marks: '30 M',
    qus: '10 Q',
    imgPath: testNow,
    iconTime: time,
    iconMarks: marks,
    iconQus: qus
  }
];
const jeeMains = [
  {
    label: 'Test -1',
    time: '30 min',
    marks: '150 M',
    qus: '30 Q',
    imgPath: testNow,
    iconTime: time,
    iconMarks: marks,
    iconQus: qus
  },
  {
    label: 'Test -2',
    time: '1:20 hr',
    marks: '160 M',
    qus: '40 Q',
    imgPath: testNow,
    iconTime: time,
    iconMarks: marks,
    iconQus: qus
  },
  {
    label: 'Test -3',
    time: '30 min',
    marks: '150 M',
    qus: '30 Q',
    imgPath: testNow,
    iconTime: time,
    iconMarks: marks,
    iconQus: qus
  },
  {
    label: 'Test -4',
    time: '30 min',
    marks: '150 M',
    qus: '30 Q',
    imgPath: testNow,
    iconTime: time,
    iconMarks: marks,
    iconQus: qus
  }
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs'>
          <Tab label="All Tests" {...a11yProps(0)} className={value === 0 ? 'activeTab' : 'tab'} />
          <Tab label="JEE Mains" {...a11yProps(1)} className={value === 1 ? 'activeTab' : 'tab'} />
          <Tab label="Eamcet" {...a11yProps(2)} className={value === 2 ? 'activeTab' : 'tab'} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className='tabPanel'>
        <strong className='tabSubTitle'>JEE Mains</strong>
        <DemoCarousel cards={cards} {...props} />
        <strong className='tabSubTitle'>EAMCET</strong>
        <Carousel cards={cardOne} {...props} />
      </TabPanel>
      <TabPanel value={value} index={1} className='tabPanel'>
        <strong>JEE Mains</strong>
        <Carousel cards={jeeMains} className='tabCarousel' {...props} />
      </TabPanel>
      <TabPanel value={value} index={2} className='tabPanel'>
        <strong>EAMCET</strong>
        <Carousel cards={cardOne} {...props} />
      </TabPanel>
    </Box>
  );
}
