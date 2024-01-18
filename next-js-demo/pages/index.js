// our-domain.com/

import { Fragment } from "react";
import Link from 'next/link';

function Homepage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great-framework">
            NextJS is a Great Framework
          </Link>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  ) 
}

export default Homepage;