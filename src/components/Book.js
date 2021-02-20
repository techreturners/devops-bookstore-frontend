
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';


const useStyles = makeStyles(() => ({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
}));

function Book({bookTitle, bookAuthors, bookDescription, bookImage}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                title={bookTitle}
                subheader={bookAuthors}
            />
            <CardMedia
                className={classes.media}
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