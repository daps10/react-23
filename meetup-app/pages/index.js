import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: 'Some address 5, 12345 some city',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: 'Some address 6, 12345ds vecod city',
    description: 'This is a second meetup!'
  }
];

function Homepage(props) {
  return (
    <MeetupList meetups={ props.meetups }/>
  )
}

// getStaticProps 
export async function getStaticProps() {
  // fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }; // always need to return object
}

// getserverside props
// export async function getServerSideProps(context) {
//   const req= context.req;
//   const res= context.res;

//   // fetch data from API

//   return {
//     props: DUMMY_MEETUPS
//   }
// } 

export default Homepage;