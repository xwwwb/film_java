import "./rank_item.css";
import api from "../../api";
type RankItemProp = {
  data: {
    img: string;
    name: string;
    time: string;
    score: string;
    number?: number;
    id: number;
  };
  rank: number; // 排名
};

export default function RankItem(props: RankItemProp) {
  if (props.rank === 1) {
    return (
      <div className="rank_1" onClick={()=>{
        window.location.href = api + "jsp/buyTickets.jsp?movie_id="+props.data.id;
      }} >
        <img
          src={props.data.img}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            border: "none",
          }}
          alt=""
        />
        <div>
          <div>{props.data.name}</div>
          <div>{props.data.time}</div>
          <div>{props.data.score} 分</div>
        </div>
      </div>
    );
  } else if (props.rank === 2) {
    return (
      <div className="rank_2" onClick={()=>{
        window.location.href = api + "jsp/buyTickets.jsp?movie_id="+props.data.id;
      }} >
        <div style={{ height: "70%" }}>
          <img
            src={props.data.img}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              border: "none",
            }}
            alt=""
          />
        </div>
        <div>
          <div>{props.data.name}</div>
          <div>{props.data.score} 分</div>
        </div>
      </div>
    );
  } else if (props.rank === 3) {
    return (
      <div className="rank_3" onClick={()=>{
        window.location.href = api + "jsp/buyTickets.jsp?movie_id="+props.data.id;
      }} >
        <div style={{ height: "70%" }}>
          <img
            src={props.data.img}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              border: "none",
            }}
            alt=""
          />
        </div>
        <div>
          <div>{props.data.name}</div>
          <div>{props.data.score} 分</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="rank_4" onClick={()=>{
        window.location.href = api + "jsp/buyTickets.jsp?movie_id="+props.data.id;
      }} >
        <div>
          <div>{props.data.number}</div>
          <div>{props.data.name}</div>
        </div>
        <div>{props.data.score} 分</div>
      </div>
    );
  }
}
