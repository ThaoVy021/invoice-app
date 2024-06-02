import { Menu, SubMenuProps } from "antd";

export default function SubMenu(props: SubMenuProps) {
  return (
    <Menu.SubMenu
      {...props}
      onTitleClick={({ domEvent, key }) => {
        const previous = document.getElementsByClassName(
          "ant-menu-submenu-title ant-menu-submenu-selected"
        );
        if (previous.length) {
          previous[0].classList.remove("ant-menu-submenu-selected");
        }
        domEvent.currentTarget.classList.add("ant-menu-submenu-selected");
        props?.onTitleClick?.({ key, domEvent });
      }}
    />
  );
}
