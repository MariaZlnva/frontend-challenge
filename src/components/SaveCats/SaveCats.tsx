import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { addSavedCats } from "../../redux/CatsSlice";
import Main from "../Main/Main";

const SaveCats = () => {
  const dispatch = useAppDispatch();
  const savedCats = useAppSelector((state) => state.cats.savedCats);
  const savedCatsLS = localStorage.getItem("savedCatsLS");

  useEffect(() => {
    if (savedCatsLS) {
      dispatch(addSavedCats(JSON.parse(savedCatsLS)));
    }
  }, []);
  return (
    <Main
      listToRender={savedCats}
      text={"..Ooй, тут пока ни одного любимчика :("}
    />
  );
};

export default SaveCats;
