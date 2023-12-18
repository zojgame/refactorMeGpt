import { TerminalComponent, UserPanelComponent } from "@/components";
import { IconWrapper, SentIcon } from "@/icons";

function MainPage() {
  return (
    <div className="flex flex-col h-[calc(100%-144px)]">
      <UserPanelComponent />
      <div className="flex h-full justify-between">
        <div className="w-full h-full max-w-[44vw]">
          <TerminalComponent editable />
        </div>
        <div className="flex flex-col w-fit px-3 h-full justify-center">
          <button className="z-10 flex font-semibold w-20 h-20 m-auto bg-[#282a36] justify-center items-center rounded-full cursor-pointer select-none">
            <IconWrapper>
              <SentIcon />
            </IconWrapper>
          </button>
        </div>
        <div className="w-full max-w-[44vw] h-full">
          <TerminalComponent />
        </div>
      </div>
    </div>
  );
}

export { MainPage };
