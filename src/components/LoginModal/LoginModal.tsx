import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import useStore from "@/store/store";

const LoginModalComponent = () => {
  const formRef = useRef(null);
  const { setModal } = useStore();
  const handleClickOutside = () => {
    setModal(null);
  };

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log("formRef", formRef.current);
  }

  useOnClickOutside(formRef, handleClickOutside);

  return (
    <div className="block absolute h-[100vh] w-[100vw]  z-[50] backdrop-blur-sm">
      <form
        className="flex flex-col h-fit bg-[#211E2E] gap-8 p-10 rounded-[50px] m-auto w-[500px] absolute z-10 left-[calc(50%-250px)] top-[15%]"
        onSubmit={handleOnSubmit}
        ref={formRef}
      >
        <h2 className="font-bold text-[36px] mb-5 mr-auto">Вход</h2>
        <label>
          <input
            type="text"
            placeholder="Почта"
            className="bg-transparent border-2 rounded-full p-2 px-5 pt-[10px] w-full"
          />
        </label>
        <label className="mb-5">
          <input
            type="password"
            placeholder="Пароль"
            className="bg-transparent border-2 rounded-full p-2 px-5 pt-[10px] w-full "
          />
        </label>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] p-2 rounded-full text-black font-semibold"
        >
          Войти
        </button>
        <div className="flex gap-3 font-[12px] justify-center">
          <button className=" text-gray-400 font-semibold hover:underline">
            Не помню пароль
          </button>
          <button className="text-gray-400 font-semibold hover:underline">
            Нет аккаунта
          </button>
        </div>
      </form>
    </div>
  );
};

export { LoginModalComponent };
