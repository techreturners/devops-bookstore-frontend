
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

function Book({bookTitle, bookAuthors, bookDescription, bookImage}) {
    return (
        <Card>
            <CardHeader
                title={bookTitle}
                subheader={bookAuthors}
            />
            <CardMedia
                sx={{ height: 320 }}
                image={bookImage}
                title={bookTitle}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {bookDescription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Book;