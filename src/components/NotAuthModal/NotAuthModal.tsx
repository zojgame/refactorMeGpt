import { useNavigate } from "react-router-dom";
import { LoginModalComponent } from "..";
import useStore from "@/store/store";
import { WarningIcon } from "@/icons/WarningIcon";

const NotAuthModal = () => {
  const navigate = useNavigate();
  const { setModal } = useStore();

  const handleGoBack = () => {
    navigate("/main");
    setModal(null);
  };

  const handleAuthClick = () => {
    navigate("/main");
    setModal(<LoginModalComponent />);
  };

  return (
    <div className="block absolute h-[100vh] w-[100vw]  z-[50] backdrop-blur-sm">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="bg-[#1f2023] h-fit w-fit py-10 px-5 rounded-[20px] flex flex-col items-center gap-10">
          <WarningIcon />
          <div className="flex">
            <div>Вы не выполнили вход, пожалуйста, </div>
            <p
              onClick={handleAuthClick}
              className="px-1 cursor-pointer hover:underline text-[#ffffff94]"
            >
              войдите
            </p>{" "}
            или
            <p
              onClick={handleGoBack}
              className="px-1 cursor-pointer hover:underline text-[#ffffff94]"
            >
              вернитесь на главную
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { NotAuthModal };
