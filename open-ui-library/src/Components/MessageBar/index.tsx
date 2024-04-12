import { useState } from "react";
import { IMessageBarProps } from "../../Interface";
import { getIconByType } from "./iconbytype";
import "./index.css";

export const MessageBar: React.FC<IMessageBarProps> = (props) => {
  const [dismissMessageBar, setdismissMessageBar] = useState<boolean>(false);
  const onmessageBarDissmiss = () => {
    setdismissMessageBar(true);
    props.onmessageBarDissmiss && props.onmessageBarDissmiss(props.id);
  };
  return (
    <>
      {!dismissMessageBar && (
        <div
          className={`message-bar-main ${props.type.toString()} ${
            props.action == undefined ? "" : "message-bar-action"
          }`}
        >
          <div key={props.id} className="message-bar-body">
            <div>{getIconByType(props.type)}</div>
            <div>{props.message}</div>
            <div className="message-bar-close" onClick={onmessageBarDissmiss}>
              <svg
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(50, 49, 48)"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="round"
                className="icon"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>
          <div>
            <div className="message-action-body">
              {props.action && props.action}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
