import { useRef } from "react";

const RegistrationModalComponent = () => {
  const formRef = useRef(null);
  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log("formRef", formRef.current);
  }

  return (
    <form
      className="flex flex-col h-fit bg-[#211E2E] gap-8 p-10 rounded-[50px] m-auto w-[500px]"
      onSubmit={handleOnSubmit}
      ref={formRef}
    >
      <h2 className="font-bold text-[36px] mb-5 mr-auto">Регистрация</h2>
      <label>
        <input
          type="text"
          placeholder="Почта"
          className="bg-transparent border-2 rounded-full p-2 px-5 pt-[10px] w-full"
        />
      </label>
      <label>
        <input
          type="password"
          placeholder="Пароль"
          className="bg-transparent border-2 rounded-full p-2 px-5 pt-[10px] w-full "
        />
      </label>
      <label className="mb-5">
        <input
          type="password"
          placeholder="Повторите пароль"
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
          Уже есть аккаунт
        </button>
      </div>
    </form>
  );
};

export { RegistrationModalComponent };
