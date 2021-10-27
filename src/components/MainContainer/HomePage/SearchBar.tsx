import React, { ReactElement } from "react";





export default function SearchBar():ReactElement {
  return (
    <>
      <input
      //className="rounded-lg bg-white bg-opacity-0 placeholder-white placeholder-opactiy-10"
        type="search"
        placeholder="....Search for City"
      ></input>
    </>
  );
}
