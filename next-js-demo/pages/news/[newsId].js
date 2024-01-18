// our-domain.com/news/something-important
import {useRouter} from 'next/router';

function Detailpage() {
  // extract data from url
  const router= useRouter();
  console.log(router.query.newsId);

  // send a request to backend API
  // to fetch the news item with newsId

  return <h1>The Detail Page</h1>
}

export default Detailpage;