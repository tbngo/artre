import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  cardContent: {
    paddingTop: "50px",
    flexGrow: 1,
  },
}));

const Card = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img src={props.image} alt="Headline" className={classes.image} />
      <Typography className={classes.cardContent} paragraph="true" variant="h5">
        {props.text}
      </Typography>
    </div>
  );
};

export default Card;
