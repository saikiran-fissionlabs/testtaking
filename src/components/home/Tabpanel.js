import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './HomeStyles.scss';
import Carousel from './Carousel';

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs'>
          <Tab label="All Tests" {...a11yProps(0)} className={value === 0 ?'activeTab' : 'tab'} />
          <Tab label="JEE Mains" {...a11yProps(1)} className={value === 1 ?'activeTab' : 'tab'} />
          <Tab label="Eamcet" {...a11yProps(2)} className={value === 2 ?'activeTab' : 'tab'} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className='tabPanel'>
        <strong>JEE Mains</strong><br/>
        <Carousel />
        <strong>EAMCET</strong>
      </TabPanel>
      <TabPanel value={value} index={1} className='tabPanel'>
        <strong>JEE Mains</strong>
      </TabPanel>
      <TabPanel value={value} index={2} className='tabPanel'>
        <strong>EAMCET</strong>
      </TabPanel>
    </Box>
  );
}
