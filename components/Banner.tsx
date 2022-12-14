import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typing";
import { useRecoilState } from "recoil";

import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, []);
  // console.log(window.innerWidth :Window)
  const truncatetext = (text: any) => {
    return text?.length > 250 ? `${text.substring(0, 250)}...` : text;
  };

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[70vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] -z-10 w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl lg:text-7xl md:text-4xl lg:text-ellipsis font-bold text-ellipsis">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2lg lg:text-2xl">
        {truncatetext(movie?.overview)}
      </p>

      <div className="flex space-x-3 lg:text-ellipsis">
        <button className="bannerBtn bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button
          onClick={() => {
            setShowModal(true);
            setCurrentMovie(movie);
          }}
          className="bannerBtn bg-[gray]/70
         "
        >
          {" "}
          More Info <IoMdInformationCircle />
        </button>
      </div>
    </div>
  );
};

export default Banner;
