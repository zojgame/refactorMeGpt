import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import useStore from "@/store/store";
import { IconWrapper, CrossIcon } from "@/icons";

const RegistrationModalComponent = () => {
  const formRef = useRef(null);
  const { setModal } = useStore();
  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log("formRef", formRef.current);
  }

  const handleCloseModal = () => {
    setModal(null);
  };

  useOnClickOutside(formRef, handleCloseModal);

  return (
    <div className="block absolute h-[100vh] w-[100vw]  z-[50] backdrop-blur-sm">
      <form
        className="flex flex-col h-fit bg-[#1f2023] gap-8 p-10 rounded-[50px] m-auto w-[500px] absolute z-10 left-[calc(50%-250px)] top-[15%]"
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
        <label>
          <input
            type="text"
            placeholder="Почта"
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
