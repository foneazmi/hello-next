import Image from "next/image";

const DATA = [
  {
    image: "cake.webp",
    title: "Cake",
    description: "Catatan keuangan",
    link: "https://play.google.com/store/apps/details?id=com.khan.cake",
    icon: "📱",
  },
  {
    image: "scifest.webp",
    title: "Scifest",
    description: "Online ticketing",
    link: "http://scifest.mipa.ub.ac.id/",
    icon: "💻",
  },

  {
    image: "byCoffee.webp",
    title: "ByCoffee",
    description: "Coffee shop app",
    link: "https://play.google.com/store/apps/details?id=com.khan.bycoffee",
    icon: "📱",
  },
  {
    image: "chatbot.webp",
    title: "ChatBot",
    description: "Whatsapp & Telegram chat bot",
    link: "https://web.telegram.org/k/#@NamelessxyzBot",
    icon: "🤖",
  },
  {
    image: "parking.webp",
    title: "Parking App",
    description: "Manage your parking area",
    link: "https://play.google.com/store/apps/details?id=com.semanggi.internal",
    icon: "📱",
  },
  {
    text: "🙉🙊🙈",
    title: "Coming Soon",
    description: "Add more later",
    link: "",
    icon: "🦄",
  },
  //
];

const PortfolioItem = ({
  image,
  title,
  description,
  link,
  icon,
  text,
}: any) => (
  <div className="w-full sm:w-52 md:w-72 aspect-square rounded-lg bg-secondary overflow-hidden hover:scale-105 duration-300 select-none group">
    {image ? (
      <Image
        src={`/images/${image}`}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    ) : (
      <div className=" w-full h-full justify-center items-center flex">
        <h1 className="text-8xl text-center sm:text-6xl md:text-7xl">{text}</h1>
      </div>
    )}
    <div className="sticky bottom-0">
      <div className="h-20 w-full bg-gradient-to-t invisible group-hover:visible from-primary from-50% to-transparent flex-row flex justify-center items-center p-4">
        <div className="flex flex-col flex-1">
          <h1 className="text-primary-content text-lg font-bold">{title}</h1>
          <h1 className="text-primary-content text-xs">{description}</h1>
        </div>
        <div>
          <a href={link || "#"}>
            <h1 className="text-5xl">{icon}</h1>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="overflow-y-auto h-full justify-center items-center flex scrollbar-hide ">
      <div className="overflow-y-auto scrollbar-hide p-4 h-full flex items-center">
        <div className="flex flex-wrap justify-center m-auto gap-4 sm:gap-2 md:gap-4">
          {DATA.map((item, i) => (
            <PortfolioItem key={`${i}-portfolio-item`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
