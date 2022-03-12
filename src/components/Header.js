import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
        </div>
        <Link to="/">
        <div className="logo">
          <img src="https://s3.eu-west-3.amazonaws.com/sport-finder.image/images/cache/search_card/center/sport-finder-logo.png" alt="Nike" width="200" />
        </div>
      </Link>
    <div class="flexsearch">
        <div class="flexsearch--wrapper">
          <form class="flexsearch--form" action="" method="post">
            <div class="flexsearch--input-wrapper">
              <input class="flexsearch--input" type="search" placeholder="Buscar producto"/>
            </div>
            <input class="flexsearch--submit" type="submit" value="&#10140;"/>
          </form>
        </div>
    </div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Sobre nosotros</Link>
        </li>
      </ul>
    
    </header>
  );
};
