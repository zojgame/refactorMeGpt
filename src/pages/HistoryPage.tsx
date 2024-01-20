import {
  LoadingModal,
  Sidebar,
  TerminalComponent,
  NotAuthModal,
} from "@/components";
import { useEffect } from "react";
import { useState } from "react";
import { getHistory } from "@/api/user";
import useStore from "@/store/store";
import { HistoryRes } from "@/types";
import dayjs from "dayjs";

const historyMock: HistoryRes[] = [
  { body: "", dateTimeCreate: "2023.01.13 20:55:46" },
  { body: "", dateTimeCreate: "2024.01.01 20:55:46" },
  { body: "", dateTimeCreate: "2023.12.20 20:55:46" },
  { body: "", dateTimeCreate: "2023.12.25 20:55:46" },
  { body: "", dateTimeCreate: "2023.12.28 20:55:46" },
  { body: "", dateTimeCreate: "2024.01.13 20:55:46" },
];

const getLastWeekHistory = (his: HistoryRes[]) => {
  const convertedDates = [...his]
    .sort((a, b) => {
      const prev = new Date(a.dateTimeCreate);
      const next = new Date(b.dateTimeCreate);

      return Number(next) - Number(prev);
    })
    .filter((date) => {
      const startDate = new Date();
      const endDate = new Date(date.dateTimeCreate);

      const timeDifference = startDate.getTime() - endDate.getTime();

      const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

      const isMoreThanWeek = daysDifference <= 7;
      return isMoreThanWeek;
    });

  return convertedDates;
};

const getPreviousHistory = (his: HistoryRes[]) => {
  const convertedDates = [...his]
    .sort((a, b) => {
      const prev = new Date(a.dateTimeCreate);
      const next = new Date(b.dateTimeCreate);

      return Number(next) - Number(prev);
    })
    .filter((date) => {
      const startDate = new Date();
      const endDate = new Date(date.dateTimeCreate);
      console.log("startDate", startDate);

      const timeDifference = startDate.getTime() - endDate.getTime();

      const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

      const isMoreThanWeek = daysDifference > 7;
      return isMoreThanWeek;
    });

  return convertedDates;
};

const HistoryPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(true);
  const [history, setHistory] = useState<HistoryRes[]>([]);
  const { setModal } = useStore();

  useEffect(() => {
    if (isLoading) {
      setModal(<LoadingModal />);
    } else {
      if (!isAuth) {
        setModal(<NotAuthModal />);
      } else {
        setModal(null);
      }
    }
  }, [isLoading, isAuth, setModal]);

  useEffect(() => {
    setModal(<LoadingModal />);
    const token = localStorage.getItem("token");
    if (token) {
      getHistory(token)
        .then((data) => {
          if (data) {
            setHistory(data as HistoryRes[]);
            setIsAuth(true);
          }
        })
        .catch(() => {
          setIsAuth(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsAuth(false);
      setIsLoading(false);
    }
  }, [setModal]);

  const lastWeekDates = getLastWeekHistory(history);
  const previos = getPreviousHistory(history);

  return (
    <div className="flex sm:flex-col">
      <Sidebar className="w-[60%] overflow-y-auto flex px-8 sm:w-full ">
        <div className="text-sm text-left text-[#666] font-semibold ">
          Последние 7 дней
        </div>
        {lastWeekDates.map((hist) => {
          const date = hist.dateTimeCreate.split(" ")[0].split(".").join("-");
          const convertedDate = dayjs(date).format("DD MMM YYYY");

          return (
            <div
              className="grid grid-cols-2 min-h-[50px] hover:bg-[#40414f] items-center rounded-lg cursor-pointer select-none"
              key={hist.dateTimeCreate}
            >
              <div className="">{convertedDate}</div>
              <div className="">javascript</div>
            </div>
          );
        })}
        {previos.length !== 0 && (
          <>
            <div className="text-sm text-left text-[#666] font-semibold ">
              Ранее
            </div>
            {previos.map((hist) => {
              const date = hist.dateTimeCreate
                .split(" ")[0]
                .split(".")
                .join("-");
              const convertedDate = dayjs(date).format("DD MMM YYYY");

              return (
                <div
                  className="grid grid-cols-2 min-h-[50px] hover:bg-[#40414f] items-center rounded-lg cursor-pointer select-none"
                  key={hist.dateTimeCreate}
                >
                  <div className="">{convertedDate}</div>
                  <div className="">javascript</div>
                </div>
              );
            })}
          </>
        )}
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
