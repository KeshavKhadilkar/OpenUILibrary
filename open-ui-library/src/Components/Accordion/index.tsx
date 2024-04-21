import { useState } from "react";
import { IAccordionProps } from "../../Interface";
import "./index.css";
export const Accordion: React.FC<IAccordionProps> = (props) => {
  const [openAccordian, setOpenAccordian] = useState<boolean>(false);
  
  return (
    <div className="accordion-body">
      <div className="accordion-title">
        <label className="accoridan-title-message">{props.title}</label>
        <label className="accoridan-title-button" onClick={() => setOpenAccordian(!openAccordian)}>{!openAccordian ? '\\/' : "/\\" }</label>
      </div>
      {openAccordian && (
        <div className="accordion-message">
          <label>{props.message}</label>
        </div>
      )}
    </div>
  );
};

export default Accordion;
