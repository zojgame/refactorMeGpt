import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";
import useStore from "@/store/store";
import { HomeIcon, TimeIcon, IconWrapper } from "@/icons";
import { LoginModalComponent, RegistrationModalComponent } from "..";
import "../../App.css";
import styles from "./styles.module.css";

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
  const { modal, setModal, setNotificationMessage } = useStore();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("/main");

  useEffect(() => {
    setSelectedTab(location.pathname);
    setNotificationMessage(messageApi);
  }, [location, messageApi, setNotificationMessage]);

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
      {contextHolder}
      {modal}
      <header className="flex flex-row w-full select-none text-xl justify-between px-16 py-5">
        <nav className="flex flex-row gap-10 text-[18px] items-center ">
          {tabs.map((tab) => {
            const isTabSelected = selectedTab === tab.path;

            return (
              <div
                className={`cursor-pointer font-bold ${
                  isTabSelected ? "" : ` ${styles.tabSelected}`
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
        <div className="flex gap-10 justify-start z-10">
          <button
            className={`border-[3px] rounded-full py-2 px-6 font-bold text-[16px]  ${styles.login}`}
            onClick={handleOnLoginClick}
          >
            Войти
          </button>
          <button
            className={`rounded-full py-2 px-6 font-bold text-[16px] ${styles.registration}`}
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
