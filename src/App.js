import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Book from './components/Book';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {

  const [data, setData] = useState({ books: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_BOOKS_API_ENDPOINT}/books`,
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);


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
        {
          data.books.map(book => (
            <Grid item xs={12} md={6} key={book.bookTitle}>
              <Book bookTitle={book.bookTitle}
                  bookImage={book.bookImage}
                  bookDescription={book.bookDescription}
                  bookAuthors={book.bookAuthors}
              />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default App;
