import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useStore from "@/store/store";
import { HomeIcon, TimeIcon, IconWrapper } from "@/icons";
import { LoginModalComponent, RegistrationModalComponent } from "..";
import "../../App.css";

const tabs = [
  {
    path: "/main",
    icon: <HomeIcon />,
    title: "Главная",
    id: "1",
  },
  {
    path: "/history",
    icon: <TimeIcon />,
    title: "История",
    id: "2",
  },
];

const HeaderComponent = () => {
  const { modal, setModal } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("/main");
  useEffect(() => {
    setSelectedTab(location.pathname);
  }, [location]);

  const handleOnTabClick = (tab: string) => {
    return () => {
      navigate(tab);
    };
  };
  function handleOnLoginClick(): void {
    setModal(<LoginModalComponent />);
  }

  function handleOnRegisterClick(): void {
    setModal(<RegistrationModalComponent />);
  }

  return (
    <>
      {modal}
      <header className="flex flex-row w-full select-none text-xl justify-between px-16 py-10">
        <nav className="flex flex-row gap-10 text-xl items-center">
          {tabs.map((tab) => {
            const isTabSelected = selectedTab === tab.path;

            return (
              <div
                className={`cursor-pointer font-bold ${
                  isTabSelected ? "" : "text-gray-400"
                }`}
                key={tab.id}
                onClick={handleOnTabClick(tab.path)}
              >
                <IconWrapper>
                  {tab.icon} {tab.title}
                </IconWrapper>
              </div>
            );
          })}
        </nav>
        <div className="flex gap-10 justify-start">
          <button
            className="border-[3px] rounded-full py-2 px-8 font-bold text-[18px]"
            onClick={handleOnLoginClick}
          >
            Войти
          </button>
          <button
            className="rounded-full py-2 px-8 font-bold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-black text-[18px]"
            onClick={handleOnRegisterClick}
          >
            Регистрация
          </button>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export { HeaderComponent };
