import React, { useEffect, useState } from 'react';
import "./Main.scss";
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const Main = () => {


    const ReactPlayerWrapper = styled.div`
        width: 100vw;
        height: 100vh;
        position: absolute;
        pointer-events: none;
        transform: scale(1.5);
        opacity: 0.5;
    `

    return (
        <main className='Main'>
            <ReactPlayerWrapper>
                <ReactPlayer url='https://www.youtube.com/watch?v=lTRiuFIWV54&t=1693s'
                    width="100vw"
                    height="100vh"
                    loop={true}
                    muted={true}
                    controls={false}
                    playing={true}
                    />
            </ReactPlayerWrapper>
            <section className='Main__title'>
                <div className='title'>REX</div>
                <div className='title'>AHN<br/>JAEHYUN</div>
            </section>
            <section className='Main__myLink'>
                <a href='https://github.com/JaeHyunGround' target='_blank' rel='noopener noreferrer'>github</a>
                <a href='https://velog.io/@jaehyun_ground' target='_blank' rel='noopener noreferrer'>blog</a>
                <a href='https://www.figma.com/file/95r6Bo6XbPAuBtpxdCj3QI/%EC%95%88%EC%9E%AC%ED%98%84-%EC%9D%B4%EB%A0%A5%EC%84%9C?type=design&node-id=0%3A1&mode=design&t=aaVVz1AjCS7jdZJH-1' target='_blank' rel='noopener noreferrer'>resume</a>
                <a href='https://www.linkedin.com/in/%EC%9E%AC%ED%98%84-%EC%95%88-a62120275/' target='_blank' rel='noopener noreferrer'>linkedin</a>
            </section>
        </main>
    );
};

export default Main;