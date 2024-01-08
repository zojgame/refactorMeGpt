import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import useStore from "@/store/store";
import { IconWrapper, CrossIcon } from "@/icons";
import { singUp } from "@/api/authorization";

const RegistrationModalComponent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef(null);
  const { setModal } = useStore();

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (formRef.current) {
      const username = (formRef.current[0] as HTMLInputElement).value;
      const password = (formRef.current[1] as HTMLInputElement).value;
      const repeatPassword = (formRef.current[2] as HTMLInputElement).value;

      if (password !== repeatPassword) {
        setErrorMessage("Пароли не совпадают");
      } else if (!password || !repeatPassword || !username) {
        setErrorMessage("Заполните все обязательные поля");
      } else if (password.length < 5) {
        setErrorMessage("Пароль слишком короткий");
      } else {
        setErrorMessage("");
        singUp(username, password, repeatPassword);
      }
    }
  }

  const handleOnFieldChange = () => {
    if (errorMessage !== "") {
      setErrorMessage("");
    }
  };

  const handleCloseModal = () => {
    setModal(null);
  };

  useOnClickOutside(formRef, handleCloseModal);

  return (
    <div className="block absolute h-[100vh] w-[100vw]  z-[50] backdrop-blur-sm">
      <form
        className="flex flex-col h-fit bg-[#1f2023] gap-8 p-10 rounded-[50px] m-auto w-[500px] absolute z-10 left-[calc(50%-250px)] top-[5%]"
        onSubmit={handleOnSubmit}
        ref={formRef}
      >
        <div className="flex">
          <h2 className="font-bold text-[36px] mb-5 mr-auto">Регистрация</h2>

          <div onClick={handleCloseModal}>
            <IconWrapper>
              <CrossIcon className="cursor-pointer" />
            </IconWrapper>
          </div>
        </div>
        <div
          className={`h-4 ${
            errorMessage !== "" ? "text-left text-[#ff4b4bc8]" : ""
          }`}
        >
          {errorMessage}
        </div>
        <label>
          <input
            onChange={handleOnFieldChange}
            type="text"
            placeholder="Логин"
            className="bg-[#1f2023] border-2 rounded-full p-2 px-5 pt-[10px] w-full"
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Пароль"
            className="bg-[#1f2023] border-2 rounded-full p-2 px-5 pt-[10px] w-full "
          />
        </label>
        <label className="mb-5">
          <input
            onChange={handleOnFieldChange}
            type="password"
            placeholder="Повторите пароль"
            className="bg-[#1f2023] border-2 rounded-full p-2 px-5 pt-[10px] w-full "
          />
        </label>
        <button
          type="submit"
          className="bg-secondaryColor py-2 px-6 rounded-full text-primaryColor font-semibold hover:bg-secondaryHoverColor active:bg-secondaryColor hover:text-primaryHoverColor active:text-primaryColor"
        >
          Зарегистрироваться
        </button>
        <div className="flex gap-3 font-[12px] justify-center">
          <div className=" text-gray-400 font-semibold  hover:underline cursor-pointer select-none">
            Уже есть аккаунт
          </div>
        </div>
      </form>
    </div>
  );
};

export { RegistrationModalComponent };
