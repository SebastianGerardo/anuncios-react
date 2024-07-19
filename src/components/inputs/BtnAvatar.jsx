// hooks
import { useClickOutside } from "@/hooks/general/useClickOutside";
import { useLocation, useNavigate } from "react-router-dom";
// stores
import { useUserStore } from "../../stores/user.store";
// utils
import { animated, useTransition } from "@react-spring/web";
import { logoutSession } from "@/utils/logoutSession";

export const BtnAvatar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useUserStore((state) => state.user);
  const isLoading = useUserStore((state) => state.isLoading);

  // const { logout } = useLogoutSession();

  const { dropdownRef, isOpen, setIsOpen } = useClickOutside();
  const transitions = useTransition(isOpen, {
    from: { opacity: 0, transform: "translateY(-10%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(-10%)" },
    config: { tension: 300, friction: 20 },
  });

  return (
    <div className="relative space-x-3 " ref={dropdownRef}>
      {isLoading ? (
        <div className="p-1 bg-gray-200 w-8 h-8 rounded-full focus:outline-none focus:ring animate-pulse"></div>
      ) : (
        <button
          className="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            className="object-cover w-8 h-8 rounded-full"
            src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
            alt="Ahmed Kamel"
          />
        </button>
      )}

      {/* Green dot */}
      <div className="absolute right-0 p-1 bg-green-400 rounded-full bottom-3 animate-ping"></div>
      <div className="absolute right-0 p-1 bg-green-400 border border-white rounded-full bottom-3"></div>

      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="absolute right-0 mt-3 transform -translate-x-full bg-white rounded-md shadow-lg min-w-max z-[9999]"
            >
              <div className="flex flex-col p-4 space-y-1 font-medium border-b">
                <span className="text-gray-800">{user?.names}</span>
                <span className="text-sm text-gray-400">{user?.email}</span>
              </div>
              {pathname === "/" && (
                <div
                  onClick={() =>
                    navigate("/dashboard/user/home", {
                      state: { logged: true },
                    })
                  }
                  className="flex items-center justify-center p-4 text-blue-700 underline border-t cursor-pointer"
                >
                  Ir al dashboard
                </div>
              )}
              <div
                onClick={() => logoutSession(navigate)}
                className="flex items-center justify-center p-4 text-blue-700 underline border-t cursor-pointer"
              >
                Cerrar sesión
              </div>
            </animated.div>
          )
      )}
    </div>
  );
};
