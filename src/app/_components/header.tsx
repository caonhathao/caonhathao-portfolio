"use client"
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
const Header = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger
            className="hover:cursor-pointer"
            onClick={() =>
              document
                .getElementById("my-tech")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Kĩ năng
          </MenubarTrigger>
          <MenubarTrigger className="hover:cursor-pointer"
            onClick={() =>
              document
                .getElementById("my-project")
                ?.scrollIntoView({ behavior: "smooth" })
            }>Dự án của tôi</MenubarTrigger>
          <MenubarTrigger>Dự án tham gia</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
export default Header;
