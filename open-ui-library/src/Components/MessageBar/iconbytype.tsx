import { MessageType } from "../../Interface";

export const getIconByType = (type: MessageType) => {
  return (
    <svg
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke={getstrokecolor(type)}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
      className="icon"
    >
      {getsvgbytype(type)}
    </svg>
  );
};

const getsvgbytype = (type: MessageType) => {
  switch (type) {
    case MessageType.error:
      return (
        <>
          <circle cx="12" cy="12" r="11" />
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </>
      );
    case MessageType.blocked:
      return (
        <>
          <circle cx="12" cy="12" r="11" />
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </>
      );
    case MessageType.success:
      return (
        <>
          <circle cx="12" cy="12" r="11" />
          <polyline points="20 6 9 17 4 12"></polyline>
        </>
      );
    default:
      return (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </>
      );
  }
};

const getstrokecolor= (type:MessageType)=>{
  switch(type){
    case MessageType.error:
      return "#f60f0f";
    case MessageType.info:
      return "rgb(96, 94, 92)";
    case MessageType.blocked:
      return "rgb(168, 0, 0)";
    case MessageType.severewarning:
      return "rgb(216, 59, 1)";
    case MessageType.warning:
      return "rgb(121, 119, 117)";
    case MessageType.success:
      return "rgb(16, 124, 16)";
  }
}
