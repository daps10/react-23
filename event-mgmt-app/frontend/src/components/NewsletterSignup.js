import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
  const fetcher= useFetcher(); // this allow submit form without transitioning 
  const { data, state } = fetcher;
  
  // useEffect to perform while the data or state changed.
  useEffect(() => {
    if(state=== 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);
  
  return (
    <fetcher.Form 
      method="post" 
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;