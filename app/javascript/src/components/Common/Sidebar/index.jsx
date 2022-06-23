import React, { useState } from "react";

import { LeftArrow, RightArrow } from "neetoicons";
import { Sidebar as NeetoUISidebar } from "neetoui/layouts";

import { APP_NAME, SIDENAV_LINKS, AVATAR_IMAGE_URL } from "./constants";

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const bottomLinks = [
    {
      label: "My Profile",
    },
    {
      label: "Logout",
    },
  ];

  const handleCollapse = e => {
    e.preventDefault();
    setIsSidebarCollapsed(prevIsSidebarCollapsed => !prevIsSidebarCollapsed);
  };

  return (
    <NeetoUISidebar
      isCollapsed={isSidebarCollapsed}
      navLinks={SIDENAV_LINKS}
      appName={APP_NAME}
      profileInfo={{
        name: "Oliver Smith",
        imageUrl: AVATAR_IMAGE_URL,
        email: "oliver.smith@gmail.com",
        bottomLinks,
      }}
      footerLinks={[
        {
          icon: !isSidebarCollapsed ? LeftArrow : RightArrow,
          label: "Close Sidebar",
          to: "/unique",
          onClick: handleCollapse,
        },
      ]}
    />
  );
};

export default Sidebar;
