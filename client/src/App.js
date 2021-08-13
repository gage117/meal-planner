import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NavBar from './components/NavBar';
import PlannerTable from './components/PlannerTable';

function App() {
  return (
    <Container>
      <NavBar />
      <Grid>
        <PlannerTable />
      </Grid>
    </Container>
  );
}

export default App;
