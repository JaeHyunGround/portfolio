import React from 'react';
import "./Projects.scss";
import * as S from "./Projects.style.jsx"

const Projects = () => {

    const onHanChe = () => {
        window.open("https://github.com/TEAM-NANUM/Client", "_blank")
    }

    const onKumoh = () => {
        window.open("https://github.com/likelionkit11th/2023_welcome_party", "_blank")
    }

    const onReact = () => {
        window.open("https://github.com/React-Likelion/react", "_blank")
    }

    const onShinjoeo = () => {
        window.open("https://github.com/Shinjoeo/Front-end", "_blank")
    }

    return (
        <main className='Projects'>
            <section className='Projects__title--backboard'>
                <div>P</div>
                <div>R</div>
                <div>O</div>
                <div>J</div>
                <div>E</div>
                <div>C</div>
                <div>T</div>
                <div>S</div>
            </section>
            <section className='Projects__title'>
            <div>P</div>
                <div>R</div>
                <div>O</div>
                <div>J</div>
                <div>E</div>
                <div>C</div>
                <div>T</div>
                <div>S</div>
            </section>
            <section className='Projects__my-project'>
                <S.ProjectWrapper onClick={onHanChe}>
                    <div><b>한채</b></div>
                    <div>디지털 격차 해소를 위한 그룹 이커머스 플랫폼</div>
                    <div>멋쟁이사자처럼 11기 전국 연합 해커톤 프로젝트</div>
                </S.ProjectWrapper>
                <S.ProjectWrapper onClick={onKumoh}>
                    <div><b>금오공과대학교 신입생 환영회 & 동아리 박람회 안내 페이지</b></div>
                    <div>교내 첫 행사 안내 페이지</div>
                    <div>멋쟁이사자처럼 11기 금오공과대학교에서 진행한 프로젝트</div>
                </S.ProjectWrapper>
                <S.ProjectWrapper onClick={onReact}>
                    <div><b>Re:act</b></div>
                    <div>은퇴자분들의 제 2의 삶을 위한 플랫폼</div>
                    <div>멋쟁이사자처럼 10기 전국 연합 해커톤 프로젝트 <br/>🏆 상위 우수 15팀 선정</div>
                </S.ProjectWrapper>
                <S.ProjectWrapper onClick={onShinjoeo}>
                    <div><b>신조어도감</b></div>
                    <div>MZ세대의 문화가 빠르게 변화함에 따라 신조어 트렌드를 한눈에 확인할 수 있는 도감 서비스</div>
                    <div>멋쟁이사자처럼 10기 대구/경북 연합 해커톤 프로젝트</div>
                </S.ProjectWrapper>
            </section>
        </main>
    );
};

export default Projects;