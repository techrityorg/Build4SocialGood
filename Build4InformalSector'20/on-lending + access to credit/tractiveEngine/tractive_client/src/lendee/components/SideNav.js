import React from "react";
import { Link, NavLink, useHistory, useRouteMatch } from "react-router-dom";

import "./SideNav.css";

const SideNav = () => {
  const NavItems = [
    {
      pathD: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      point: "9 22 9 12 15 12 15 22",
      title: "Activity",
      path: "activity",
    },
    {
      pathD:
        "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      title: "Patients",
      path: "patients",
    },
    {
      pathD:
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    title: "Messages",
    path: "messages",
    },
    {
      pathD:
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    title: "Schedule",
    path: "schedule",
    },
    {
      pathD:
        "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
      title: "Notifications",
      path: "nurse-notifications",
    },
    {
      pathD:
        "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      pathD2: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Settings",
      path: "nurse-settings",
    },
  ];
  return (
    <div className="col-sm-2 pr-0" id="nurse-side-nav">
      <div className="py-3 px-4">
        <Link to="/">helpingDoc</Link>
      </div>
      <ul className="side-nav-items">
        {NavItems.map((navitem) => {
          return (
            <li key={navitem.path} className="mb-3">
              <NavLink
                activeClassName="active"
                className="pl-4 btn d-flex sidenav-item w-100 align-items-center"
                type="button"
                to={`/nurse-dashboard/${navitem.path}`}
              >
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="mr-2"
                  clipRule
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={navitem.pathD}
                  />
                  {navitem.pathD2 && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={navitem.pathD2}
                    />
                  )}
                  {navitem.point && (
                    <polyline points={navitem.point}></polyline>
                  )}
                </svg>
                <span className="nav-item-title d-md-block">
                  {navitem.title}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
