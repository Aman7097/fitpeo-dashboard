// "use client";

// import React, { useState, useEffect } from "react";
// import { useGlobalContext } from "@/context/store";
// import LocalStore from "@/constant/enums/LocalStorage";

// const FaviconImageComp = () => {
//   const { globalHeaderName, globalFaviconImage } = useGlobalContext();
//   const [tabImgUrl, setTabImgUrl] = useState<string>("/LogoFavicon.ico");

//   useEffect(() => {
//     if (globalFaviconImage) {
//       setTabImgUrl(globalFaviconImage);
//     } else {
//       const localImg = localStorage.getItem(LocalStore.FAVICON_IMAGE);
//       if (localImg && localImg !== "null") {
//         setTabImgUrl(localImg);
//       }
//     }
//   }, [globalHeaderName, globalFaviconImage]);

//   return (
//     <link
//       rel="icon"
//       href={tabImgUrl}
//       sizes={"16x16 20x20 24x24 28x28 32x32 64x64"}
//       type="image/x-icon"
//     />
//   );
// };

// export default FaviconImageComp;
