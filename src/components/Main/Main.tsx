import { IMain } from "../../types/types";
import CatCard from "../CatCard/CatCard";
import "./Main.scss";
import { useLocation } from "react-router-dom";

const Main = ({ listToRender, text }: IMain) => {
  const { pathname } = useLocation();
  return (
    <main className="main">
      <ul className="main__list">
        {listToRender.length !== 0
          ? listToRender.map((c) => {
              return (
                <li key={c.id!} className="main__item">
                  <CatCard {...c} />
                </li>
              );
            })
          : text}
      </ul>
      {pathname === "/" && (
        <p className="main__loading">... загружаем еще котиков ...</p>
      )}
    </main>
  );
};

export default Main;
