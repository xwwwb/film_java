import Header from "./Header";
import Carousel from "./Carousel";
import Content from "./Content";
import Rank from "./Rank";
import Footer from "./Footer";
import "./index.css";
import { useEffect, useState } from "react";
import apiUrl from "../api";
import Loading from "./Loading";

// 以下子组件 都用DIV包着 然后外层DIV给ID

export default function MainPage() {
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState({ loading: true, data: null });
  const getData = () => {
    // 发送请求
    const fetchUrl = apiUrl + "movie";
    const f = fetch(fetchUrl, {
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: "method=findAllMovies",
      method: "POST",
    });
    const result = f.then((r) => r.json());
    result
      .then((data) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        setData({ loading: false, data: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="MainPage">
      <Header />
      <Carousel />
      {data.loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div>
            <Content data={data} />
          </div>
          <div>
            <Rank data={data} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
