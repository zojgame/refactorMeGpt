import { Select } from "antd";

const languages = [
  {
    value: "0",
    label: "Java Script",
  },
  {
    value: "1",
    label: "Type Script",
  },
  {
    value: "2",
    label: "C#",
  },
  {
    value: "3",
    label: "Python",
  },
  {
    value: "4",
    label: "Swift",
  },
  {
    value: "5",
    label: "Php",
  },
  {
    value: "6",
    label: "Java",
  },
];

const typeModify = [
  { value: "1", label: "Рефакторинг кода" },
  { value: "2", label: "Рефакторинг переменных" },
  { value: "3", label: "Комментирование с объяснением кода" },
];

const additionalPrompts = [
  { value: "1", label: "Комментирование кода" },
  { value: "2", label: "Написать как можно короче" },
  { value: "3", label: "Удаление комментариев" },
  { value: "4", label: "Декомпозиция переменных" },
  { value: "5", label: "Переименование переменных" },
  { value: "6", label: "Разбиение на компоненты" },
  { value: "7", label: "Прописать типы" },
];

const UserPanelComponent = () => {
  return (
    <div className="flex gap-10 py-5 justify-center">
      <Select
        showSearch
        style={{ width: 200 }}
        defaultValue={"1"}
        optionFilterProp="children"
        options={languages}
      />
      <Select
        style={{ width: 450 }}
        placeholder="Выберите тип обработки"
        optionFilterProp="children"
        options={typeModify}
      />
      <Select
        mode="multiple"
        style={{
          width: 500,
          height: 120,
          verticalAlign: "start",
        }}
        placeholder="Введите дополнительные параметры рефакторинга"
        options={additionalPrompts}
      />
    </div>
  );
};

export { UserPanelComponent };
