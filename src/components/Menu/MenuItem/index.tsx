import { Menu, MenuItemProps } from "antd";

export default function MenuItem(props: MenuItemProps) {
  return (
    <Menu.Item
      {...props}
      onClick={({}) => {
        const selectedBefore = document.getElementsByClassName(
          "ant-menu-submenu-title selected"
        )[0];

        if (selectedBefore) {
          selectedBefore.className = selectedBefore?.className.replace(
            "selected",
            ""
          );
        }
      }}
    />
  );
}
