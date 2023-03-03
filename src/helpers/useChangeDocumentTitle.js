import { useEffect } from "react";

export const useChangeDocumentTitle = (pageTitle) => {
  useEffect(() => {
    document.title = `Dustin Hayate - ${pageTitle}`;
  }, [pageTitle]);
};
