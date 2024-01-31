import { useEffect } from "react";
import { ICat } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getCats, setFetching } from "../../redux/CatsSlice";
import Main from "../Main/Main";

const Cats = () => {
  const dispatch = useAppDispatch();
  const allCats = useAppSelector((state) => state.cats.allCats);
  const switchBtnLike = useAppSelector((state) => state.cats.switchBtnLike);
  const fetching = useAppSelector((state) => state.cats.fetching);
  const currentPage = useAppSelector((state) => state.cats.currentPage);
  const savedCatsLS: ICat[] = JSON.parse(localStorage.getItem("savedCatsLS")!);

  useEffect(() => {
    if (fetching) {
      dispatch(getCats(currentPage));
    }
  }, [switchBtnLike, fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (): void => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const innerHeight = window.innerHeight;
    if (scrollHeight - (innerHeight + scrollTop) < 500) {
      dispatch(setFetching());
    }
  };
  const findLiked = allCats.map((c) => {
    if (savedCatsLS && savedCatsLS.length !== 0) {
      const found = savedCatsLS.find((s) => s.id === c.id);
      if (found) {
        return { ...c, isLiked: true };
      }
      return c;
    } else return c;
  });

  const listToRender =
    savedCatsLS && savedCatsLS.length !== 0 ? findLiked : allCats;

  return <Main listToRender={listToRender} />;
};

export default Cats;
