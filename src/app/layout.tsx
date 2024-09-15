import { PropsWithChildren } from "react";
import "./globals.css";
import Provider from "./(Provider)";

const Root = ({
  children,
}: PropsWithChildren) => {
  return (
    <html lang="ko">
      <Provider>
        <body className="w-screen h-screen relative">
          {children}
        </body>
      </Provider>
    </html>
  );
};

export default Root;
