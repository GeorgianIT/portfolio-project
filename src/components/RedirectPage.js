import { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    window.location.href('https://georgianit.github.io/coffee-shop/');
  }, [])

  return <div>
    <h3>Redirecting...</h3>
  </div>
}
export default RedirectPage