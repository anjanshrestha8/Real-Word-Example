/* eslint-disable react/prop-types */

import { FaHeart } from "react-icons/fa";

import "../assets/css/components/card.css";
import Clit from "./Clit";

function Card(props) {
  return (
    <>
      <hr />

      <div className="card-wrapper">
        <div className="profile-wrapper">
          <div className="details">
            <div className="profile-pic">
              <img src={props.image} alt="" />
            </div>
            <div>
              {" "}
              <h1>{props.username}</h1>
              <p>{props.date}</p>
            </div>
          </div>

          <div className="button-like">
            <button className="like">
              <FaHeart />
              {props.fav}
            </button>
          </div>
        </div>

        <br />

        <div className="article-wrapper">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
        <br />
        <div className="tag-section">
          <a>Read More..</a>
          <Clit />
          {/* {tags?.map((item, index) => {
            return <Clit key={index} tagName={item[0]} />;
          })} */}
        </div>
      </div>
    </>
  );
}
export default Card;
