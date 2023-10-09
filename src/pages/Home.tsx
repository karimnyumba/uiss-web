import { Typography } from "@material-tailwind/react";
import udsmlg from "../assets/img/UDSM logo.png";
import udsmHero from "../assets/img/WhatsApp Image 2023-03-13 at 11.27 1.png";
import overlay from "../assets/img/Rectangle 42.png";
import WelcomeCard from "../components/WelcomeCard";
import bgCRS from "../assets/img/pngwing 1.png";
import coca from "../assets/img/logo-coca-cola.png";
import oppo from "../assets/img/logo-oppo.png";
import paypal from "../assets/img/logo-paypal.png";
import redstore from "../assets/img/redstr.png";
import godrey from "../assets/img/logo-godrej.png";
import valuesImages from "../assets/img/computer 1.png";
import CoreValuesCard from "../components/CoreValuesCard";
import eventImage from "../assets/img/evntImage.png";
import { EventCard } from "../components/EventCard";
import stem from "../assets/img/stem.png";
import carrier from "../assets/img/carrier.png";
import joinuspic from "../assets/img/joinus.png";
import jsoverlay from "../assets/img/btoverlay.png";
import Testimonial from "../components/Testimonial";

const VALUES = [
  {
    id: 1,
    title: "Creativity",
    image: valuesImages,
    description:
      "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    id: 2,
    title: "Innovation",
    image: valuesImages,
    description:
      "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    id: 3,
    title: "Integrity",
    image: valuesImages,
    description:
      "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
];

const EVENTS = [
  {
    id: 1,
    title: "Encoded data",
    image: eventImage,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    location: "20th March 2023",
    date: "COICT,Sayansi",
  },
  {
    id: 2,
    title: "Career Guidance",
    image: carrier,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    location: "20th March 2023",
    date: "COICT,Sayansi",
  },
  {
    id: 3,
    title: "Stem training",
    image: stem,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    location: "20th March 2023",
    date: "COICT,Sayansi",
  },
];

function Home() {
  return (
    <div>
      <div className="relative h-screen">
        <img
          src={udsmHero}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 h-full w-full">
          <img
            src={overlay}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="w-4/5 md:w-2/4 text-center">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome UISS
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              <img
                className="h-24 w-24 lg:h-52 lg:w-52 object-cover object-center m-auto"
                src={udsmlg}
                alt="logo image"
              />
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-xl md:text-2xl lg:text-2xl"
            >
              Join a Student Community that Fuels Creativity and Drives
              Innovation
            </Typography>
          </div>
        </div>
      </div>
      <div className="absolute  mt-6  h-[1000px] w-full">
        <img
          src={bgCRS}
          alt="card-image"
          className="h-[1000px] w-full object-cover"
        />
      </div>
      <div className=" -mt-40 h-auto  w-full flex justify-center ">
        <WelcomeCard />
      </div>
      <div className="mt-20 px-5 lg:p-10">
        <Typography
          variant="small"
          className="flex justify-center mb-4 font-bold text-4xl text-white"
        >
          Our Partners
        </Typography>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6  text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
          >
            <img src={redstore} alt="card-image" className=" object-cover" />
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
          >
            <img src={coca} alt="card-image" className=" object-cover" />
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
          >
            <img src={godrey} alt="card-image" className=" object-cover" />
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
          >
            <img src={paypal} alt="card-image" className=" object-cover" />
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
          >
            <img src={oppo} alt="card-image" className=" object-cover" />
          </Typography>
        </div>
      </div>

      <div className="mt-24">
        <Typography
          variant="small"
          className="flex justify-center mb-10 font-bold text-4xl text-white"
        >
          OUR CORE VALUES
        </Typography>
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-center sm:flex-col">
          {VALUES.map((item) => {
            return (
              <CoreValuesCard
                description={item.description}
                image={item.image}
                title={item.title}
                id={item.id}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-24">
        <Typography
          variant="small"
          className="flex justify-center mb-10 font-bold  text-4xl text-white"
        >
          Events
        </Typography>
        <Typography
          variant="small"
          className="flex justify-center mb-10 font-bold  text-xl text-[#FABD13]"
        >
          We aspire Creativity and innovative spirits among the university
          students
        </Typography>
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-center sm:flex-col">
          {EVENTS.map((item) => {
            return (
              <EventCard
                description={item.description}
                image={item.image}
                title={item.title}
                id={item.id}
                location={item.location}
                date={item.date}
              />
            );
          })}
        </div>
      </div>

      <div className="relative mt-20 h-full w-full">
        <div className="absolute inset-0 bg-yellow-500 opacity-50 h-[530px]"></div>
        <div className="h-[530px] w-full">
        <img
          src={joinuspic}
          alt="card-image"
          className="h-full w-fit object-cover"
        />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <Typography
            variant="small"
            className="text-center mb-10 font-bold text-4xl lg:text-5xl text-white"
          >
            Let’s make an impact to the Youth
            <br />
            Together
          </Typography>
          <Typography
            variant="small"
            className="text-center mb-10 font-bold text-2xl lg:text-5xl "
          >
            <div className="bg-[#00000080] p-5 rounded-full">Join Us</div>
          </Typography>
        </div>
      </div>
      <div className="relative h-auto sm:h-[768px] md:h-[896px] lg:h-[1024px]">
  <div className="absolute inset-0 -z-10">
    <img src={jsoverlay} className="h-full w-full object-cover" />
  </div>
  <Typography
    variant="small"
    className="flex justify-center mb-4 font-bold text-3xl sm:text-4xl lg:text-5xl text-black pt-10 sm:pt-20"
  >
    TESTIMONIALS
  </Typography>
  <Typography
    variant="small"
    className="flex justify-center mb-4 font-bold text-xl sm:text-2xl lg:text-3xl"
  >
    We aspire Creativity and innovative spirits among
    <br />
    the university students
  </Typography>
 <div className="mt-20 px-10 mx-auto">
 <Testimonial />
 </div>
</div>

    </div>
  );
}

export default Home;
