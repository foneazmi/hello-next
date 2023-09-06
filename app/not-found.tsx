import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen bg-base-300 flex-col-reverse justify-center items-center">
      <div className="mockup-browser border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">https://http.cat/404</div>
        </div>
        <div className="flex justify-center p-4 bg-base-200">
          <Link href={"/"}>
            <Image
              src={"https://http.cat/404"}
              alt={"404"}
              className=" rounded-lg"
              width={350}
              height={350}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
