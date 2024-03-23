import React, { useState, useEffect } from "react";
import "./AnimeByID.css";
// slide
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// icon
import { AiFillLike } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";

import { FaStar } from "react-icons/fa";

import Nav from "../Nav/Nav";
import Loading from "../loading/Loading";
import { base_URl } from "../../Api/ApI";
import { useParams } from "react-router";
import { Fade, Rotate } from "react-awesome-reveal";

export default function Slide() {

// ABI
const { id } = useParams();
const ID_URL = `${base_URl}/anime/${id}`;
const pictures_URL = `${base_URl}/anime/${id}/pictures`;
const videos_URL = `${base_URl}/anime/${id}/videos`;
const characters_URL = `${base_URl}/anime/${id}/characters`;
const episodes_URL = `${base_URl}/anime/${id}/episodes`;



  const [TopData, setdata] = useState([]);
  const [characters, setcharacters] = useState([]);
  const [Animeepisodes, setepisodes] = useState([]);
  const [promoUrl, setpromoUrl] = useState("");
  const [promoUrlTitleUrl, setpromoUrlTitleUrl] = useState("");
  const [pictures, setpictures] = useState([]);
  const [loading, setloading] = useState(true);
 

 

  // ظظظظظظظظ

  // ... الاستيرادات الأخرى

  // ... الحالات (states) والثوابت

  // تعريف الدالة fetchData باستخدام useCallback
  // const fetchData = useCallback(async () => {
  //   try {
  //     setloading(true);
  //     const [
  //       animeData,
  //       animeVideos,
  //       animeCharacters,
  //       animePictures,
  //       animeEpisodes,
  //     ] = await Promise.all([
  //       fetch(ID_URL).then((res) => res.json()),
  //       fetch(videos_URL).then((res) => res.json()),
  //       fetch(characters_URL).then((res) => res.json()),
  //       fetch(pictures_URL).then((res) => res.json()),
  //       fetch(episodes_URL).then((res) => res.json()),
  //     ]);

  //     // تحديث الحالات بالبيانات المجلوبة
  //     setdata(animeData.data);
  //     setpromoUrl(animeVideos.data.promo[0].trailer.embed_url);
  //     setpromoUrlTitleUrl(animeVideos.data.promo[0].title);
  //     setcharacters(animeCharacters.data);
  //     setpictures(animePictures.data);
  //     setepisodes(animeEpisodes.data);
  //     setloading(false);
  //   } catch (error) {
  //     console.error("حدث خطأ أثناء جلب البيانات:", error);
  //     setloading(false);
  //   }
  // }, [ID_URL, videos_URL, characters_URL, pictures_URL, episodes_URL]); // الاعتمادات

  // useEffect(() => {
  //   if (id) {
  //     fetchData(); // استدعاء الدالة المخزنة
  //   }
  // }, [id, fetchData]); // تأكد من إضافة fetchData إلى الاعتمادات هنا

  useEffect(() => {
    let isMounted = true; // متغير للتحقق من حالة التحميل

    async function fetchData() {
      try {
        setloading(true);
        const [animeData, animeVideos, animeCharacters, animePictures, animeEpisodes] = await Promise.all([
          fetch(ID_URL).then(res => res.json()),
          fetch(videos_URL).then(res => res.json()),
          fetch(characters_URL).then(res => res.json()),
          fetch(pictures_URL).then(res => res.json()),
          fetch(episodes_URL).then(res=>res.json()),
          
        ]);

        if (isMounted) {
          setdata(animeData.data);
          setpromoUrl(animeVideos.data.promo[0].trailer.embed_url);
          setpromoUrlTitleUrl(animeVideos.data.promo[0].title);
          setcharacters(animeCharacters.data);
          setpictures(animePictures.data);
          setepisodes(animeEpisodes.data);
          // console.log(TopData.images.jpg.large_image_url);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) {
          
          setloading(false);
        }
      }
    }

    fetchData();

    // دالة التنظيف
    return () => {
      isMounted = false; // تعيين المتغير إلى false عند إلغاء تحميل المكون
    };
  }, [id]); // يعتمد التأثير على معرف الأنمي

  //show Anime  Animeisodes
  const showAnimeepisodes =
    Animeepisodes &&
    Animeepisodes.map((e, index) => {
      return (
        <Fade direction="up" cascade duration={500} key={index} triggerOnce>
          <div
            id="pisodes"
            //  className="col-sm-12 col-md-4 my-4 "
          >
            <h4 className="text-center w-100 d-block"> episode {e.mal_id}</h4>

            <div style={{ height: "80%" }} className=" w-100 borderColor  ">
              {TopData.images && (
                <img
                  className="w-100 h-100"
                  src={TopData.images.jpg.image_url}
                  alt={e.title}
                />
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center px-2">
              <span>pisode title :{e.title.slice(0, 20)}...</span>
              <span className=" d-flex align-items-center">
                <FaStar className="bg-yellow" color="yellow" />
                {e.score}
              </span>
            </div>
          </div>
        </Fade>
      );
    });
  //show Anime cover images
  const imges =
    pictures &&
    pictures.map((e, index) => {
      return (
        <div style={{ height: "100%" }} key={index}>
          <img className="w-100 h-100" src={e.jpg.large_image_url} alt="" />
        </div>
      );
    });
  //show Anime  characters
  const showcharacters =
    characters &&
    characters.slice(0, 6).map((e, index) => {
      return (
        <Fade direction="up" cascade duration={500} key={index} triggerOnce>
          <div id="pisodes" style={{ height: "200px " }} className="">
            <div style={{ height: "80%" }} className="w-100 borderColor">
              <img
                className="w-100 h-100"
                src={e.character.images.jpg.image_url}
                alt=""
              />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>{e.character.name}</span>
              <span className=" d-flex align-items-center">
                <AiFillLike color="blue" />
                {e.favorites}
              </span>
            </div>
          </div>
        </Fade>
      );
    });
    console.log(pictures);
  return (
    <>
      {loading && <Loading />}
      <Nav />
      <div className=" pb-5 bg-dark text-white w-100">
        <div className="container ">
          {/* Carousel anime image  */}
          <div id="Carousel"
          //  style={{backgroundImage:TopData.images && !imges && `url(${TopData.images.jpg.large_image_url})` }} 
           style={{backgroundImage:  !imges && `url(${TopData.images.jpg.large_image_url})` }} 
           className="position-relative ">
            {pictures && pictures.length >0 ? (
              <Carousel
                transitionTime={500}
                showArrows={true}
                showThumbs={false}
                autoPlay={true}
              >
                {imges}
              </Carousel>
            ):(<div style={{ height: "100%" }} >
            <img className="w-100 h-100" src={require('https://cdn.myanimelist.net/images/anime/1245/116760l.jpg')} alt="" />
          </div>)}
            {/* anime image in the middle srart */}
            {/* <Rotate triggerOnce duration={500} direction="up"> */}
              <div
                id="AnimeBeydi"
                className=" d-none d-md-block mx-auto "
                style={{ width: "25rem" }}
              >
                <div className="borderColor ">
                  {TopData && TopData.images ? (
                    <img
                      id="imge"
                      src={TopData.images.jpg.image_url}
                      className="w-100 h-100 "
                      alt={TopData.title}
                    />
                  ) : (
                    ""
                  )
                  }
                </div>
              </div>
            {/* </Rotate> */}

            {/* anime image in the middle end */}
          </div>
          {/* Carousel anime end  */}

          {/* Anime information start*/}
          <div className="row">
            <div className="col-sm-12 col-md-8 textAime">
              <Fade
                triggerOnce
                cascade
                duration={1000}
                direction="left"
                damping={0.1}
              >
                <h1 className="py-4">{TopData.title}</h1>
                <div className="d-flex justify-content-between">
                  <span id="rating" className="mx-2 px-2">
                    {TopData.rating}
                  </span>
                  <span
                    id="rating"
                    className="mx-2 px-2 d-flex align-items-center"
                  >
                    <FaStar />
                    {TopData.score}
                  </span>
                </div>

                <span id="background" className="m-2 py-2">
                  {TopData.background}
                </span>
                <p className="pt-2">{TopData.synopsis}</p>
              </Fade>
            </div>

            {/* anemi imge s */}
            <div className="col-sm-12 col-md-4 py-4">
              <Fade
                triggerOnce
                cascade
                duration={1000}
                direction="right"
                damping={0.1}
              >
                <div
                  id="card"
                  className="  position-relative m-auto "
                  style={{ width: "14rem" }}
                >
                  <div className="position-absolute top-0 left-0 overflow-hidden h-100 w-100">
                    <img
                      id="imge"
                      src={TopData.images && TopData.images.jpg.image_url}
                      className=" "
                      alt={TopData.title}
                    />
                    {/* {/* {e.synopsis && <p id="cardText" className="position-absolute px-2 w-100 m-0">{e.synopsis.slice(0,200)}</p>}    */}
                  </div>

                  <div
                    id="cartBody"
                    className=" w-100 h-100 position-relative z-3"
                  >
                    <div className="px-2 w-100 position-absolute  d-flex justify-content-between align-items-center ">
                      <span>{TopData.year}</span>
                      <span>
                      <FaStar color="#e3d704" />
                        {TopData.score}</span>
                    </div>
                    <div
                      id="anemiContent"
                      className="px-2 position-absolute  d-flex justify-content-between align-items-center my-2 px-1 w-100"
                    >
                      <span
                        id="cardSpanColor"
                        className=" d-flex  align-items-center"
                      >
                        {" "}
                        <IoMdTime />
                        {TopData.duration}
                      </span>
                      <span className=" d-flex  align-items-center">
                        <AiFillLike color="#0d6efd" />
                        {TopData.favorites}
                      </span>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            {/* anemi imge end */}
          </div>
          {/* Anime information end*/}

          {/* anime promo start */}
          <Fade triggerOnce cascade damping={0.1} direction="up">
            <div className="row p-0">
              <h2 id="promo" className="text-center text-white p-3">
                <span>promo</span> {promoUrlTitleUrl}
              </h2>
              {promoUrl ? (
                <div className="borderColor position-relative mt-5 h-auto">
                  <iframe
                    style={{ zIndex: "999", display: "block" }}
                    className=" position-relative "
                    width="100%"
                    height="400"
                    src={promoUrl && promoUrl}
                    title={promoUrlTitleUrl}
                    allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              ):(<div className="w-100 p-4">
              <p> sorry there is a problem with the servedr</p>
            </div>)}
            </div>
          </Fade>
          {/* anime promo end */}

          {/* Anime characters start */}
          <div className="row py-5">
            <Fade triggerOnce cascade direction="up">
              <h2 id="promo" className="text-center text-white p-3 my-5">
                <span>Anime characters</span>
              </h2>
            </Fade>
            <div className=" characters d-flex flex-wrap justify-content-around">
              <Fade direction="up" triggerOnce cascade damping={0.1}>
                {showcharacters &&showcharacters.length >0 ?(showcharacters)
                :(<div className="w-100 p-4">
                  <p> sorry there is a problem with the servedr</p>
                </div>)}
              </Fade>
            </div>
          </div>
          {/* Anime characters end  */}

          {/* Anime episodes start  */}
          <div className="row py-5 ">
            <h2 id="promo" className="text-center text-white p-3 my-1">
              <span>Anime episodes</span>
            </h2>
            <div  className=" d-flex flex-wrap justify-content-around">
              <Rotate triggerOnce cascade damping={0.1}>
                {showAnimeepisodes && showAnimeepisodes.length >0 ?(showAnimeepisodes)
                :(<div className="w-100 p-4">
                  <p> sorry there is a problem with the servedr</p>
                </div>) }
              </Rotate>
            </div>
          </div>
          {/* Anime episodes end  */}
        </div>
      </div>
    </>
  );
}
