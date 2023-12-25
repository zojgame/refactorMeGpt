import { Select, Input } from "antd";
import { TerminalComponent, Sidebar } from "@/components";
import { IconWrapper, SentIcon } from "@/icons";
import { additionalPrompts, processingToneType } from "@/mock/data";

function MainPage() {
  return (
    <div className="flex flex-col h-[calc(100%-144px)]">
      <div className="flex h-full justify-between">
        <Sidebar className="w-[60%] px-8 py-7">
          <h2 className="font-bold text-2xl mb-10">Параметры</h2>
          <div className="text-left">Тип обработки:</div>
          <Select
            maxTagCount="responsive"
            mode="multiple"
            style={{
              marginBottom: "40px",
              width: "100%",
              textAlign: "left",
            }}
            placeholder="> Что нужно сделать?"
            options={additionalPrompts}
          />
          <div className="text-left">Тон обработки:</div>
          <Select
            style={{ width: "100%", textAlign: "left", marginBottom: "40px" }}
            placeholder="> Каким тоном вести диалог?"
            optionFilterProp="children"
            options={processingToneType}
          />

          <div className="text-left">Дополнительные параметры:</div>
          <Input.TextArea
            autoSize={{ minRows: 6, maxRows: 6 }}
            placeholder=""
          />
          <button className="z-10 flex font-semibold cursor-pointer select-none border-2 p-3 rounded-full m-auto text-secondaryColor hover:text-secondaryHoverColor active:text-secondaryColor">
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
