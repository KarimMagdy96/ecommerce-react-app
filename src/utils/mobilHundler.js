import { useEffect } from "react";

const { createContext, useState } = React;
const mobilHandlerContext = createContext();

function mobilHandlerProvider({ children }) {
  const [isMobile, setIsMobile] = useState();

  const isMobilHundler = (e) => {
    setIsMobile(e.matches);
  };

  useEffect(() => {
    window
      .matchMedia("(max-width: 1024px)")
      .addEventListener("change", isMobilHundler);
    isMobilHundler(window.matchMedia("(max-width: 1024px)").matches);
  }, []);
  return (
    <mobilHandlerContext value={{ isMobile }}>{children}</mobilHandlerContext>
  );
}
export {
  mobilHandlerContext as mobilHandlerContext,
  mobilHandlerProvider as mobilHandlerProvider,
};
