import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      <h1>Oops</h1>
      <p>Something went wrong.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div>
        <Link to="/">
          <span>Back to homepage</span>
        </Link>
      </div>
    </div>
  );
}
