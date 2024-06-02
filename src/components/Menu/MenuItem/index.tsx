import { Menu, MenuItemProps } from "antd";

export default function MenuItem(props: MenuItemProps) {
  return (
    <Menu.Item
      {...props}
      onClick={(...args) => {
        const previous = document.getElementsByClassName(
          "ant-menu-submenu-title ant-menu-submenu-selected"
        );
        if (previous.length) {
          previous[0].classList.remove("ant-menu-submenu-selected");
        }
        props?.onClick?.(...args);
      }}
    />
  );
}
