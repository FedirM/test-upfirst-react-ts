import { useState, useLayoutEffect } from "react";
import { Nullable } from "../interfaces/share";

interface WindowSize {
    width: Nullable<number>,
    height: Nullable<number>
}

export function useWindowSize() {
    const [size, setSize] = useState<WindowSize>({
      width: null,
      height: null,
    });
  
    useLayoutEffect(() => {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return size;
  }