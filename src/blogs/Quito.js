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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Me from '../pics/painted.png'
import QuitoMain from '../pics/Ecuador/quito-main.jpg'
import Center from '../pics/Ecuador/center.jpg'
import LandScape from '../pics/Ecuador/quito-landscape.jpg'
import City from '../pics/Ecuador/quito-city.jpg'



import '../style/blog.css'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
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

export default function Quito() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={Me} className={classes.avatar} />
        }
        action={
          <IconButton aria-label="settings">
            <a href='/ecuador'>Ecuador</a>
          </IconButton>
        }
        title={<h4>Quito</h4>}
        subheader="August 2017"
      />
      <CardMedia
        className={classes.media}
        image={QuitoMain}
        title="Quito"
      /> 

      <CardContent>
        <Typography className='text' variant="body2" color="textSecondary" component="p">
          9350 feet above sea level, where "Quito" the capital of Ecuador is located. Where the Spanish claimed they discovered Ecuador in the 16th century, There is evidence of life that existed 10000 years ago in Ecuador! <br />
          From my hotel window and eveywhere you go in Quito, Your view will always have volcanos and beautiful blue skies.
           
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon /> */}
          <a href='https://www.youtube.com/watch?v=CGo6tnSD5Bg&t=1007s' target='_blank' style={{color:'red'}}> <ion-icon name="logo-youtube"/></a>
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
            As far as I know, Ecuadorian people are humble and hardworking, very serious but very welcoming. <br />
            This judgment is based on living among them in the USA.
            The plan is to stay 2 weeks in Ecuador. 1 week in Quito and another in Guayaquil.
            Around 10 pm we landed in Quito Airport, in a city that is 9350 ft above sea level. <br />
            Quito is a ghost town on a Sunday night. 
            Our driver who is our Airbnb host, literally drove us all over town to look for a restaurant or a deli for a whole hour to eat something.
            At the end, we found one, the only 24/hour restaurant in the city.
            And it was worth it as the food was delicious. Tasted like homemade 
            Temperature is 50 degrees in the night. Cold enough to wear a jacket in August.
            
          </Typography>
          <hr />
          <img src={LandScape} className='image-in-blog' alt='' />
          <hr />
          <Typography paragraph className='text'>

          </Typography>

          <Typography paragraph className='text' >
            Next day, its 10 am we head out for an Ecuadorian breakfast. Walking through the streets of Quito was pleasant as the streets are beautiful and clean while roads are full of hills so it's also a sport. <br />
            Breakfast in Ecuador was very delicious as I spent 2 weeks eating the same thing, Humita, an Ecuadorian dish of mashed corn and cheese covered with corn Leafs.
            The food is very natural here they depend on corn, flower, banana, cheese, and rice in almost every meal.
            Everyone is humble and sweet. greeting each other 'Buenos dias'. Everyone lives in peace here. 
            People in Quito dress up nice even if they are going to the supermarket, even though a lot of them are poor. But they are hard working.
            They are handsome and strict with traditions as they are family oriented and religious.
            
          </Typography>
          <hr />
          <img src={City} className='image-in-blog' alt='' />
          <hr />

          <Typography paragraph className='text' >
            Then we head to the Middle of the Earth. One hour Uber ride, where the sun is staring at you, because of the cool Temperature you may not feel it, but becareful not to get a sun strike.
            There is a museum that shows the process of discovering the equator and how they build the structure to represent it. 
          </Typography>
          <hr />
          <img src={Center} className='image-in-blog' alt='' />
          <hr />

          <Typography paragraph className='text'>
            <h5 style={{textAlign:'center'}}>Tips</h5>
            Egypt has 4 seasons <br />
            Use Uber for Transportation.<br />
            Keep a light jacket on you all the time. 
            Don't show too much shiny things in crowded areas. <br />
            You'll need to check the weather before going and each part. <br />
            Egypt is very affordable But you'll need cash in some parts. <br />
            Couchsurfing is Important Everywhere and very helpful in Egypt. <br />
            one of the Biggest Malls in the world is called City Stars in Cairo <br />
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
