import { Menu, SubMenuProps } from "antd";

export default function SubMenu(props: SubMenuProps) {
  return (
    <Menu.SubMenu
      {...props}
      onTitleClick={({ domEvent }) => {
        const selectedBefore = document.getElementsByClassName(
          "ant-menu-item ant-menu-item-selected"
        )[0];

        if (selectedBefore && selectedBefore !== domEvent.currentTarget) {
          selectedBefore.className = selectedBefore?.className.replace(
            "selected",
            ""
          );
        }
        domEvent.currentTarget.classList.add("selected");
      }}
    />
  );
}
