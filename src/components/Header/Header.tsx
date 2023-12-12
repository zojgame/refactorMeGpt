import { HomeIcon, TimeIcon, IconWrapper } from "../../icons";

const HeaderComponent = () => {
  return (
    <header className="flex flex-row w-full pb-10  select-none text-xl justify-between">
      <nav className="flex flex-row gap-10 text-xl items-center">
        <div className="cursor-pointer font-bold">
          <IconWrapper>
            Главная <HomeIcon />
          </IconWrapper>
        </div>
        <div className="cursor-pointer font-bold">
          <IconWrapper>
            История <TimeIcon />
          </IconWrapper>
        </div>
      </nav>
      <div className="flex gap-20 justify-start">
        <button className="border-[3px] rounded-full py-4 px-12 font-bold">
          Войти
        </button>
        <button className="rounded-full py-4 px-12 font-bold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-black">
          Регистрация
        </button>
      </div>
    </header>
  );
};
export { HeaderComponent };
