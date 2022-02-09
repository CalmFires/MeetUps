import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react/cjs/react.production.min";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title> React Meetups Details</title>
        <meta name="description" content="add new meetups" />
      </Head>
      <MeetupDetail
        description={props.meetupData.description}
        title={props.meetupData.title}
        address={props.meetupData.address}
        image={props.meetupData.image}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://calmfires:1.0Hellofriend.mov@cluster0.ytmtm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetups) => ({
      params: { meetupId: meetups._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://calmfires:1.0Hellofriend.mov@cluster0.ytmtm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  console.log(selectedMeetup);

  const meetupData = {
    id: selectedMeetup._id.toString(),
    title: selectedMeetup.data.title,
    image: selectedMeetup.data.image,
    address: selectedMeetup.data.address,
    description: selectedMeetup.data.description,
  };

  client.close();

  return {
    props: {
      meetupData,
    },
  };
}
export default MeetupDetails;
