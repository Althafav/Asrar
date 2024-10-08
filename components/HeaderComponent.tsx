import Globals from "@/modules/Globals";

import React from "react";


export default function HeaderComponent() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossOrigin="anonymous"
      />
      <link
        href={`${Globals.BASE_URL}assets/css/main.min.css`}
        rel="stylesheet"
        media="all"
      />

      <link
        href={`${Globals.BASE_URL}assets/css/owl.carousel.min.css`}
        rel="stylesheet"
        media="all"
      />

      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />




    </>
  );
}