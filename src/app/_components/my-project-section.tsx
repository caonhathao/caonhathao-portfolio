import Image from "next/image";
import orionMobile from "../../../public/img/origon/orion-mobile.png";
import orionTablet from "../../../public/img/origon/orion-tablet.png";
import myfaMobile from "../../../public/img/myfa/myfa-mobile.png";
import myfaEditor from "../../../public/img/myfa/myfa-editor.png";
import squirrel from "../../../public/img/squirrel/quirrel.png"

const content = [
  {
    title: "PERSONAL PROJECT: \nORION RING LANDING PAGE",
    images: [
      { src: orionMobile, alt: "orion-mobile" },
      { src: orionTablet, alt: "orion-tablet" }
    ],
    summary: [
      "Sử dụng NextJS để tạo giao diện.",
      "Tối ưu hoạt ảnh và tài nguyên (hình ảnh) chuẩn SEO",
      "Kết nối đến Google Sheet để lưu thông tin đăng ký."
    ],
    project: {
      at: "GitHub",
      url: "https://github.com/caonhathao/galaxy-ring-landing-page"
    },
    deploy: {
      at: "Vercel",
      url: "https://orion-ring-landing-page.vercel.app/"
    },
    isReverse: false
  },
  {
    title: "PERSONAL PROJECT: \n FAMILY TREE MANAGEMENT",
    images: [
      { src: myfaEditor, alt: "myfa-editor" },
      { src: myfaMobile, alt: "myfa-mobile" }
    ],
    summary: [
      "NextJS đóng vai trò tạo client-server side.",
      "Tối ưu hoạt ảnh và tài nguyên (hình ảnh) chuẩn SEO",
      "Người dùng có thể tạo nhóm, mời thành viên, quản lí gia phả tùy theo vai trò.",
      "Tạo sơ đồ gia phả dễ dàng với thư viện Dagre.js.",
      "Dễ dàng chỉnh sửa bài đăng hệ thống với thư viện Editor.js.",
      "Dự án tiếp tục phát triển để trở thành nơi lưu giữ kỉ niệm gia đình."
    ],
    project: {
      at: "GitHub",
      url: "https://github.com/caonhathao/family-tree-management"
    },
    deploy: {
      at: "Vercel",
      url: "https://family-tree-management.vercel.app/"
    },
    note: "Dự án vẫn đang tiếp tục phát triển và hoàn thiện",
    isReverse: true
  },
  {
    title: "PERSONAL PROJECT: \n SQUIRREL ADVENTURE",
    images: [
      { src: squirrel, alt: "squirrel-mobile-placeholder" }, 
    ],
    summary: [
      "Được xây dựng trên nền tảng Unity",
      "Game mang phong cách đồ họa pixel 2D, thuộc thể loại Platform.",
      "Game kể về một chú sóc nâu đang trên đường vượt qua mọi thử thách để đến được ngôi nhà của hạnh phúc."
    ],
    project: null,
    deploy: {
      at: "itch.io",
      url: "https://caonhathao.itch.io/the-squirrel-adventure"
    },
    isReverse: false
  }
];

const MyProjectSection = () => {
  return (
    <div
      id="my-project"
      className="w-[70%] flex flex-col justify-center items-center gap-5 my-5"
    >
      <h2 className="text-xl font-bold">MY PROJECTS</h2>

      {content.map((item, index) => (
        <section
          key={index}
          className={`shadow-lg rounded-lg w-full h-full flex items-center gap-5 p-5 ${
            item.isReverse ? "flex-row-reverse justify-start" : "flex-row justify-start"
          }`}
        >
          {/* Khối hiển thị hình ảnh */}
          <div className="w-[50%] flex flex-row justify-center gap-3">
            {item.images.map((img, imgIdx) => (
              <Image
                key={imgIdx}
                src={img.src}
                height={450}
                alt={img.alt}
                className="border-2 rounded-2xl"
              />
            ))}
          </div>

          {/* Khối thông tin văn bản */}
          <div className="w-[50%] h-full flex flex-col justify-start items-start gap-3">
            <h2 className="font-bold whitespace-pre-line">{item.title}</h2>
            
            <div className="px-5">
              <p className="font-medium">Summary</p>
              <ul className="list-disc px-5">
                {item.summary.map((text, textIdx) => (
                  <li key={textIdx}>{text}</li>
                ))}
              </ul>
            </div>

            {item.project && (
              <div>
                Project at:{" "}
                <a href={item.project.url} className="text-blue-600 hover:underline">
                  {item.project.at}
                </a>
              </div>
            )}

            {item.deploy && (
              <div>
                Deploy at:{" "}
                <a href={item.deploy.url} className="text-blue-600 hover:underline">
                  {item.deploy.at}
                </a>
              </div>
            )}

            {item.note && (
              <p className="italic text-sm text-gray-600">{item.note}</p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default MyProjectSection;