import "./CatCard.scss";
import { ICat } from "../../types/types";
import { useAppDispatch } from "../../redux/store";
import { toggleLike } from "../../redux/CatsSlice";

const CatCard = (cat: ICat) => {
  const dispatch = useAppDispatch();
  const handleLike = () => {
    dispatch(toggleLike(cat));
  };
  return (
    <div className="catCard">
      <img className="catCard__img" src={cat.url} alt="Изображение кота" />
      <button
        className={
          cat.isLiked === true
            ? "catCard__like catCard__like_liked"
            : "catCard__like catCard__like_dislike"
        }
        type="button"
        onClick={handleLike}
      />
    </div>
  );
};

export default CatCard;
