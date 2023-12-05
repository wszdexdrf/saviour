import React from 'react';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: theme.spacing(4),
  },
centralArea: {
    width: '60%',
    minHeight: '100vh', // Assuming full page height
    backgroundColor: 'rgba(240, 240, 240, 0.8)', // Adjust the opacity as needed
    marginRight: theme.spacing(2), // Spacing between the central area and the floating frame
},
  floatingFrame: {
    width: 250,
    height: 250,
    backgroundColor: '#ccc', // Adjust as needed
    position: 'sticky',
    top: theme.spacing(4), // Adjust the distance from the top
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.centralArea}>
        {/* Your content for the central area goes here */}
        <Paper elevation={3}>
          {/* Example content */}
          <h1>Central Area</h1>
          <p>This is the main content area.</p>
        </Paper>
      </div>
      <div className={classes.floatingFrame}>
        {/* Your content for the floating frame goes here */}
        <Paper elevation={3}>
          {/* Example content */}
          <h2>Floating Frame</h2>
          <p>This frame is 250x250 pixels and positioned to the right of the central area.</p>
        </Paper>
      </div>
    </div>
  );
};

export default HomePage;
