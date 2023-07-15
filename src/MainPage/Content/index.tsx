/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import "./index.css";
import MovieCard from "./Card";
import { useEffect, useState } from "react";
import {imageApi} from "../../api";

type ContentProps = {
  data: any;
};

export default function Content({ data }: ContentProps) {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    if (data.data !== null) {
      let movieData = data.data.data;
      // 将movieData截断为5的倍数
      movieData = movieData.slice(0, movieData.length - (movieData.length % 5));
      
      setMovie(movieData);
    }
  }, [data]);

  return (
    <div>
      <div className="panel">
        <div className="panel-header">
          <div>正在热映</div>
          <div>全部</div>
        </div>
        <div className="panel-content">
          {movie !== null &&
            movie.map((item: any, index:number) => {
              return (
                <MovieCard
                  key={index}
                  title={item.movie_cn_name}
                  description={item.movie_detail || "暂无简介" }
                  image={imageApi + item.movie_picture }
                  id={item.movie_id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
