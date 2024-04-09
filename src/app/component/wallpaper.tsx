import Image from "next/image";
export default function Wallpaper() {
  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src={"/bg.jpg"}
          alt={"raya"}
          width={2000}
          height={2000}
          className="object-contain"
        ></Image>
      </div>
    </>
  );
}
