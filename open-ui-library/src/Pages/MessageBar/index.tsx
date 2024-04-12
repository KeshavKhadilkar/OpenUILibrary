import { MessageBar } from "../../Components/MessageBar";
import { MessageType } from "../../Interface";

export const MessageBarUsage: React.FC = () => {
  return (
    <>
      <MessageBar
        id="errMessageBar"
        message="Something went wrong"
        type={MessageType.error}
        action={
          <div>
            <button style={{ marginRight: "1rem" }}>Yes</button>
            <button>No</button>
          </div>
        }
      />
      <MessageBar
        id="blockmessagebar"
        message="Something got blocked"
        type={MessageType.blocked}
      />
      <MessageBar
        id="successmessagebar"
        message="Something went correct"
        type={MessageType.success}
      />
      <MessageBar
        id="infomessagebar"
        message="Something info to think about"
        type={MessageType.info}
      />
      <MessageBar
        id="warningmessagebar"
        message="Something let to warning"
        type={MessageType.warning}
      />
      <MessageBar
        id="severwarningMessage"
        message="Something went horribly wrong"
        type={MessageType.severewarning}
      />
    </>
  );
};
