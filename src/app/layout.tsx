import { PropsWithChildren } from "react";
import "./globals.css";
import Provider from "./(Provider)";

const Root = ({
  children,
}: PropsWithChildren) => {
  return (
    <html lang="ko">
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  );
};

export default Root;
