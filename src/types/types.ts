export interface ICat {
  breeds: [];
  categories: [];
  height: number;
  id: string;
  url: string;
  wigth: number;
  isLiked?: boolean;
}
export interface ICatsSlice {
  allCats: ICat[];
  savedCats: ICat[];
  switchBtnLike: boolean;
  currentPage: number;
  fetching: boolean;
  isLoading: boolean;
}

export interface IMain {
  listToRender: ICat[];
  text?: string;
}
