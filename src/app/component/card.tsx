import Image from "next/image";

const Card = () => {
  return (
    <>
      <Image
        src={"/front.png"}
        alt={"raya"}
        width={900}
        height={1280}
        className="h-full w-full object-fill rounded-xl"
      ></Image>
    </>
  );
};

export default Card;
