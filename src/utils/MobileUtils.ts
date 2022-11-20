import { Dispatch, SetStateAction } from "react";

export const handleResize = (
    setMobile: Dispatch<SetStateAction<boolean | undefined>>
  ) => {
    if (window.innerWidth > 950) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  };