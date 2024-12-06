"use client";
import style from "../Colocation/Colocations.module.css";
import styles from "./Topsection.module.css";
// import { div } from "three/examples/jsm/nodes/Nodes.js";
import { lazy, Suspense } from "react";

// const FooterServerModel = lazy(() => import("./FooterServerModel")); 
export default function Topsection({
  question,
  answers,
  color,
  MSS,
  answer1,
}) {
  return (
    <section style={{ background: color }} className={styles.question_answer}>
      <Suspense fallback={<h1>loading</h1>}>
        {/* <FooterServerModel /> */}
      </Suspense>

      <div className={styles.question}>{question}</div>
      {MSS ? (
        <div className={styles.two_answer}>
          {" "}
          <span className={styles.textCenter} style={{ color: "#f66b6b" }}>
            {answer1}
          </span>{" "}
          <span>
            {" "}
            <button
              onClick={() => {
                navigate("/contact-us");
              }}
              className={style.CTA_button}
              data-text="Awesome"
            >
              <span className={style.actual_text}>
                &nbsp;Secure Your Zone Today&nbsp;
              </span>
              <span aria-hidden="true" className={style.hover_text}>
                &nbsp;Secure&nbsp;your&nbsp;Zone&nbsp;Today
              </span>
            </button>
          </span>
        </div>
      ) : (
        <div className={styles.answer}>{answers}</div>
      )}
      {MSS ? (
        ""
      ) : (
        <div className={styles.QNA_CTA}>
          <button
            onClick={() => {
              ("/contact-us");
            }}
            className={style.CTA_button}
            data-text="Awesome"
          >
            <span className={style.actual_text}>&nbsp;Connect Now&nbsp;</span>
            <span aria-hidden="true" className={style.hover_text}>
              &nbsp;Connect&nbsp;NOW
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
