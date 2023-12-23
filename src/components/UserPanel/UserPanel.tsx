import Select from "antd/es/select";
import { typeModify, additionalPrompts } from "@/mock/data";
const UserPanelComponent = () => {
  return (
    <div className="flex gap-10 py-5 justify-center">
      <Select
        style={{ width: 450 }}
        placeholder="Выберите тип обработки"
        optionFilterProp="children"
        options={typeModify}
      />
      <Select
        maxTagCount="responsive"
        mode="multiple"
        style={{
          width: 650,
          verticalAlign: "start",
        }}
        placeholder="Введите дополнительные параметры рефакторинга"
        options={additionalPrompts}
      />
    </div>
  );
};

export { UserPanelComponent };
