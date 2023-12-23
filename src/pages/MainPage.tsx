import {
  TerminalComponent,
  UserPanelComponent,
  Sidebar,
  SelectorComponent,
  OptionSelector,
} from "@/components";
import { typeModify } from "@/mock/data";

function MainPage() {
  return (
    <div className="flex flex-col h-[calc(100%-144px)]">
      <UserPanelComponent />
      <div className="flex h-full justify-between">
        <Sidebar>
          <h2>Параметры</h2>
          <OptionSelector value={"2"} options={typeModify} />
        </Sidebar>
        <div className="w-full h-full">
          {/* <div className="w-full h-full max-w-[44vw]"> */}
          <TerminalComponent editable />
        </div>
        <div className="w-full h-full">
          {/* <div className="w-full max-w-[44vw] h-full"> */}
          <TerminalComponent />
        </div>
      </div>
    </div>
  );
}

export { MainPage };
