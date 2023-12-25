import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import useStore from "@/store/store";
import { IconWrapper, CrossIcon } from "@/icons";

const LoginModalComponent = () => {
  const formRef = useRef(null);
  const { setModal } = useStore();

  const handleCloseModal = () => {
    setModal(null);
  };

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log("formRef", formRef.current);
  }

  useOnClickOutside(formRef, handleCloseModal);

  return (
    <div className="block absolute h-[100vh] w-[100vw]  z-[50] backdrop-blur-sm">
      <form
        className="flex flex-col h-fit bg-[#1f2023] gap-8 p-10 rounded-[50px] m-auto w-[500px] absolute z-10 left-[calc(50%-250px)] top-[15%]"
        onSubmit={handleOnSubmit}
        ref={formRef}
      >
        <div className="flex">
          <h2 className="font-bold text-[36px] mb-5 mr-auto">Вход</h2>
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
        <label className="mb-5">
          <input
            type="password"
            placeholder="Пароль"
            className="bg-[#1f2023] border-2 rounded-full p-2 px-5 pt-[10px] w-full "
          />
        </label>
        <button
          type="submit"
          className="bg-secondaryColor p-2 rounded-full text-primaryColor font-semibold px-8 hover:bg-secondaryHoverColor active:bg-secondaryColor hover:text-primaryHoverColor active:text-primaryColor"
        >
          Войти
        </button>
        <div className="flex gap-3 font-[12px] justify-between">
          <div
            onClick={() => {}}
            className="text-gray-400 font-semibold hover:underline cursor-pointer select-none"
          >
            Не помню пароль
          </div>
          <div className="text-gray-400 font-semibold hover:underline cursor-pointer select-none">
            Нет аккаунта
          </div>
        </div>
      </form>
    </div>
  );
};

export { LoginModalComponent };
