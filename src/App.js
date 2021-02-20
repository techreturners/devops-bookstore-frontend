import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Book from './components/Book';

function App() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} style={{textAlign: "center"}}>
          <Typography variant="h3" gutterBottom>
            DevOps Bookstore
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Book />
        </Grid>
        <Grid item xs={12} md={6}>
          <Book />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
