import React from "react";
import styles, { layout } from "../style/style";
import FeedbackCard from "./feedbackCard";
import { feedback } from "../contents/static";

const Feedback = () => (
  <>
    <div
      className={`  flex flex-1 items-center justify-center md:flex-row flex-col  my-10 gap-3 sm:gap-0`}
    >
      <h1 className={`${styles.heading2}`}>
        What people are
        <span>
          {" "}
          <br className="hidden sm:block" />
          saying about us
        </span>
      </h1>
      <p className={`${styles.paragraph}`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div
      className={` grid md:grid-cols-2 lg:grid-cols-3 grid-rows-1 ${styles.flexCenter} ${styles.paddingY} relative`}
    >
    <div className=" absolute -top-[20px] left-0 bottom-0 blue__gradient z-2 w-[50%] h-[50%] rounded-full"></div>
    <div className=" absolute buttom-5 -right-1/2 bottom-0 blue__gradient z-2 w-[50%] h-[50%] rounded-full"></div>
      {feedback.map((back) => (
        <div className="" key={back.id}>
          <FeedbackCard
            key={back.id}
            img={back.img}
            title={back.title}
            content={back.content}
            name={back.name}
          />
        </div>
      ))}
    </div>
  </>
);
export default Feedback;
