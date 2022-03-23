import React from "react";
import Navbar from "../Navbar";
import Line from "./Line";

type Props = {
  menuSelected: number;
  menus: { name: string }[];
};

const Topbar: React.FC<Props> = ({ menuSelected, menus }) => {
  return (
    <div className="fixed top-6 flex justify-between items-center w-full h-24 pl-8">
      <picture className="w-12 h-12">
        <img src="./shared/logo.svg" alt="Logotipo" />
      </picture>
      <Line />
      <Navbar menuSelected={menuSelected} menus={menus} />
    </div>
  );
};

export default Topbar;
