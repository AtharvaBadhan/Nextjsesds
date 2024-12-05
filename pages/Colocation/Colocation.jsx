"use client";
import power_first from "../../public/colocation/colocation-img/first.jpg";
import power_second from "../../public/colocation/colocation-img/second.jpg";
import power_third from "../../public/colocation/colocation-img/third.jpg";
import power_fourth from "../../public/colocation/colocation-img/fourth.jpg";
import power_fifth from "../../public/colocation/colocation-img/fifth.jpg";
import Data_center_rack from "../../public/colocation/data-rack.svg";
import { GoCheckCircle } from "react-icons/go";
import DC_map from "../../public/colocation/india-location.jpg";
import { useParams } from "next/navigation";
import why_choose_esds from "../../public/colocation/why-Choose-esds.png";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import {
  useDebugValue,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap";
import { ScrollToPlugin} from "gsap/all";
import CountUp from "react-countup";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Partner from '../Partner/Partner'
// import HeaderTwo from '../Navbar/HeaderTwo'
// import banner_video from "../../public/banner-video.mp4";
// import HeadingBottomLine from '../../components/ui/HeadingBottomLine'
// import SparklesPreview2 from '../../components/ui/subheading text effect/bannerSubheading'
import styles from "./Colocations.module.css";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import * as demoActions from '../../Redux/Actions/DemoActions.js'
// import Header from '../Header/Header'
import Topsection from '../FinalFooter/Topsection'
import FooterFinal from '../FinalFooter/FooterFinal';
import partner1 from "../../public/colocation/logo1.png";
import partner2 from "../../public/colocation/logo2.png";
import partner3 from "../../public/colocation/logo3.png";
import partner4 from "../../public/colocation/logo4.png";
import partner5 from "../../public/colocation/logo5.png";
import partner6 from "../../public/colocation/logo6.png";
// import ScrollIndicator from '../../components/ui/ScrollIndicator'
// import Loader from '../Loader/Loader'
// import MobileNavbar from '../Navbar/MonileNavbar'
// import { useDispatch } from 'react-redux'
import { useRouter } from "next/compat/router";

export default function Colocation() {
  let [startCounter, setStartCounter] = useState(false);
  let [playOnce, setPlayOnce] = useState(false);
  let logos = [partner1, partner2, partner3, partner4, partner5, partner6];


  // let dispatch = useDispatch();
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  let { city } = useParams();
  const pauseTimestamp = 3;
  const router = useRouter();
  const videoRef = useRef(null);

  const contactNavigation = () => {
    router.push("/contact-us"); // This navigates to /contact-us in Next.js
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 500) {
        if (document.getElementById("scroll-down")) {
          document.getElementById("scroll-down").style.display = "none";
        }
      } else {
        if (document.getElementById("scroll-down")) {
          document.getElementById("scroll-down").style.display = "block";
        }
      }
    });
  }, []);
  useEffect(() => {
    // Set a 3-second delay before playing the video
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 3000);

    // Clear the timer if the component unmounts before the delay
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    document.querySelectorAll(".DC_rack").forEach((div1) => {
      div1.addEventListener("mouseover", (e) => {
        e.target.parentElement.nextSibling.classList.remove(`${styles.hide_map_dc}`);
      });
      div1.addEventListener("mouseleave", (e) => {
        // console.log()
        e.target.parentElement.children[1].classList.add(`${styles.hide_map_dc}`);
      });
    });
  }, []);
  // useEffect(() => {
  //   dispatch({ type: demoActions.UPDATE_NAVBAR, payload: false });
  // }, []);
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    if (city) {
      let targetHeight = document.getElementById("DC_map").offsetHeight * 6;

      gsap.to(window, {
        scrollTo: targetHeight,
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(window, {
        scrollTo: 0,
        duration: 1,
        ease: "power2.inOut",
      });
    }

    // Define your media queries and corresponding animations
    mm.add("(min-width: 1199px)", () => {
      let t3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".powerOfcolocation",
          start: "top top",
          end: () => innerHeight * 4,
          pin: true,
          scrub: 1,
          // markers: true,
          onLeave: () => {
            document.getElementById("powerOfcolocation").style.position =
              "relative";
          },
        },
      });
      t3.to(`.${styles.slide_list_inner}`, { x: "-70vw", ease: "power1.inOut" });

      let t4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".powerOfcolocation",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
          // markers : true
        },
      });
      t4.to(
        `.${styles.third_section_head}`,
        { y: 0, opacity: 1, duration: 2, skewY: 0 },
        "key1"
      );
      t4.to(
        `.${styles.third_section_question}`,
        { y: 0, opacity: 1, duration: 2, skewY: 0 },
        "key1"
      );
      t4.to(
        `.${styles.third_section_subtitle}`,
        { delay: 0.5, y: 0, opacity: 1, duration: 2, skewY: 0 },
        "key2"
      );
      t4.to(
        `.${styles.third_section_head}`,
        { y: 40, opacity: 0, duration: 1, skewY: -2 },
        "key2"
      );
      t4.to(
        `.${styles.third_section_question}`,
        { y: 40, opacity: 0, duration: 1, skewY: -2 },
        "key2"
      );

      let t5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".DC_map",
          start: "top top",
          end: () => innerHeight * 7,
          pin: true,
          scrub: 1,
          // markers: true,
        },
      });
      t5.to(
        `.${styles.map_image}`,
        { scale: 1.8, duration: 2, ease: "power1.inOut" },
        "key5"
      );
      t5.fromTo(
        ".Data-Center",
        { x: 0, opacity: 0 },
        { x: 0, opacity: 5, duration: 2, ease: "power1.inOut" },
        "key4"
      );
      t5.to(".Data-Center", { opacity: 8, duration: 4 }, "key6");

      gsap.fromTo(
        ".MSS-banner-center-char",
        { y: -30, opacity: 0, skewY: -12 },
        {
          opacity: 1.5,
          y: 0,
          skewY: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power1.inOut",
        }
      );

      let t9 = gsap.timeline({
        scrollTrigger: {
          trigger: ".world-class-data-center",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          // markers: true,
          onUpdate: () => {
            setStartCounter(true);
          },
        },
      });
      document.querySelectorAll(`.${styles.colo_heading}`).forEach((element) => {
        gsap.fromTo(
          element,
          { skewY: -2, y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            skewY: 0,
            scrollTrigger: {
              trigger: element,
              start: "top 50%",
              end: "bottom top",
            },
          }
        );
      });

      return () => {
        // if(t1) t1.kill()
        if (t3) t3.kill();
        if (t4) t4.kill();
        if (t5) t5.kill();
        // if(t8) t8.kill()
        if (t9) t9.kill();

        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });

    mm.add("(max-width : 1024px)", () => {
      gsap.fromTo(
        ".MSS-banner-center-char",
        { y: -20, opacity: 0, skewY: 8 },
        {
          opacity: 1.5,
          y: 0,
          skewY: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power1.inOut",
        }
      );
      document.querySelectorAll(`.${styles.colo_heading}`).forEach((element) => {
        gsap.fromTo(
          element,
          { skewY: -2, y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            skewY: 0,
            scrollTrigger: {
              trigger: element,
              start: "top 60%",
              end: "bottom top",
            },
          }
        );
      });
      let t9 = gsap.timeline({
        scrollTrigger: {
          trigger: ".world-class-data-center",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          // markers: true,
          onUpdate: () => {
            setStartCounter(true);
          },
        },
      });

      return () => {
        if (t9) t9.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);
  return (
    <>
      <div className={styles.Colocation}>
        {/* <MobileNavbar /> */}
        <ReactLenis
          root
          options={{
            smoothWheel: true,
            duration: 3,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
          }}
        >
          {/* <Header />
        <Loader centerText={"Colocation"} /> */}
          {/* {window.innerWidth >= 1024 ? <ScrollIndicator /> : ""} */}

          <section className={styles.colocationBanner} id="Colocation-banner" >
            
              <video autoPlay muted loop className={styles.bannerVideo}>
              <source src="/banner-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
            <div className={styles.bannerContent}>
              <div className={styles.bannerContnetInner}>
              <div className={styles.headingBanner}>
              <div>
                    <div className={styles.undefined}>
                      <div className="d-flex inline-block MSS-banner-center-word">
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          W
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          e
                        </div>
                        &nbsp;
                      </div>
                      <div className="d-flex inline-block MSS-banner-center-word">
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          M
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          a
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          n
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          a
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          g
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          e
                        </div>
                        &nbsp;
                      </div>
                      <div className="d-flex inline-block MSS-banner-center-word">
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          Y
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          o
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          u
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          r
                        </div>
                        &nbsp;
                      </div>
                      <div className="d-flex inline-block MSS-banner-center-word">
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          D
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          a
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          t
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          a
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          ,
                        </div>
                        &nbsp;
                      </div>
                      <div className="d-flex inline-block MSS-banner-center-word">
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          W
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          h
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          i
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          l
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          e
                        </div>
                        &nbsp;
                      </div>
                      <div className="d-flex inline-block MSS-banner-center-word">
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          Y
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          o
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          u
                        </div>
                        &nbsp;
                      </div>
                      <div className="d-flex inline-block MSS-banner-center-word">
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          G
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          a
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          i
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          n
                        </div>
                        &nbsp;
                      </div>
                      <div className="d-flex inline-block MSS-banner-center-word">
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          F
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          r
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          e
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          e
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          d
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          o
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          m
                        </div>
                        &nbsp;
                      </div>
                      <div className="d-flex inline-block MSS-banner-center-word">
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          T
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          o
                        </div>
                        &nbsp;
                      </div>
                      <div className="d-flex inline-block MSS-banner-center-word">
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          G
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          r
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          o
                        </div>
                        <div
                          className="dark:text-white text-white inline-block MSS-banner-center-char"
                             style={{
    transform: "translate(0px, 0px) rotate(0deg) scale(1)",  // Combined transform
    opacity: 1.5,
  }}
                        >
                          w
                        </div>
                        &nbsp;
                      </div>
                    </div>
                  </div>
              </div>
            <div className={styles.Colo_CTA_btn}>
              <button
                onClick={() => {
                  navigate("/contact_us");
                }}
                className={styles.CTA_button}
                data-text="Awesome"
              >
                <span className={styles.actual_text}>
                  &nbsp;Get Started&nbsp;
                </span>
                <span aria-hidden="true" className={styles.hover_text}>
                      &nbsp;Get&nbsp;Started&nbsp;
                    </span>
              </button>
            </div>
            <div style={{ width: "100%" }} className={"button-bottom relative"}>
              <div
                className={
                  "absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent banner-cta-line"
                }
                style={{
                  width: "11vw",
                  right: "0",
                  marginLeft: "auto",
                  marginTop: "1.5vh",
                }}
              />
            </div>
            </div>
            </div>       
          </section>
          <section className={styles.colo_boom}>
            <div className={styles.colo_boom_container}>
              <div className={styles.heading}>
                <h3 className={`${styles.colo_heading} colo_heading `}>
                  What's Fueling The Indian Data Center Colocation Boom?
                </h3>
                {/* <HeadingBottomLine /> */}
              </div>
              <div className={styles.description}>
                <p>
                  The Indian data center market is experiencing a red-hot surge,
                  particularly in the Colocation services segment. With a
                  staggering{" "}
                  <span>
                    {" "}
                    CAGR of 20%. Indian Data Center & Colocation services{" "}
                  </span>{" "}
                  market is currently at a annual revenue of $3 Billion and
                  projected to reach a colossal{" "}
                  <span> $10 Billion by 2030.</span> This growth translates to a
                  massive data center capacity of <span>5GW</span> by the same
                  year. With AI workloads taking over the Data Center &
                  Colocation services business, our CMD forecasts that the Data
                  Center capacity may cross even 10GW by 2030.
                </p>
              </div>
            </div>
          </section>
          <section id="powerOfcolocation" className={styles.powerOfcolocation}>
            <div className={styles.PowerOfColocation_innerdiv}>
              <div className={styles.colocation_header}>
                <h3 className={styles.third_section_head}>
                  The Colocation Need For Your AI Servers Is Real,{" "}
                </h3>
                <p className={styles.third_section_question}>
                  How can your business get the best Data Center partner?
                </p>
                <h3 className={styles.third_section_subtitle}>
                  Get Access To A Secure, Compliant & Scalable And Trustworthy
                  Indian Data Center Infrastructure{" "}
                </h3>
              </div>  
              <div className={styles.Horizontol_slider}>
                <div className={styles.slide_list}>
                  <div className={`${styles.slide_list_inner} slide_list_inner `}>
                    <div className={styles.slide_item}>
                      <div className={styles.image_div}>
                        <Image
                          src="/colocation/colocation-img/first.jpg"
                          alt="Secure Storage Facilities"
                          width={500}
                          height={300}
                        />
                      </div>
                      <div className={styles.slide_title}>
                        Secure Storage Facilities
                      </div>
                    </div>
                    <div className={styles.slide_item}>
                      <div className={styles.image_div}>
                        <Image
                          src="/colocation/colocation-img/second.jpg"
                          alt="24X7 Surveillance & In House Support"
                          width={500}
                          height={300}
                        />
                      </div>
                      <div className={styles.slide_title}>
                        24X7 Surveillance & In House Support
                      </div>
                    </div>
                    <div className={styles.slide_item}>
                      <div className={styles.image_div}>
                        <Image
                          src="/colocation/colocation-img/third.jpg"
                          alt=" Well Structured Cabling"
                          width={500}
                          height={300}
                        />
                      </div>
                      <div className={styles.slide_title}>
                         Well Structured Cabling{" "}
                      </div>
                    </div>

                    <div className={styles.slide_item}>
                      <div className={styles.image_div}>
                        <Image
                          src="/colocation/colocation-img/fourth.jpg"
                          alt="Secured Caging Colocation Services"
                          width={500}
                          height={300}
                        />
                      </div>
                      <div className={styles.slide_title}>
                        Secured Caging Colocation Services{" "}
                      </div>
                    </div>
                    <div className={styles.slide_item}>
                      <div className={styles.image_div}>
                        <Image
                          src="/colocation/colocation-img/fifth.jpg"
                          alt="Scalability & BMS Access Facility"
                          width={500}
                          height={300}
                        />
                      </div>
                      <div className={styles.slide_title}>
                        Scalability & BMS Access Facality{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.world_class_data_center}>
            <div className={styles.world_class_data_center_innerdiv}>
              <div className={styles.header}>
                <h3 className={`${styles.colo_heading} colo_heading `}>
                  Advancing India’s Digital Revolution With State-Of-The-Art
                  Data Centers
                </h3>
                {/* <HeadingBottomLine /> */}
              </div>
              <div className={styles.Data_center_service_counter}>
                <div className={styles.counter_grid}>
                  <div className={styles.counter_box}>
                    <div className={styles.number}>
                      {startCounter ? (
                        <CountUp duration={5} end={5} />
                      ) : (
                        <span>00</span>
                      )}
                    </div>
                    <div className={styles.number_title}>
                      Data centers across India
                    </div>
                  </div>
                  <div className={styles.counter_box}>
                    <div className={styles.number}>
                      {startCounter ? (
                        <CountUp duration={5} end={20} />
                      ) : (
                        <span>00</span>
                      )}
                      <span>+</span>
                    </div>
                    <div className={styles.number_title}>
                      Years of world-class service
                    </div>
                  </div>
                  <div className={styles.counter_box}>
                    <div className={styles.number}>
                      {startCounter ? (
                        <CountUp duration={5} end={1300} />
                      ) : (
                        <span>00</span>
                      )}{" "}
                      <span>+</span>
                    </div>
                    <div className={styles.number_title}>
                      Clients across the globe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="DC_map" className={`${styles.DC_map} ${styles.hide_map_dc}`}>
            <div className={styles.radial_overlay}></div>
            <div className={styles.map_image}>
              <Image
                src="/colocation/india-location.jpg"
                alt="DC map"
                width={500}
                height={300}
              />
            </div>
            <div className={`${styles.nashik_Data_center} Data-Center`}>
              <div className={`${styles.DC_map} ${styles.hide_map_dc}`}>
                <Image
                  src="/colocation/data-rack.svg"
                  alt="Data center rack"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.DC_image_nashik}></div>
            </div>
            <div className={`${styles.mohali_Data_center} Data-Center`}>
              <div className={`${styles.DC_map} ${styles.hide_map_dc}`}>
                <Image
                  src="/colocation/data-rack.svg"
                  alt="Data center rack"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.DC_image_mohali}></div>
            </div>
            <div className={`${styles.mumbai_Data_center} Data-Center`}>
              <div className={`${styles.DC_map} ${styles.hide_map_dc}`}>
                <Image
                  src="/colocation/data-rack.svg"
                  alt="Data center rack"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.DC_image_mumbai}></div>
            </div>
            <div className={`${styles.banglore_Data_center} Data-Center`}>
              <div className={`${styles.DC_map} ${styles.hide_map_dc}`}>
                <Image
                  src="/colocation/data-rack.svg"
                  alt="Data center rack"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.DC_image_banglore}></div>
            </div>
            <div className={`${styles.airoli_Data_center} Data-Center`}>
              <div className={`${styles.DC_map} ${styles.hide_map_dc}`}>
                <Image
                  src="/colocation/data-rack.svg"
                  alt="Data center rack"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.DC_image_airoli}></div>
            </div>
          </section>
          <section id="expert_colocation" className={styles.expert_colocation}>
            <div className={styles.expert_innerdiv}>
              <div className={styles.Description}>
                <h3 className={`${styles.colo_heading} colo_heading `}>
                  Powerhouse Data Center Capabilities For Peak Performance{" "}
                </h3>
                <ul>
                  <li>99.995% Guaranteed Uptime.</li>
                  <li>
                    2N+1 Redundant UPS systems For Uninterruptible Power Supply.
                  </li>
                  <li>
                    Automated Multiple Diesel Generators In 2N+1 Redundancy
                    Mode.
                  </li>
                  <li>
                    Scalable Power Colocation services plans For Racks Ranging
                    From 4KW To 40KW.
                  </li>
                  <li>
                    Dual Power Distribution Units & Metered (PDU) For Rack-Level
                    Power Monitoring And Billing.
                  </li>
                  <li>
                    Precision Air Conditioning In N+N Redundancy Mode With Power
                    Back-Up.
                  </li>
                  <li>
                    Get the Remote Control of your co-located machine, through
                    KVM-IP or terminal access.
                  </li>
                  <li>
                    Zero-cost Setups and Reboots & Proactive Monitoring and
                    Support.
                  </li>
                  <li>
                    Direct expansion (DX) based Precision Air Conditioners (PAC)
                    with PAC unit pumps.
                  </li>
                  <li>
                    Advanced Laser-Based Very Early Smoke Detection System
                    (VESDA) & Novac gas based fire suppression extinguishment
                    system .
                  </li>
                  <li>
                    Review and Recommendation for Server Performance in our
                    colocation services model.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.expert_colocation_img}>
              <div className={styles.radial_gradient}></div>
              <div>
                <Image
                  src="/colocation/why-Choose-esds.png"
                  alt="why choose esds"
                  width={894}
                  height={612}
                />
              </div>
            </div>
          </section>
          <section className={styles.explore_plan}>
            <div className={styles.header}>
              <h3 className={`${styles.colo_heading} colo_heading `}>
                Choose Your Colocation Services Plans Tailored To Your Business
                Needs
              </h3>
              {/* <HeadingBottomLine /> */}
            </div>
            <div className={styles.plans}>
              <div className={styles.plan_outline}>
                <div className={`${styles.plan} ${styles.popular}`}>
                  <h2>Pay-As-You-Grow</h2>
                  <ul>
                    <li>What you will Get</li>
                    <li>
                      {" "}
                      <GoCheckCircle />
                      Flexible Capacity Scaling
                    </li>
                    <li>
                      <GoCheckCircle />
                      Cost-Efficient Pricing
                    </li>
                    <li>
                      <GoCheckCircle />
                      Scalable Infrastructure
                    </li>
                    {/* <li><GoCheckCircle />eNlight 360 Portal Access</li>
              <li><GoCheckCircle />On-Demand KVM IP</li> */}
                  </ul>
                  <div className={styles.get_quote}>
                    <button
                      onClick={contactNavigation}
                      className={styles.CTA_button}
                      data-text="Awesome"
                    >
                      <span className={styles.actual_text}>
                        &nbsp;Get Quote&nbsp;
                      </span>
                      <span aria-hidden="true" className={styles.hover_text}>
                        &nbsp;Get&nbsp;Quote&nbsp;
                      </span>
                    </button>
                  </div>

                  <div
                    style={{ width: "100%" }}
                    className={`${styles.button_bottom} relative`}
                  >
                    <div
                      className={`absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent ${styles.CTA_bottom_line}`}
                    />
                  </div>
                </div>
              </div>
            <div className={styles.plan_outline}>
              <div className={styles.plan}>
                <span>Most Popular</span>
                <h2>
                  {" "}
                  Full Rack <span>Colocation Services</span>
                </h2>
                <ul>
                  <li>What you will Get</li>
                  <li>
                    <GoCheckCircle />
                    42U Rack Space
                  </li>
                  <li>
                    <GoCheckCircle />
                    6KWh Rated Power
                  </li>
                  <li>
                    <GoCheckCircle />
                    Static IPv4 Address
                  </li>
                  <li>
                    <GoCheckCircle />
                    eNlight 360 Portal Access
                  </li>
                  <li>
                    <GoCheckCircle />
                    On-Demand KVM IP
                  </li>
                </ul>
                <div className={styles.get_quote}>
                  <button
                    onClick={() => {
                      contactNavigation();
                    }}
                    className={styles.CTA_button}
                    data-text="Awesome"
                  >
                    <span className={styles.actual_text}>
                      &nbsp;Get Quote&nbsp;
                    </span>
                    <span aria-hidden="true" className={styles.hover_text}>
                      &nbsp;Get&nbsp;Quote&nbsp;
                    </span>
                  </button>
                </div>
                <div
                  style={{ width: "100%" }}
                  className={`${styles.button_bottom} relative`}
                >
                  <div
                    className={`absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent ${styles.CTA_bottom_line}`}
                  />
                </div>
              </div></div>
              <div className={styles.plan_outline}>
                <div className={`${styles.plan} ${styles.popular}`}>
                  <h2>
                    Full Rack <span>Colocation Services</span>
                  </h2>
                  <ul>
                    <li>What you will Get</li>
                    <li>
                      <GoCheckCircle />
                      42U Rack Space
                    </li>
                    <li>
                      <GoCheckCircle />
                      40KWh Rated Power
                    </li>
                    <li>
                      <GoCheckCircle />
                      Static IPv4 Address
                    </li>
                    <li>
                      <GoCheckCircle />
                      eNlight 360 Portal Access
                    </li>
                    <li>
                      <GoCheckCircle />
                      On-Demand KVM IP
                    </li>
                  </ul>
                  <div className={styles.get_quote}>
                    <button
                      onClick={() => {
                        contactNavigation();
                      }}
                      className={styles.CTA_button}
                      data-text="Awesome"
                    >
                      <span className={styles.actual_text}>
                        &nbsp;Get Quote&nbsp;
                      </span>
                      <span aria-hidden="true" className={styles.hover_text}>
                        &nbsp;Get&nbsp;Quote&nbsp;
                      </span>
                    </button>
                  </div>
                  <div
                    style={{ width: "100%" }}
                    className={`${styles.button_bottom} relative`}
                  >
                    <div
                      className={`absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent ${styles.CTA_bottom_line}`}
                    />
                  </div>
                </div>
              </div>
              </div>
          </section>

          <Partner
          title={"They Trust Us, Because We Deliver"}
          color={"#00050E"}
          logosArray={logos}
        />
          <Topsection
          question={
            "The Right Partner, With The Right Expertise, Can Get Your Business To New Heights"
          }
          answers={
            "Don’t miss your peak. Let’s connect and begin our partnership!!!"
          }
          color={"#00050E"}
        />
          <FooterFinal BgColor={"#00050E"} />
        </ReactLenis>
      </div>
    </>
  );
}
