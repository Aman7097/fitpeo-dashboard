// "use client";

// import React, { useState, useEffect } from "react";
// import { useGlobalContext } from "@/context/store";
// import LocalStore from "@/constant/enums/LocalStorage";

// const WindowTitleComp = ({ titlePrefix }: { titlePrefix: string }) => {
//   const { globalHeaderName } = useGlobalContext();
//   const [tabTitle, setTabTitle] = useState<string>("SEO Workflow");

//   useEffect(() => {
//     if (globalHeaderName && globalHeaderName.length > 0) {
//       setTabTitle(globalHeaderName);
//     } else {
//       const local = localStorage.getItem(LocalStore.HEADER_TAB_NAME);
//       if (local && local !== "null") {
//         setTabTitle(local);
//       }
//     }
//   }, [globalHeaderName]);

//   return <title>{`${titlePrefix} | ${tabTitle}`}</title>;
// };

// export default WindowTitleComp;
