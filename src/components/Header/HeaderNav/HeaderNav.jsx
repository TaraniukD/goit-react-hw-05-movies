
import { PAGE_NAME } from '../../../router/paths';
import { NavLinkDiv } from './HeaderNav.styled';

export const HeaderNav = ({ isDesktop = true }) => {
  return (
    <div >
      <NavLinkDiv
        to={PAGE_NAME.homepage}
      >
        Home
      </NavLinkDiv>
     
      <NavLinkDiv
        to="/movies"
      >
        Movies
      </NavLinkDiv>
    </div>
  );
};