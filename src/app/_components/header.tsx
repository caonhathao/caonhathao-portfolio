"use client";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

const navItems = [
  {
    label: "Skills",
    targetId: "my-tech",
  },
  {
    label: "Quests",
    targetId: "my-project",
  },
  {
    label: "Contact",
    targetId: "contact",
  },
];

const Header = () => {
  return (
    <div className="w-full flex justify-center items-center fixed top-0 mt-5 z-50">
      <Menubar className="bg-background">
        <MenubarMenu>
          {navItems.map((item) => (
            <MenubarTrigger
              key={item.targetId}
              className="hover:cursor-pointer"
              onClick={() =>
                document
                  .getElementById(item.targetId)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {item.label}
            </MenubarTrigger>
          ))}
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
export default Header;
