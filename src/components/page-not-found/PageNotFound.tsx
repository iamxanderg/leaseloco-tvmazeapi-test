import { useNavigate } from 'react-router-dom';
import './styles.scss';

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="page-not-found">
      <h1>Sorry, page not found...</h1>
      <button id="go-back-btn" aria-label="Go Back" onClick={() => navigate('/')} className="goback">
        <span>Click here to go back to the Dashboard page</span>
      </button>
    </div>
  );
}
