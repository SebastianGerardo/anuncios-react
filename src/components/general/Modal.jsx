import { useTransition, animated } from "@react-spring/web";

const sizes = {
  xs: "",
  sm: "",
  lg: "",
  xl: "",
  "2xl": "",
};

export const Modal = ({ isOpen, onClose, children }) => {
  const transitions = useTransition(isOpen, {
    from: { opacity: 0, transform: "scale(0.9)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.9)" },
    config: { tension: 300, friction: 20 },
  });

  const overlayTransitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 },
  });

  return transitions(
    (styles, item) =>
      item && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {overlayTransitions(
            (styles, item) =>
              item && (
                <animated.div
                  style={styles}
                  className="fixed inset-0 bg-black opacity-25"
                  onClick={onClose}
                />
              )
          )}
          <animated.div
            style={styles}
            className="bg-white rounded-lg shadow-lg p-6 z-50 max-w-[80%] max-h-[80%] sm:max-w-[80%] sm:max-h-[80%] md:max-w-[70%] md:max-h-[70%]  overflow-y-auto"
          >
            {children}
          </animated.div>
        </div>
      )
  );
};
