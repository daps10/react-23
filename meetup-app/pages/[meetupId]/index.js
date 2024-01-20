import MeetupDetail from '../../components/meetups/MeetupDetail';
 
function MeetupDetails() {
  return (
    <MeetupDetail 
      image= 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      title= 'First Meetup'
      address= 'Some Street 5, Some city' 
      description= 'This is a first meetup'
    />
  );
}

export default MeetupDetails;