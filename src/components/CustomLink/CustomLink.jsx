import { Link } from "react-router-dom";

export const CustomLink = ({ path, linkText }) => {
  return <Link to={`/${path}`}>{linkText}</Link>;
};
