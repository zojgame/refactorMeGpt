import { IconWrapper, SentIcon } from "@/icons";
import {
  additionalPrompts,
  processingToneType,
  programmingLanguages,
} from "@/mock/data";
import { Select, Input } from "antd";
import { Sidebar } from "..";

const MainPageSidebar = () => {
  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log("first");
  }

  return (
    <Sidebar className="w-[70%] py-4 px-0">
      <form
        onSubmit={handleOnSubmit}
        className="h-[calc(100vh-100px)] flex flex-col gap-3 overflow-y-scroll w-full px-8 py-4 "
      >
        <h2 className="font-bold text-2xl mb-5">Параметры</h2>
        <button
          type="submit"
          title="Начать обработку"
          className="z-10 flex font-semibold cursor-pointer select-none border-2 p-3 rounded-full m-auto text-secondaryColor hover:text-secondaryHoverColor active:text-secondaryColor"
        >
          <IconWrapper>
            <SentIcon />
          </IconWrapper>
        </button>
        <div className="text-left">Тип обработки:</div>
        <Select
          maxTagCount="responsive"
          mode="multiple"
          style={{
            marginBottom: "30px",
            width: "100%",
            textAlign: "left",
          }}
          placeholder="> Что нужно сделать?"
          options={additionalPrompts}
        />
        <div className="text-left">Тон обработки:</div>
        <Select
          style={{ width: "100%", textAlign: "left", marginBottom: "30px" }}
          placeholder="> Каким тоном вести диалог?"
          optionFilterProp="children"
          options={processingToneType}
        />
        <div className="text-left">Язык ответа:</div>
        <Select
          style={{
            marginBottom: "30px",
            width: "100%",
            textAlign: "left",
          }}
          placeholder="> javascript"
          options={programmingLanguages}
        />

        <div className="text-left">Дополнительные параметры:</div>
        <Input.TextArea autoSize={{ minRows: 6, maxRows: 6 }} placeholder="" />
      </form>
    </Sidebar>
  );
};

export default MainPageSidebar;
