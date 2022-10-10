import CardStyle from "../scss/card.module.scss";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className={CardStyle.container}>
      {data.map((item) => {
        const { id, name, job, comment, img } = item;
        return (
          <div key={id} className={CardStyle.card}>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt="img" />
            <div className={CardStyle.buttons}>
              <button className={CardStyle["buttons--small"]}>Small</button>
              <button className={CardStyle["buttons--large"]}>Large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
