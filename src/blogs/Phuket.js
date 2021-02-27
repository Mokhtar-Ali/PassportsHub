import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Me from '../pics/painted.png'
import PhuketMain from '../pics/Thailand/thailand-main.jpg'
import Phra from '../pics/Thailand/phra.jpg'
import PhiPhi from '../pics/Thailand/phi-phi.jpg'
import '../style/blog.css'


// import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vh',
    margin: '20px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Phuket() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="image" src={Me} className={classes.avatar} />
        }
        action={
          <IconButton aria-label="settings">
            <a href='/thailand'>Thailand</a>
          </IconButton>
        }
        title={<h4>Phuket</h4>}
        subheader="April 2016"
      />
      <CardMedia
        className={classes.media}
        image={PhuketMain}
        title="Thailand"
      /> 

      <CardContent>
        <Typography className='text' variant="body2" color="textSecondary" component="p">
        Anyone who has ever asked me where is your favorite vacation spot? I quickly answered " Thailand ".It is the only Country I've ever been that had everything I wanted on a vacation.People, Food, Beauty, Beaches, Animals, Diversity, Sports and Nightlife.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <a href='https://www.youtube.com/channel/UCJp0XZMq8jPdCcrfdTkLAKw' target='_blank' style={{color:'red'}}> <ion-icon name="logo-youtube"/></a>
          {/* <FavoriteIcon /> */}
        </IconButton>
        <IconButton aria-label="share">
          {/* <ShareIcon /> */}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h5>Blog</h5>
          <Typography paragraph className='text' >
          From the moment I landed, I was welcomed and greeted with beautiful smiles from everyone. So much positive energy in this place! Even the customs officers were smiling which never happened in any other country. <br />Sawadee "hello" in Thai with a little bow from every single person in Thailand. I decided to start the vacation with Phuket, the biggest island in Thailand 
          for one week and it was the best week of my life.  <br />
          <hr />
          I stayed in a hotel by Patong Beach where there are a varaity of good restaurants and nightlife. If you like Thai food you will be in heaven, the spices are rich and everything is fresh and everything is very affordable here. <br /> 
          Food carts in the streets were very tasty and healthy. <br /> 
          Phuket's main income is Tourism so people are very friendly and welcoming and it's safe everywhere. <br />
          You don't need to stress planning anything in Thailand, as everything could be arranged and booked through activity booths or you can arrange it through your hotel. <br /> 
          <hr />
          <img src={PhiPhi} className='image-in-blog' alt='Phi Phi island' />
          <hr />
          I have enjoyed different activities for a very reasonable price including: diving, scuba diving, taking a boat to James Bond Island and 4 other islands. Tigers Land, Elephant Land, KickBoxing fight and visiting Temples.<br /> 
          Make sure you don't miss any of these experiences as they were amazing! <br /> 
          Don't miss trying a Thai massage, they will break your bones but you will feel awesome after.
          It is the only Country I've ever been that had everything I wanted in a vacation.
          People, food, beauty, beaches, animals, diversity, sports.
          </Typography>
          <hr />
          <img src={Phra} className='image-in-blog' alt='Phra Temple' />
          <hr />

          <Typography paragraph className='text'>
            <h5 style={{textAlign:'center'}}>Overall</h5>
            Night life in Phuket is amazing.<br />
            Everything is affordable wherever you go.<br />
            Thailand is a very happy place and people have a lot of good qualities. <br />
            Best time to visit is between October and April as the weather is 80s or low 90s.<br />
            If you are to visit Bangkok try not to stay more than 3 days and check the Temples and the floating markets.  <br />
          </Typography>
          <Typography>

          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
