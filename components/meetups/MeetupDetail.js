import { Fragment } from "react/cjs/react.production.min";

import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.details}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.address}</p>
    </section>
  );
}

export default MeetupDetail;
