import { TerminalComponent } from "@/components";
import MainPageSidebar from "@/components/MainPageSidebar/MainPageSidebar";

function MainPage() {
  return (
    <div className="flex flex-col h-[calc(100%-144px)]">
      <div className="flex h-full justify-between">
        <MainPageSidebar />
        <div className="w-full h-full">
          <TerminalComponent editable />
        </div>
        <div className="w-full h-full">
          <TerminalComponent />
        </div>
      </div>
    </div>
  );
}

export { MainPage };
