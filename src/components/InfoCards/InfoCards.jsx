import card from "./InfoCards.module.scss";

export const InfoCards = ({ title, paragraph, imageUrl }) => {
  return (
    <div className={card.infoCard}>
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <img src={imageUrl} alt={title} />
    </div>
  );
};
