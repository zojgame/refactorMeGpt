import { TerminalComponent, UserPanelComponent } from "@/components";

function MainPage() {
  return (
    <div className="flex flex-col h-[calc(100%-144px)]">
      <UserPanelComponent />
      <div className="flex h-full justify-between">
        <div className="w-full h-full max-w-[44vw]">
          <TerminalComponent editable />
        </div>
        <div className="flex flex-col w-fit px-3 h-full justify-center">
          <button className="z-10 flex font-semibold w-28 h-28 border m-auto bg-[#282a36] justify-center items-center rounded-full cursor-pointer select-none">
            Выполнить
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
