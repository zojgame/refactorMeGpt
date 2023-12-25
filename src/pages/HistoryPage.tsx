import { Sidebar, TerminalComponent } from "@/components";

const history = [
  { id: "1", data: "1 feb 2022", programLang: "javascript" },
  { id: "2", data: "2 feb 2022", programLang: "c" },
  { id: "3", data: "3 feb 2022", programLang: "java" },
  { id: "4", data: "4 feb 2022", programLang: "c#" },
  { id: "5", data: "4 feb 2022", programLang: "c#" },
  { id: "6", data: "4 feb 2022", programLang: "c#" },
  { id: "7", data: "4 feb 2022", programLang: "c#" },
  { id: "8", data: "4 feb 2022", programLang: "c#" },
  { id: "9", data: "3 feb 2022", programLang: "java" },
  { id: "10", data: "3 feb 2022", programLang: "java" },
  { id: "11", data: "3 feb 2022", programLang: "java" },
  { id: "12", data: "3 feb 2022", programLang: "java" },
  { id: "13", data: "3 feb 2022", programLang: "java" },
  { id: "14", data: "4 feb 2022", programLang: "c#" },
  { id: "15", data: "4 feb 2022", programLang: "c#" },
  { id: "16", data: "3 feb 2022", programLang: "java" },
  { id: "17", data: "3 feb 2022", programLang: "java" },
  { id: "18", data: "3 feb 2022", programLang: "java" },
  { id: "19", data: "3 feb 2022", programLang: "java" },
  { id: "20", data: "3 feb 2022", programLang: "java" },
];

const HistoryPage = () => {
  const lastWeek = history.slice(0, 8);
  const previously = history.slice(8);
  return (
    <div className="flex">
      <Sidebar className="w-[30%] overflow-y-auto flex px-8">
        <div className="text-sm text-left text-[#666] font-semibold ">
          Последние 7 дней
        </div>
        {lastWeek.map((hist) => (
          <div
            className="grid grid-cols-2 min-h-[50px] hover:bg-[#40414f] items-center rounded-lg cursor-pointer select-none"
            key={hist.id}
          >
            <div className="">{hist.data}</div>
            <div className="">{hist.programLang}</div>
          </div>
        ))}
        <div className="text-sm text-left text-[#666] font-semibold ">
          Ранее
        </div>
        {previously.map((hist) => (
          <div
            className="grid grid-cols-2 min-h-[50px] hover:bg-[#40414f] items-center rounded-lg cursor-pointer select-none"
            key={hist.id}
          >
            <div className="">{hist.data}</div>
            <div className="">{hist.programLang}</div>
          </div>
        ))}
      </Sidebar>
      <div className="w-full h-full">
        <TerminalComponent title="Ваш код" />
      </div>
      <div className="w-full h-full">
        <TerminalComponent title="Генерация" />
      </div>
    </div>
  );
};
export { HistoryPage };
