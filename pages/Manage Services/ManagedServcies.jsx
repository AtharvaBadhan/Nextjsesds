"use client";
import style from '../../pages/Colocation/Colocations.module.css'
import styles from "./ManagedServices.module.css";
import Image from "next/image";
// import Bg_video from '../../public/Managed services/MS-bg-video.mp4';
import slide1 from "../../public/Managed services/Datacenter-migration.jpg";
import slide2 from "../../public/Managed services/Migration.jpg";
import slide3 from "../../public/Managed services/Cloud-Manage.jpg";
import slide4 from "../../public/Managed services/Database.jpg";
import { useEffect, useLayoutEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import CountUp from "react-countup";
import gsap from "gsap";
import Topsection from "../FinalFooter/Topsection";
import FooterFinal from "../FinalFooter/FooterFinal";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
// import SparklesPreview2 from '../../components/ui/subheading text effect/bannerSubheading';
// import HeadingBottomLine from '../../components/ui/HeadingBottomLine';
// import Header from '../Header/Header';
import divider from "../../public/Managed services/myth-divider.png";
import resource_img from "../../public/Managed services/resource-img-min.png";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
// import { useNavigate, useParams } from 'react-router-dom'
import Partner from "../Partner/Partner";
import logo1 from "../../public/Managed services/logo1.png";
import logo2 from "../../public/Managed services/logo2.png";
import logo3 from "../../public/Managed services/logo3.png";
import logo4 from "../../public/Managed services/logo4.png";
// import * as demoActions from '../../Redux/Actions/DemoActions.js'
import logo5 from "../../public/Managed services/logo5.png";
import logo6 from "../../public/Managed services/logo6.png";
// import InnerPageLoader from '../Loader/InnerPageLoader.jsx'
// import ScrollIndicator from '../../components/ui/ScrollIndicator'
// import SuccessStories from '../Case studt pop-up/SuccessStories'
import React from "react";
// import { useDispatch, useSelector } from 'react-redux'
// import MobileNavbar from '../Navbar/MonileNavbar.jsx'

export default function ManageSecuServices() {
  const services = [];
  let [countNumber, setcountNumber] = useState(false);
  let [slideCount, setSlideCount] = useState("01");
  let logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  // const navigate = useNavigate()
  const contactNavigation = () => {
    // navigate('/contact-us');
  };
  // const demoState = useSelector(state => state.DemoState);

  // let dispatch = useDispatch()
  // useEffect(() => {
  //     dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
  //   },[])
//   let { MS_name } = useParams()

  const [caseStudyId, setCaseStudyId] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (id) => {
    setCaseStudyId(id);
    setOpen(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 500) {
        document.getElementById("scroll-down").style.display = "none";
      } else {
        document.getElementById("scroll-down").style.display = "block";
      }
    });
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    // if (MS_name == "DC_Migration_managedservices") {
    //   gsap.to(window, {
    //     scrollTo: "#MS-offers-slider",
    //     duration: 1,
    //     ease: "power2.inOut",
    //   });
    // } else if (MS_name == "Cloud_migration_managedservices") {
    //   let targetposition =
    //     document.getElementById("MS-offers-slider").offsetHeight * 3.1;
    //   gsap.to(window, {
    //     scrollTo: targetposition,
    //     duration: 1,
    //     ease: "power2.inOut",
    //   });
    // } else if (MS_name == "Cloud_MS_managedservices") {
    //   let targetposition =
    //     document.getElementById("MS-offers-slider").offsetHeight * 4;
    //   gsap.to(window, {
    //     scrollTo: targetposition,
    //     duration: 1,
    //     ease: "power2.inOut",
    //   });
    // } else if (MS_name == "DBA_managedservices") {
    //   let targetposition =
    //     document.getElementById("MS-offers-slider").offsetHeight * 5;
    //   gsap.to(window, {
    //     scrollTo: targetposition,
    //     duration: 1,
    //     ease: "power2.inOut",
    //   });
    // } else {
    //   gsap.to(window, {
    //     scrollTo: 0,
    //     duration: 1,
    //     ease: "power2.inOut",
    //   });
    // }
    gsap.fromTo(
      ".banner-center-char",
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
    gsap.fromTo(
      ".banner-center-char1",
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

    let manageservicesSlide = gsap.timeline({
      scrollTrigger: {
        trigger: ".MSS-offers-slider",
        start: "top top",
        end: () => innerHeight * 5,
        pin: true,
        pinSpacing: true,
        scrub: 1,
      },
    });

    manageservicesSlide.to(
      "#second-slide",
      {
        y: "-60vh",
        onStart: () => {
          setSlideCount("02");
        },
        onReverseComplete: () => {
          setSlideCount("01");
        },
      },
      "key"
    );
    manageservicesSlide.to(
      "#first-description",
      { x: "-10vw", opacity: -2 },
      "key"
    );
    manageservicesSlide.to(
      "#second-description",
      { x: "0", opacity: 1 },
      "key"
    );
    manageservicesSlide.to(
      "#third-slide",
      {
        y: "-120vh",
        onStart: () => {
          setSlideCount("03");
        },
        onReverseComplete: () => {
          setSlideCount("02");
        },
      },
      "key1"
    );
    manageservicesSlide.to(
      "#second-description",
      { x: "-10vw", opacity: -2 },
      "key1"
    );
    manageservicesSlide.to(
      "#third-description",
      { x: "0", opacity: 1 },
      "key1"
    );
    manageservicesSlide.to(
      "#fourth-slide",
      {
        y: "-180vh",
        onStart: () => {
          setSlideCount("04");
        },
        onReverseComplete: () => {
          setSlideCount("03");
        },
      },
      "key2"
    );
    manageservicesSlide.to(
      "#third-description",
      { x: "-10vw", opacity: -2 },
      "key2"
    );
    manageservicesSlide.to(
      "#fourth-description",
      { x: "0", opacity: 1 },
      "key2"
    );

    let counter = gsap.timeline({
      scrollTrigger: {
        trigger: ".Managed-operation-counter",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onEnter: () => {
          setcountNumber(true);
        },
      },
    });

    document.querySelectorAll(".MS-heading").forEach((element) => {
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

    gsap.to(".img-div", {
      scale: 1.2,
      duration: 2,
      scrollTrigger: {
        trigger: ".resource-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      if (manageservicesSlide) manageservicesSlide.kill();
      if (counter) counter.kill();
    };
  }, []);

  return (
    <div className={styles.managed_services}>
      {/* <MobileNavbar /> */}
      <ReactLenis
        options={{
          smoothWheel: true,
          duration: 3,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 2,
        }}
      >
        {/* <Header /> */}
        {/* <InnerPageLoader /> */}
        {/* <ScrollIndicator /> */}
        <section className={styles.MSS_container}>
          <div className={styles.MSS_innerdiv}>
            <div className={styles.radial_overlay}></div>
            <div className={styles.MSS_banner_video}>
              <video autoPlay loop muted>
                <source src="/MS-bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div
              className={`${styles.MSS_banner_center_text} ${styles.mobilemangedSer}`}
            >
              {/* <SparklesPreview2 className={styles.MSS_banner_center} word={[
                                {
                                    text: "We",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char"
                                },
                                {
                                    text: "MANAGE",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char"
                                },
                                {
                                    text: "The",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char"
                                },
                                {
                                    text: "Wheel,",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char"
                                },
                                {
                                    text: "So",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char"
                                },
                                {
                                    text: "That",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char"
                                },
                                {
                                    text: "Your",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char"
                                },
                                {
                                    text: "Business",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char"
                                },
                                {
                                    text: "Can",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char"
                                },
                                {
                                    text: "Focus",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char"
                                },
                                {
                                    text: "On",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char"
                                },
                                {
                                    text: "The",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char"
                                },
                                {
                                    text: "Road",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char"
                                },
                            ]} />
                            <SparklesPreview2 className={styles.MSS_banner_center_subtitle} word={[
                                {
                                    text: "Leave",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "the",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "complexities",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "of",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "managing",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "your",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "IT",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "infrastructure",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "to",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "Our",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "experts,",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "while",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "you",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "take",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "control",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "of",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "your",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                                {
                                    text: "Business",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-char1"
                                },
                            ]} /> */}
            </div>
          </div>
        </section>
        <section className={styles.myth_section}>
          <div className={styles.myth_container}>
            <div className={styles.myth_heading}>
              <h3 className={styles.MS_heading}>
                Breaking The Myth - Does Managed IT Services Really Bring You
                Value?
              </h3>
              {/* <HeadingBottomLine /> */}
            </div>
            <div className={styles.myth_description}>
              <div className={`${styles.myth_sec} ${styles.common_myth}`}>
                <div className={styles.innerdiv}>
                  <h5>Common Myth</h5>
                  <p>
                    Managed services are expensive for businesses, suggesting
                    it’s convenient to manage internally. They are often
                    perceived as an additional expense or unnecessary overhead.
                  </p>
                </div>
              </div>
              <div className={`${styles.myth_sec} ${styles.divider_img}`}>
                <div className="tilted-line"></div>
                <div className="center-img">
                  <Image src={divider} alt="" />
                </div>
              </div>
              <div className="myth_sec reality">
                <div className="innerdiv">
                  <h5>The reality</h5>
                  <p>
                    Research indicates that businesses utilizing Managed
                    services have been shown to reduce annual IT costs by over
                    25% for 46% and experience an average 50% reduction in
                    downtime, enhancing productivity and cost savings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="MS-offers-slider" className="MSS-offers-slider">
          <h3 className="MS-heading">
            With Our Range, We’ve Got You Comprehensively Covered{" "}
          </h3>
          <div className="MSS-slider-container">
            {/* <div className='slide-count'>{slideCount}</div> */}
            <div className="slider">
              <div className="image-card">
                <div id="first-slide" className="slide-img">
                  <Image src={slide1} alt="DC Migration" />
                </div>
                <div id="second-slide" className="slide-img">
                  <Image src={slide2} alt="Cloud Migration" />
                </div>
                <div id="third-slide" className="slide-img">
                  <Image src={slide3} alt="Cloud Managed Service" />
                </div>
                <div id="fourth-slide" className="slide-img">
                  <Image src={slide4} alt="Database Administration" />
                </div>
              </div>
              <div className="description-container">
                <div className="slide-inner-container">
                  <div id="first-description" className="slide-description">
                    <div className="slide-text">
                      <div className="arrow-text">
                        <h4>DC Migration </h4>
                      </div>
                      <div className="subtitle">
                        <p>
                          Efficiently migrate your data center with our expert
                          guidance and seamless execution, ensuring minimal
                          disruption and maximum reliability for your IT
                          infrastructure.
                          <br />
                          <br />
                          <button
                            style={{ marginTop: "4w" }}
                            onClick={() => {
                              contactNavigation();
                            }}
                            className={style.CTA_button}
                            data-text="Awesome"
                          >
                            <span className={style.actual_text}>
                              &nbsp;Unlock the Potential NOW&nbsp;
                            </span>
                            <span aria-hidden="true" className={style.hover_text}>
                              &nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW
                            </span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="second-description" className="slide-description">
                    <div className="slide-text">
                      <div className="arrow-text">
                        <h4>Cloud Migration</h4>
                      </div>
                      <div className="subtitle">
                        <p>
                          Effortlessly transition to the cloud with our
                          streamlined migration services, ensuring secure data
                          transfer and optimized performance to support your
                          business growth.
                          <br />
                          <br />
                          <button
                            style={{ marginTop: "4w" }}
                            onClick={() => {
                              contactNavigation();
                            }}
                            className={style.CTA_button}
                            data-text="Awesome"
                          >
                            <span className={style.actual_text}>
                              &nbsp;Unlock the Potential NOW&nbsp;
                            </span>
                            <span aria-hidden="true" className={style.hover_text}>
                              &nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW
                            </span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="third-description" className="slide-description">
                    <div className="slide-text">
                      <div className="arrow-text">
                        <h4>Cloud Managed Service </h4>
                      </div>
                      <div className="subtitle">
                        <p>
                          Simplify and optimize your cloud operations with our
                          comprehensive managed services, ensuring seamless
                          performance, security, and scalability for your
                          business-critical applications.
                          <br />
                          <br />
                          <button
                            style={{ marginTop: "4w" }}
                            onClick={() => {
                              contactNavigation();
                            }}
                            className={style.CTA_button}
                            data-text="Awesome"
                          >
                            <span className={style.actual_text}>
                              &nbsp;Unlock the Potential NOW&nbsp;
                            </span>
                            <span aria-hidden="true" className={style.hover_text}>
                              &nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW
                            </span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="fourth-description" className="slide-description">
                    <div className="slide-text">
                      <div className="arrow-text">
                        <h4>Database Administration</h4>
                      </div>
                      <div className="subtitle">
                        <p>
                          Ensure the reliability, performance, and security of
                          your databases with our expert Database Administration
                          (DBA) services, tailored to meet your business's
                          specific needs. <br />
                          <br />
                          <button
                            style={{ marginTop: "4w" }}
                            onClick={() => {
                              contactNavigation();
                            }}
                            className={style.CTA_button}
                            data-text="Awesome"
                          >
                            <span className={style.actual_text}>
                              &nbsp;Unlock the Potential NOW&nbsp;
                            </span>
                            <span aria-hidden="true" className={style.hover_text}>
                              &nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW
                            </span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="MSmobileShow_view">
          <div className="managedservices">
            <h3 className="MS-heading">
              With Our Range, We’ve Got You Comprehensively Covered{" "}
            </h3>
            <div className="cloudOffer">
              <div className="cloudOffer_1">
                <Image src={slide1} alt="DC Migration" />
                <h2>DC Migration</h2>
                <div className="subtitle">
                  <p>
                    Efficiently migrate your data center with our expert
                    guidance and seamless execution, ensuring minimal disruption
                    and maximum reliability for your IT infrastructure.
                    <br />
                    <br />
                    <button
                      style={{ marginTop: "4w" }}
                      onClick={() => {
                        contactNavigation();
                      }}
                      className={style.CTA_button}
                      data-text="Awesome"
                    >
                      <span className={style.actual_text}>
                        &nbsp;Unlock the Potential NOW&nbsp;
                      </span>
                      <span aria-hidden="true" className={style.hover_text}>
                        &nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW
                      </span>
                    </button>
                  </p>
                </div>
              </div>
              <div className="cloudOffer_1">
                <Image src={slide2} alt="Cloud Migration" />
                <h2>Cloud Migration</h2>
                <div className="subtitle">
                  <p>
                    Effortlessly transition to the cloud with our streamlined
                    migration services, ensuring secure data transfer and
                    optimized performance to support your business growth.
                    <br />
                    <br />
                    <button
                      style={{ marginTop: "4w" }}
                      onClick={() => {
                        contactNavigation();
                      }}
                      className={style.CTA_button}
                      data-text="Awesome"
                    >
                      <span className={style.actual_text}>
                        &nbsp;Unlock the Potential NOW&nbsp;
                      </span>
                      <span aria-hidden="true" className={style.hover_text}>
                        &nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW
                      </span>
                    </button>
                  </p>
                </div>
              </div>
              <div className="cloudOffer_1">
                <Image src={slide3} alt="Cloud Managed Service" />
                <h2>Cloud Managed Service</h2>
                <div className="subtitle">
                  <p>
                    Simplify and optimize your cloud operations with our
                    comprehensive managed services, ensuring seamless
                    performance, security, and scalability for your
                    business-critical applications.
                    <br />
                    <br />
                    <button
                      style={{ marginTop: "4w" }}
                      onClick={() => {
                        contactNavigation();
                      }}
                      className={style.CTA_button}
                      data-text="Awesome"
                    >
                      <span className={style.actual_text}>
                        &nbsp;Unlock the Potential NOW&nbsp;
                      </span>
                      <span aria-hidden="true" className={style.hover_text}>
                        &nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW
                      </span>
                    </button>
                  </p>
                </div>
              </div>
              <div className="cloudOffer_1">
                <Image src={slide4} alt="Database Administration" />
                <h2>Database Administration</h2>
                <div className="subtitle">
                  <p>
                    Ensure the reliability, performance, and security of your
                    databases with our expert Database Administration (DBA)
                    services, tailored to meet your business's specific needs.{" "}
                    <br />
                    <br />
                    <button
                      style={{ marginTop: "4w" }}
                      onClick={() => {
                        contactNavigation();
                      }}
                      className={style.CTA_button}
                      data-text="Awesome"
                    >
                      <span className={style.actual_text}>
                        &nbsp;Unlock the Potential NOW&nbsp;
                      </span>
                      <span aria-hidden="true" className={style.hover_text}>
                        &nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW
                      </span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Managed-operation-counter">
          <div className="MS-counter-heading">
            <h3 className="MS-heading">
              The Impact We Create, The Results You Can Bank On
            </h3>
            {/* <HeadingBottomLine /> */}
          </div>
          <div className="MSS-counter-section">
            <div className="counter-list">
              <div className="counter-div">
                <div className="numbers">
                  {countNumber ? (
                    <CountUp duration={5} end={2817100} />
                  ) : (
                    <span>0</span>
                  )}{" "}
                  <span>+</span>
                </div>
                <div className="count-title">
                  Million events managed per day
                </div>
              </div>
              <div className="counter-div">
                <div className="numbers">
                  {countNumber ? (
                    <CountUp duration={5} end={1000} />
                  ) : (
                    <span>0</span>
                  )}{" "}
                  <span>+</span>
                </div>
                <div className="count-title">Managed Service customer base</div>
              </div>
              <div className="counter-div">
                <div className="numbers">
                  {countNumber ? (
                    <CountUp duration={5} end={1000} />
                  ) : (
                    <span>0</span>
                  )}{" "}
                  <span>+</span>
                </div>
                <div className="count-title">Managed firewalls</div>
              </div>
              <div className="counter-div">
                <div className="numbers">
                  {countNumber ? (
                    <CountUp duration={5} end={100} />
                  ) : (
                    <span>0</span>
                  )}{" "}
                  <span>+</span>
                </div>
                <div className="count-title">Managed services AD</div>
              </div>
              <div className="counter-div">
                <div className="numbers">
                  <CountUp duration={5} end={100} /> <span>+</span>
                </div>
                <div className="count-title"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="resource-section">
          <div className="resource-container">
            <div className="heading">
              <h3 className="MS-heading">
                Want To Free Up Your Resources? We're Handing You That Advantage
              </h3>
            </div>
            <div className="list-of-resource">
              <div className="parent-center-img">
                <div className="img-div">
                  <Image src={resource_img} alt=" resource" />
                </div>
                <div className="card-div">
                  In house Managed service domain expertise{" "}
                </div>
                <div className="card-div">Dedicated and on demand support</div>
                <div className="card-div">
                  Measurable, simple, transparent deliverables
                </div>
                <div className="card-div">
                  Best of breed Indigenous solutions
                </div>
                <div className="card-div">
                  Tailored made Managed service offerings{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Success-stories">
          <div className="stories-container">
            <div className="heading">
              <h3 className="MS-heading">
                Building Success Stories, Beyond Solutions
              </h3>
            </div>
            <div className="casee-study-list">
              <div className="list-container">
                <ul>
                  <li
                    id="1"
                    onClick={() => handleOpen(1)}
                    className="case-study-item"
                  >
                    {/* <SparklesPreview2 mainDivClass={"case-item-head"} className={"list-item-heading"} word={[
                                            {
                                                text: "Maharashtra",
                                                class: "heading-word",
                                                className: "inline-block case-study-char"
                                            },
                                            {
                                                text: "Industrial",
                                                class: "heading-word",
                                                className: "inline-block case-study-char"
                                            },
                                            {
                                                text: "Development",
                                                class: "heading-word",
                                                className: "inline-block case-study-char"
                                            },
                                            {
                                                text: "Corporation",
                                                class: "heading-word",
                                                className: "inline-block case-study-char"
                                            },
                                            {
                                                text: "(MIDC)",
                                                class: "heading-word",
                                                className: "inline-block case-study-char"
                                            },
                                        ]} />
                                        <p className='case-subtitle'>ESDS revolutionizes application management for Maharashtra Industrial Development Corporation (MIDC) with the ePass Portal. </p>
                                        <div className='arrow-icon'>
                                            <GoArrowUpRight />
                                        </div>

                                    </li>
                                    <li id="2"
                                        onClick={() => handleOpen(2)} className='case-study-item'>
                                        <SparklesPreview2 mainDivClass={"case-item-head"} className={"list-item-heading"} word={[
                                            {
                                                text: "Maharashtra",
                                                class: "heading-word",
                                                className: "inline-block case-study-char"
                                            },
                                            {
                                                text: "State",
                                                class: "heading-word",
                                                className: "inline-block oneB-indian-touching-char"
                                            },
                                            {
                                                text: "Election",
                                                class: "heading-word",
                                                className: "inline-block oneB-indian-touching-char"
                                            },
                                            {
                                                text: "Commission",
                                                class: "heading-word",
                                                className: "inline-block oneB-indian-touching-char"
                                            },

                                        ]} />
                                        <p className='case-subtitle'>The State election commission trusts ESDS’ eNlight Cloud platform to ensure minimal downtime during peak traffic hours.</p>
                                        <div className='arrow-icon'>
                                            <GoArrowUpRight />
                                        </div>
                                    </li>
                                    <li id="3"
                                        onClick={() => handleOpen(3)} className='case-study-item'>
                                        <SparklesPreview2 mainDivClass={"case-item-head"} className={"list-item-heading"} word={[
                                            {
                                                text: "Janapriya",
                                                class: "heading-word",
                                                className: "inline-block case-study-char"
                                            },
                                            {
                                                text: "Engineers",
                                                class: "heading-word",
                                                className: "inline-block oneB-indian-touching-char"
                                            },
                                            {
                                                text: "Syndicate",
                                                class: "heading-word",
                                                className: "inline-block oneB-indian-touching-char"
                                            },
                                            {
                                                text: "Private",
                                                class: "heading-word",
                                                className: "inline-block oneB-indian-touching-char"
                                            },
                                            {
                                                text: "Limited",
                                                class: "heading-word",
                                                className: "inline-block oneB-indian-touching-char"
                                            },
                                        ]} /> */}
                    <p className="case-subtitle">
                      Janapriya achieves higher ROI by migrating their legacy
                      applications on ESDS’s SAP HANA community cloud.
                    </p>
                    <div className="arrow-icon">
                      <GoArrowUpRight />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <SuccessStories isOpen={open} onClose={handleClose} caseStudyId={caseStudyId} type="manageService"></SuccessStories> */}
          </div>
        </section>
        <Partner title="Building Trust Across The Board " logosArray={logos} />
        <Topsection
          question={
            "Ready To Experience A Similar Transformation In Your Business?"
          }
          answers={"Start building your Success story here."}
          CTA={"Sign Up Now"}
          color={"#000819"}
        />
        <FooterFinal BgColor={"#000819"} />
      </ReactLenis>
    </div>
  );
}
