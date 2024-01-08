import { IconWrapper, SentIcon } from "@/icons";
import {
  additionalPrompts,
  processingToneType,
  programmingLanguages,
} from "@/mock/data";
import { Select, Input } from "antd";
import { Sidebar } from "..";
import { useState } from "react";

type InitialValue = {
  processingType: string[];
  tone: string;
  programLang: string;
  additional: string;
};

const formInitialValue: InitialValue = {
  processingType: [],
  tone: "",
  programLang: "",
  additional: "",
};

const MainPageSidebar = () => {
  const [form, setForm] = useState<InitialValue>(formInitialValue);
  const [isError, setIsError] = useState(false);

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    for (const field in form) {
      const key = field as keyof InitialValue;
      const val = form[key];
      if (typeof val === "object" && val.length === 0) {
        setIsError(true);
      } else if (val === "" && key !== "additional") {
        setIsError(true);
      } else {
        console.log("form send");
      }
    }
  }

  const changeField = (field: string, value: string) => {
    setForm((prev) => {
      return { ...prev, [field]: value };
    });
    setIsError(false);
  };

  return (
    <Sidebar className="w-[80%] py-0 px-0">
      <form
        onSubmit={handleOnSubmit}
        className="h-[calc(100vh-100px)] flex flex-col gap-3 overflow-y-scroll px-8 py-4 "
      >
        <h2 className="font-bold text-2xl mb-5 text-left">Параметры</h2>
        <button
          type="submit"
          title="Начать обработку"
          className="z-10 flex font-semibold cursor-pointer select-none border-2 p-3 rounded-full m-auto text-secondaryColor hover:text-secondaryHoverColor active:text-secondaryColor"
        >
          <IconWrapper>
            <SentIcon />
          </IconWrapper>
        </button>
        <p
          className={`${"text-[#ff4b4bc8] font-thin "} ${
            isError ? "" : "invisible"
          }`}
        >
          Пожалуйста заполните все обязательные поля
        </p>
        <div className="text-left">Тип обработки:</div>
        <Select
          className={`${
            isError && form.processingType.length === 0
              ? "border border-[#ff4b4bc8] rounded-[5px]"
              : ""
          }`}
          onChange={(e) => changeField("processingType", e)}
          maxTagCount="responsive"
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
          className={`${
            isError && form.tone === ""
              ? "border border-[#ff4b4bc8] rounded-[5px]"
              : ""
          }`}
          onChange={(e) => changeField("tone", e)}
          style={{ width: "100%", textAlign: "left", marginBottom: "30px" }}
          placeholder="> Каким тоном вести диалог?"
          optionFilterProp="children"
          options={processingToneType}
        />
        <div className="text-left">Язык ответа:</div>
        <Select
          className={`${
            isError && form.programLang === ""
              ? "border border-[#ff4b4bc8] rounded-[5px]"
              : ""
          }`}
          onChange={(e) => changeField("programLang", e)}
          style={{
            marginBottom: "30px",
            width: "100%",
            textAlign: "left",
          }}
          placeholder="> javascript"
          options={programmingLanguages}
        />

        <div className="text-left">Дополнительные параметры:</div>
        <Input.TextArea
          autoSize={{ minRows: 6, maxRows: 6 }}
          placeholder="> Начинай все названия переменных и функций с буквы F"
          onChange={(e) => changeField("additional", e.target.value)}
        />
      </form>
    </Sidebar>
  );
};

export default MainPageSidebar;