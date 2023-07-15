/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import "./index.css";
import { useState, useEffect } from "react";
import RankItem from "./RankItem";
import api from "../../api";
import { imageApi } from "../../api";
type RankProps = {
  data: any;
};

function datefomate(value) {
  if (value == null || value == undefined) {
    return "";
  }
  let date = new Date(value);

  let Y = date.getFullYear(),
    m = date.getMonth() + 1,
    d = date.getDate(),
    H = date.getHours(),
    i = date.getMinutes(),
    s = date.getSeconds();
  return Y + "-" + m + "-" + d;
}

export default function Rank({ data }: RankProps) {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    if (data.data !== null) {
      let movieData = data.data.sort;
      setMovie(movieData);
    }
  }, [data]);

  if (movie !== null) {
    // 创建一个数组，用于存放除排名前三以外的
    let movieList: never[] = [];
    for (let i = 3; i < 10; i++) {
      movieList.push(movie[i]);
    }

    return (
      <div className="rank">
        <div className="rank-header">
          <div>正在热映</div>
        </div>
        <div className="rank-content">
          <RankItem
            data={{
              img: imageApi + movie[0].movie_picture,
              name: movie[0].movie_cn_name,
              score: movie[0].movie_score,
              time: "上映时间" + datefomate(movie[0].releaseDate),
              id: movie[0].movie_id,
            }}
            rank={1}
          />
          <div style={{ display: "flex", justifyContent: "space-between" ,"marginBottom":"10px"}}>
            <RankItem
              data={{
                img: imageApi + movie[1].movie_picture,
                name: movie[1].movie_cn_name,
                score: movie[1].movie_score,
                time: "上映时间" + datefomate(movie[1].releaseDate),
                id: movie[1].movie_id,
              }}
              rank={2}
            />
            <RankItem
              data={{
                img: imageApi + movie[2].movie_picture,
                name: movie[2].movie_cn_name,
                score: movie[2].movie_score,
                time: "上映时间" + datefomate(movie[2].releaseDate),
                id: movie[2].movie_id,
              }}
              rank={3}
            />
          </div>
          {movieList.map((item, index) => {
            return (
              <RankItem
                key={index}
                data={{
                  img: imageApi + item.movie_picture,
                  name: item.movie_cn_name,
                  score: item.movie_score,
                  time: "上映时间" + datefomate(item.releaseDate),
                  number:index+4,
                  id: item.movie_id,
                }}
                rank={index + 4}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
