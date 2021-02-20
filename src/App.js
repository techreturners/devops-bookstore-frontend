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
          <Book bookTitle="Learning Docker" 
                bookImage="https://itbook.store/img/books/9781784397937.png" 
                bookDescription="Docker is a next-generation platform for simplifying application containerization life-cycle. Docker allows you to create a robust and resilient environment in which you can generate portable, composable, scalable, and stable application containers."
                bookAuthors="Pethuru Raj, Jeeva S. Chelladhurai, Vinod Singh"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Book bookTitle="Kubernetes Best Practices" 
                bookImage="https://itbook.store/img/books/9781492056478.png" 
                bookDescription="In this practical guide, four Kubernetes professionals with deep experience in distributed systems, enterprise application development, and open source will guide you through the process of building applications with container orchestration."
                bookAuthors="Brendan Burns, Eddie Villalba"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
