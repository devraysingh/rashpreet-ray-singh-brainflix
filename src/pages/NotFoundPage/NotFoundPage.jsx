import { Link } from 'react-router-dom';
import "./NotFoundPage.scss"

function NotFoundPage() {
  //NotFoundPage JSX
  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title">Error: 404</h1>
      <p className="not-found-page__text">Can't find what you're looking for, sorry!</p>
      <p className="not-found-page__link">
        <Link className="not-found-page__link" to="/">Go to Home Page</Link>
      </p>
    </div>
  );
}
export default NotFoundPage;