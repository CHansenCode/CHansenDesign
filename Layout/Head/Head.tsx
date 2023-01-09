import React from "react";
import Head from "next/head";

export const Header = ({ children, ...props }: Props) => {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

type Props = {
  children?: React.ReactNode;
};
