import "./Footer.css";

export const Footer = (props) => {
  return (
    <div className="Footer">
      <div className="Company" >
        <h2>О компании</h2>
        <p>Наша миссия – помочь людям изменить жизнь к лучшему!</p>
        <p>Мы — именно то место, где тебе помогут быстро и грамотно освоить разные области IT </p>
      </div>
      <div>
        <h2>Контакты:</h2>
        <div>
          <a className="A" href="tel:+74951234567">
            +7 (495) 123-45-67
          </a>
        </div>
        <a
          className="A"
          href="https://github.com/tatianaparkhanovich/lessons"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </div>
    </div>
  );
};
