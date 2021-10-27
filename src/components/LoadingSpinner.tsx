import React, { ReactElement } from "react";

export default function LoadingSpinner():ReactElement {
  return (
    <div className="my-9 flex justify-center items-center flex-col">
      <div className="py-md">Loading</div>
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}
