import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <main className="Main">
      <section className="Main__title">
        <div className="title">REX</div>
        <div className="title">
          AHN
          <br />
          JAEHYUN
        </div>
      </section>
      <section className="Main__myLink">
        <a
          href="https://github.com/JaeHyunGround"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a
          href="https://velog.io/@jaehyun_ground"
          target="_blank"
          rel="noopener noreferrer"
        >
          blog
        </a>
        <a
          href="https://my.surfit.io/w/713607235"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
        <a
          href="https://www.linkedin.com/in/%EC%9E%AC%ED%98%84-%EC%95%88-a62120275/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </section>
    </main>
  );
};

export default Main;
