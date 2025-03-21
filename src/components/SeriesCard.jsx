import styles from "./Netflix.module.css";
import styled from "styled-components";
export const SeriesCard = ({ data }) => {
  const { name, id, img_url, rating, description, cast, genre, watch_url } =
    data;

  // const btn_style = {};

  // const ButtonRish = styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--heading-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  // });

  const ButtonRish = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: "var(--heading-color)";
    font-weight: bold;
    cursor: pointer;
  `;

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      <div className={styles[`card-content`]}>
        <h2>Name: {name}</h2>
        <h3>
          Rating:
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
          <ButtonRish rating={rating}>Watch Now</ButtonRish>
        </a>
      </div>
    </li>
  );
};
