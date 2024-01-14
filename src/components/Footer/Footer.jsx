 import "./Footer.css"
export const Footer = () => {
     return (
         <div className="footer">
             <Separator/>
       </div>
   ) 
}
export default Footer

const Separator = () => {
    return (
      <div>
        <p>Contacts LLC, Didenok Team, ICVA</p>
        <p>2024</p>
      </div>
    );
}