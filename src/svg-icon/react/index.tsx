import React, { Suspense } from "react";

const SvgComponent = ({ name, width = 24, height = 24, ...props }: any) => {
  const { children } = props;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div
          style={{
            width: "100px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            color: "white",
            border: "1px solid red",
          }}
        >
          {children}
          <div>测试123</div>
        </div>
      </Suspense>
    </>
  );
};

export { SvgComponent };
