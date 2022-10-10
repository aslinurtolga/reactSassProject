import Button from "../button/Button";
// import "./Card.css";
import CardStyle from "./card.module.css";

const Card = ({ language, btn, img }) => {
  //   console.log(props);
  //   const {language, btn, img} = props; //! destr.
  return (
    <div>
      <h1 className={CardStyle["title"]}>{language}</h1>
      <img className={CardStyle["images"]} src={img} alt="img" />
      <Button btn={btn} />
    </div>
  );
};

export default Card;
