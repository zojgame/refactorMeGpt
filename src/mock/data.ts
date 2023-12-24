import { Selector } from "@/types";

const programmingLanguages: Selector[] = [
  { value: "1", label: "javascript" },
  { value: "2", label: "c" },
  { value: "3", label: "swift" },
  { value: "4", label: "typescript" },
  { value: "5", label: "java" },
];

const languages: Selector[] = [
  { value: "1", label: "ru" },
  { value: "2", label: "en" },
  { value: "3", label: "de" },
];

const additionalPrompts: Selector[] = [
  { value: "1", label: "Комментирование кода" },
  { value: "2", label: "Написать как можно короче" },
  { value: "3", label: "Удаление комментариев" },
  { value: "4", label: "Декомпозиция переменных" },
  { value: "5", label: "Переименование переменных" },
  { value: "6", label: "Разбиение на компоненты" },
  { value: "7", label: "Прописать типы" },
];

const typeModify: Selector[] = [
  { value: "1", label: "Рефакторинг кода" },
  { value: "2", label: "Рефакторинг переменных" },
  { value: "3", label: "Комментирование с объяснением кода" },
];

const themes: Selector[] = [
  { value: "1", label: "vs-dark" },
  { value: "2", label: "light" },
];

const processingToneType: Selector[] = [
  { value: "1", label: "Профессиональный" },
  { value: "2", label: "Понятный" },
];
export {
  programmingLanguages,
  languages,
  typeModify,
  additionalPrompts,
  themes,
  processingToneType,
};
