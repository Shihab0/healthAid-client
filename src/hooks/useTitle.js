import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - health aid`;
  }, [title]);
};

export default useTitle;
