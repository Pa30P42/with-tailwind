import Image from "next/image";
import localFont from "next/font/local";
import CalendarIcon from "@/components/icons/CalendarIcon";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const isLeft = true;
  return (
    <div className="p-6 bg-green-200">
      <h1 className="text-3xl	font-semibold tracking-widest">Card</h1>
      <div className={`flex gap-4`}>
        <div className="w-[200px] h-[100px] bg-primary m-4" />
        <div className={`w-[200px] h-[100px] bg-yellow-600 m-4`} />
      </div>
      <div className="bg-white rounded-xl py-5 w-[327px]">
        <div className="flex justify-between px-6 pb-4">
          <h3 className="text-primary font-semibold text-sm">Хакатон</h3>
          <div className="rounded-full bg-secondary w-6 h-6 flex items-center justify-center">
            <CalendarIcon />
          </div>
        </div>
        <div className="h-px bg-border w-full" />
        <div className="px-6 ">
          <div>
            <div>
              <h3>More Tech</h3>
              <p>20 октября 2021</p>
            </div>
            <button>Сайт</button>
          </div>
          <ul>
            <li>Дизайн</li>
            <li>Data Science</li>
            <li>AR</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet
            feugiat ut integer tincidunt sed. Fusce vulputate sed commodo, sed
            lorem. Mi semper orci, semper vestibulum.
          </p>
          <ul>
            <li>Есть отбор</li>
            <li>Регистрация до 21.09</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
