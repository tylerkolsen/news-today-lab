import { useEffect } from "react";
import Card from "../shared/Card/Card.jsx";
import Loading from "../shared/Loading/Loading.jsx";
import { requestArticlesMedium } from "../../reducers/mediumReducer.js";
import { useSelector, useDispatch } from "react-redux";

export default function Medium() {
  const loading = useSelector((state) => state.medium.loading);
  const articles = useSelector((state) => state.medium.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestArticlesMedium);
  }, []);

  const articleCards = articles.map((article) => (
    <Card key={article.id} article={article} />
  ));

  return (
    <div className="news-container">
      <img
        src="../../assets/mediumLogo.png"
        style={{ width: "250px" }}
        alt=""
      />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
