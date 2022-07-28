import React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './HomeStyles.scss';
import TabPanel from './Tabpanel';

class HomeComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: ''
    }
  }

  handleChange = (event, newValue) => {
    this.setState({activeTab: newValue});
  };

  render() {
    return (
      <div className='container'>
        <Box className='username'>
          <Typography variant="h3" className='txtUserName' component="div" gutterBottom>Hello Jhon</Typography>
        </Box>
        <TabPanel {...this.props} />
      </div>
    )
  }

}
export default HomeComponent;