"use client"
import React from 'react'
import styled from 'styled-components'
const Cube = () => {
    return (
        <>
            <CubeWrapper className="box-container hidden md:flex">
                <div className="box" id="box">
                    <div className="box-side top"></div>
                    <div className="box-side bottom"></div>
                    <div className="box-side right"></div>
                    <div className="box-side left"></div>
                    <div className="box-side front"></div>
                    <div className="box-side back"></div>

                </div>
            </CubeWrapper>
        </>
    )
}


const CubeWrapper = styled.div`
position : relative;
width: min-content;

.box {
    position: absolute;
    top: 28%;
    left: 3rem;
    transform-style: preserve-3d;
    perspective: 1000px;
    animation: rotate 10s reverse infinite;
    perspective: 10000px;
    transition-duration: 1000ms;
}


.box-side {
    width: 5rem;
    height: 5rem;
    background: #000000da;
    filter: blur(5px);
    border: 2px solid white;
    border-radius: 10px;
    color: white;
    text-align: center;
    position: absolute;
    transition-duration: 1000ms;

}

.left {
    transform: rotateY(90deg) translateX(var(--gap-size)) translateZ(calc(var(--gap-size)*-1))
}

.right {
    transform: rotateY(90deg) translateX(var(--gap-size)) translateZ(var(--gap-size))
}

.top {
    transform: rotateX(90deg) translateY(calc(var(--gap-size)*-1)) translateZ(var(--gap-size))
}

.bottom {
    transform: rotateX(-90deg) translateY(var(--gap-size)) translateZ(var(--gap-size))
}

.back {
    transform: translateZ(calc(var(--gap-size) * -2));
}


@keyframes rotate {
    0% {
        transform: rotateY(5deg) rotateX(5deg) rotateZ(5deg);
        --gap-size : 3rem
    }

    50%{
        transform: rotateY(180deg) rotateX(180deg) rotateZ(180deg);
        --gap-size : 4rem
    }

    100% {
        transform: rotateY(365deg) rotateX(365deg) rotateZ(365deg);
        --gap-size : 3rem
    }
}
`

export default Cube