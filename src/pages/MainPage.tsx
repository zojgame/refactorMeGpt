import { TerminalComponent, Sidebar } from "@/components";
import { IconWrapper, SentIcon } from "@/icons";
import { additionalPrompts, processingToneType } from "@/mock/data";
import { Select, Input } from "antd";

function MainPage() {
  return (
    <div className="flex flex-col h-[calc(100%-144px)]">
      <div className="flex h-full justify-between">
        <Sidebar>
          <h2 className="font-bold text-2xl">Параметры</h2>
          <div className="text-left">Тип обработки:</div>
          <Select
            aria-placeholder="Что нужно сделать?"
            maxTagCount="responsive"
            mode="multiple"
            style={{
              width: "100%",
              verticalAlign: "start",
            }}
            placeholder=""
            options={additionalPrompts}
          />
          <div className="text-left">Тон обработки:</div>
          <Select
            style={{ width: "100%" }}
            placeholder="Каким тоном вести диалог?"
            optionFilterProp="children"
            options={processingToneType}
          />

          <div className="text-left">Дополнительные параметры:</div>
          <Input.TextArea
            autoSize={{ minRows: 6, maxRows: 6 }}
            placeholder=""
          />

          <button className="z-10 flex font-semibold cursor-pointer select-none border-2 p-3 rounded-full">
            <IconWrapper>
              <SentIcon />
            </IconWrapper>
          </button>
        </Sidebar>
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
