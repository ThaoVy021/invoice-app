import { Menu as AntMenu, MenuProps } from "antd";
import { useState } from "react";

export default function Menu(props: MenuProps) {
  const [stateOpenKeys, setStateOpenKeys] = useState<string[]>([]);

  const onOpenChange: MenuProps["onOpenChange"] = (openKeys) => {
    if (
      JSON.stringify(stateOpenKeys.sort((a, b) => a.localeCompare(b))) !==
      JSON.stringify(openKeys.sort((a, b) => a.localeCompare(b)))
    ) {
      setStateOpenKeys(openKeys);
    }
  };

  return <AntMenu {...props} onOpenChange={onOpenChange} />;
}
