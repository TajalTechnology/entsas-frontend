import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AlignJustify, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { data } from "../public/json/MenuData.json";

type MenuDrawerProps = {};

const MenuDrawer = (props: MenuDrawerProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [openLastMenu, setOpenLastMenu] = useState<number | null>(null);

  const handleSubMenuClick = (index: number) => {
    setOpenSubMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleLastMenuClick = (index: number) => {
    setOpenLastMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative">
      <Drawer direction="left">
        <DrawerTrigger>
          <div className="cursor-pointer flex gap-2 items-center">
            <AlignJustify size={20} strokeWidth={1.5} />{" "}
            <p className="hidden lg:block">Menu</p>
          </div>
        </DrawerTrigger>
        <DrawerContent className="h-full w-full lg:w-1/4 ">
          <DrawerClose>
            <div
              onClick={() => {
                setOpenSubMenu(null);
                setOpenLastMenu(null);
              }}
              className="flex justify-start gap-3 items-center p-8"
            >
              <X size={20} strokeWidth={1.5} /> <p className="text-sm">Close</p>
            </div>
          </DrawerClose>
          <div className="p-8 space-y-8 h-[75%] overflow-y-scroll overflow-x-hidden">
            <div className="space-y-3 text-xl ">
              {data.map((item, idx) => (
                <div key={idx + item.id} className="group">
                  <div
                    className="cursor-pointer hover:underline underline-offset-4 flex justify-between items-center"
                    onClick={() => handleSubMenuClick(idx)}
                  >
                    <p>{item.title ?? ""}</p>
                    <ChevronRight
                      size={20}
                      strokeWidth={1.5}
                      className={`text-white ${
                        openSubMenu === idx ? "transform rotate-90" : ""
                      } group-hover:text-black`}
                    />
                  </div>

                  {item.subMenuList && (
                    <div
                      className={`bg-white top-0 lg:absolute border-l   ${
                        openSubMenu === idx
                          ? "w-full p-6 h-full"
                          : "w-0 p-0 h-0 lg:h-full overflow-hidden"
                      } left-[100%]  space-y-3 transition-all duration-500 ease-in-out lg:pt-24 `}
                    >
                      {item.subMenuList.map((subItem, subIdx) => {
                        return (
                          <div key={subIdx} className="group">
                            <div
                              className="cursor-pointer hover:underline underline-offset-4 flex justify-between items-center"
                              onClick={() => handleLastMenuClick(subIdx)}
                            >
                              <p>{subItem.title ?? ""}</p>
                              <ChevronRight
                                size={20}
                                strokeWidth={1.5}
                                className={`text-white ${
                                  openLastMenu === subIdx
                                    ? "transform rotate-90"
                                    : ""
                                } group-hover:text-black`}
                              />
                            </div>

                            {subItem.lastMenuList && (
                              <div
                                className={`bg-white top-0 lg:absolute border-l   ${
                                  openLastMenu === subIdx
                                  ?"w-full p-6 h-full"
                                  : "w-0 p-0 overflow-hidden lg:overflow-auto h-0 lg:h-full" 
                                } left-[100%]  space-y-3 transition-all duration-500 ease-in-out lg:pt-24 `}
                              >
                                {subItem.lastMenuList.map(
                                  (lastItem, lastIdx) => (
                                    <div
                                      key={lastIdx}
                                      className="flex justify-between items-center"
                                    >
                                      <p>{lastItem.title ?? ""}</p>
                                    </div>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 space-y-2 border-t text-sm">
            <p className=" cursor-pointer">Sustainability</p>
            <p className=" cursor-pointer">Find a Store</p>
            <p className="cursor-pointer">Ship: United States</p>
            <p className="cursor-pointer">Can we help you?</p>
            <p className="cursor-pointer">+1.866.VUITTON</p>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
