import "./Section.css";

export const Section = (props) => (
    <div className="section">
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    <button className="button">{props.button}</button>
    </div>
);
