import './App.css';
import {Container,AppBar,Typography,Grid,Grow} from '@material-ui/core';
import ShowStudents from './components/showStudent/showStudent';
import CreateStudent from './components/createStudent/createStudent';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Students Management
        </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <ShowStudents/>
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <CreateStudent/>
                </AppBar>
              </Grid>
            </Grid> 
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
