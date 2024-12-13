import { useState } from "react";
import { Panel } from "../../Components/Panel";
import { EPanelSize } from "../../Interface";
import { CheckBox } from "../../Components/CheckBox";

export const PanelUsage: React.FC = () => {
  const [showtestpanel, setshowtestpanel] = useState<boolean>();
  return (
    <>
      <button onClick={() => setshowtestpanel(!showtestpanel)}>
        Show Test Panel
      </button>
      {showtestpanel && (
        <Panel
          data={<CheckBox name="Sample CheckBox" checked={false} />}
          size={EPanelSize.medium}
          title={"Samle Panel"}
          actionPanel={<>Something to Put in the Box</>}
          onPanelDismiss={() => {
            setshowtestpanel(!showtestpanel);
          }}
        />
      )}
    </>
  );
};
