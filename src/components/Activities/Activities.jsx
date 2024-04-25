import React from "react";
import "./Activities.scss";

const Activities = () => {
  return (
    <main className="Activities">
      <section className="Activities__title">Activities</section>
      <section className="Activities__title--list">
        <section className="Activities__title--item">
          <div className="Activities__title--item-name">
            <div>programmers DevCourse</div>
          </div>
          <div className="Activities__title--item-detail">
            <div>프로그래머스 데브코스 | 프론트엔드 5기</div>
          </div>
          <div className="Activities__title--item-date">2023.09 - 2024.03</div>
        </section>
        <section className="Activities__title--item">
          <div className="Activities__title--item-name">
            <div>LikeLion</div>
          </div>
          <div className="Activities__title--item-detail">
            <div>멋쟁이사자처럼 | 10기 FE 운영진, 11기 대표</div>
          </div>
          <div className="Activities__title--item-date">2021.12 - 2023.12</div>
        </section>
      </section>
    </main>
  );
};

export default Activities;
