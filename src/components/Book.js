
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

function Book() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                title="Learning Docker"
                subheader="Pethuru Raj, Jeeva S. Chelladhurai, Vinod Singh"
            />
            <CardMedia
                className={classes.media}
                image="https://itbook.store/img/books/9781784397937.png"
                title="Docker Image"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Docker is a next-generation platform for simplifying application containerization life-cycle. Docker allows you to create a robust and resilient environment in which you can generate portable, composable, scalable, and stable application containers.
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