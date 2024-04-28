import { useEffect, useRef } from "react";
import { IPanelProps } from "../../Interface";
import "./index.css";

export const Panel: React.FC<IPanelProps> = (props) => {
  const outerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (outerRef.current && !outerRef.current.contains(e.target)) {
        props.onPanelDismiss();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props]);

  return (
    <>
      <div className="panel-underlay">
        <div className={`panel ${props.size.toString()}`} ref={outerRef}>
          <div className="panel-body">
            <div className="panel-header">
              <div className="panel-header-title">{props.title}</div>
              <div
                className="panel-header-close"
                onClick={() => props.onPanelDismiss()}
              >
                X
              </div>
            </div>
            <div className="panel-content">{props.data}</div>
            <div className="panel-actions">{props.actionPanel}</div>
          </div>
        </div>
      </div>
    </>
  );
};
