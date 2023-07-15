import { Card } from "antd";
import api from "../../api";
const { Meta } = Card;

type MovieCardProp = {
  title: string;
  description: string;
  image: string;
  id:number
};

export default function MovieCard(props: MovieCardProp) {
  const { title, description, image } = props;
  return (
    <Card
      style={{ width: 160,margin:'10px 0' }}
      cover={
        <img
          alt="cover"
            style={{ width: 160, height: 200, objectFit: "cover" }}
          src={image}
        />
      }
      bordered={false}
      hoverable
      onClick={()=>{
        window.location.href = api + "jsp/movieDetail.jsp?movie_id="+props.id;
      }}
      actions={[<div className="buyTickets" onClick={(e)=>{
        e.stopPropagation();
        window.location.href = api+"jsp/buyTickets.jsp?movie_id="+props.id;
      }}  >购票</div>]}
    >
      <Meta title={title} description={description} />
    </Card>
  );
}