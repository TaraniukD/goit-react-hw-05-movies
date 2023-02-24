import { Link } from 'react-router-dom';
// import { Container } from '../components/Container/Container';
// import { useMouseContext } from '../context/mouseContext';
import { PAGE_NAME } from '../router/paths';

export const ErrorPage = () => {
//   const { mousePosition } = useMouseContext();
//   console.log(mousePosition);

  return (
    <div>
      <div>404 page not found</div>
      <Link to={PAGE_NAME.homepage}>Go to homepage</Link>
    </div>
  );
};

export default ErrorPage;
