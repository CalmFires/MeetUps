import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import next from "next";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://www.rheinmetall.com/media/editor_media/rheinmetallag/group/locationsworldwide/stage_locations_worldwide_keyvisual.png",
    address: "some location",
    description: "this is a first meet up",
  },
  {
    id: "m2",
    title: "SECOND meetup",
    image:
      "https://www.rheinmetall.com/media/editor_media/rheinmetallag/group/locationsworldwide/stage_locations_worldwide_keyvisual.png",
    address: "some location",
    description: "this is a second meet up",
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title> React Meetups</title>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://calmfires:1.0Hellofriend.mov@cluster0.ytmtm.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  console.log(meetups);

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.data.title,
        address: meetup.data.address,
        image: meetup.data.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 3600,
  };
}

export default HomePage;
