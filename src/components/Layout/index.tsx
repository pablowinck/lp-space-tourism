import React, { useEffect, useLayoutEffect, useState } from "react";
import Crew from "../Crew";
import Destination from "../Destination";
import Home from "../Home";
import Technology from "../Technology";
import Topbar from "../Topbar";

const defaultMenus = [
  {
    name: "home",
  },
  {
    name: "destination",
  },
  {
    name: "crew",
  },
  {
    name: "technology",
  },
];

const Layout: React.FC = () => {
  const [scrollY, setScrollY] = useState<number | undefined>(0);
  const [menuSelected, setMenuSelected] = useState(0);

  useLayoutEffect(() => {
    const container = document.getElementById("container");
    const handleScroll = () => {
      setScrollY(container?.scrollTop);
    };

    container?.addEventListener("scroll", handleScroll);
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!scrollY) return;
    const newValue = Math.floor(scrollY / innerHeight);
    if (newValue === menuSelected) return;
    setMenuSelected(newValue);
  }, [scrollY]);

  return (
    <>
      <div
        id="container"
        className="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth"
      >
        <Topbar menuSelected={menuSelected} menus={defaultMenus} />
        <div className="snap-always snap-center" id="home">
          <Home />
        </div>
        <div className="snap-always snap-center" id="destination">
          <Destination />
        </div>
        <div className="snap-always snap-center" id="crew">
          <Crew />
        </div>
        <div className="snap-always snap-center" id="technology">
          <Technology />
        </div>
      </div>
    </>
  );
};

export default Layout;
