const history = [
  { id: "1", data: "1 feb 2022", programLang: "javascript" },
  { id: "2", data: "2 feb 2022", programLang: "c" },
  { id: "3", data: "3 feb 2022", programLang: "java" },
  { id: "4", data: "4 feb 2022", programLang: "c#" },
];

const HistoryPage = () => {
  return (
    <div className="border bg-[#282a36]">
      {history.map((hist) => (
        <>
          <div>{hist.data}</div>
          <div>{hist.programLang}</div>
          <div></div>
        </>
      ))}
    </div>
  );
};
export { HistoryPage };
