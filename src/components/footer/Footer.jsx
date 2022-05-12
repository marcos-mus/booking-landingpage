import "./footer.scss";
import Banner from "../../assets/banner.avif";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src={Banner} alt="" />
      </div>
      <div className="footer__center">center</div>
      <div className="footer__right">
        <h3>Save your time </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          molestiae eos facere eligendi sint animi neque possimus a itaque,
          nulla voluptate atque, unde quod nostrum necessitatibus corporis
          blanditiis placeat facilis.
        </p>
      </div>
    </div>
  );
};

export default Footer;
