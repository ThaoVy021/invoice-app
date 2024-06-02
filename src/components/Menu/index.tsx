import { Menu as AntMenu, MenuProps } from "antd";
import { useState } from "react";

import "./index.scss";

const DEFAULT_SELECTED_KEY = "2";

export default function Menu(props: MenuProps) {
  const [stateOpenKeys, setStateOpenKeys] = useState<string[]>([]);
  const [selectedKey, setSelectedKey] = useState<string>(DEFAULT_SELECTED_KEY);

  const onOpenChange: MenuProps["onOpenChange"] = (openKeys) => {
    if (openKeys.length > 0) {
      setStateOpenKeys([openKeys[openKeys.length - 1]]);
      setSelectedKey(openKeys[openKeys.length - 1]);
      props?.onOpenChange?.([openKeys[openKeys.length - 1]]);
    } else {
      setStateOpenKeys(stateOpenKeys);
      setSelectedKey(stateOpenKeys[0]);
      props?.onOpenChange?.(stateOpenKeys);
    }
  };

  const onClick: MenuProps["onClick"] = (args: any) => {
    const { key } = args;
    setSelectedKey(key);
    props?.onClick?.(args);
  };

  return (
    <AntMenu
      {...props}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      selectedKeys={[selectedKey]}
      onClick={onClick}
    />
  );
}
