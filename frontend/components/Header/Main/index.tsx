import React from "react"
import { NextPage } from "next"
import { Carousel } from "react-bootstrap"
import Image from "next/image"
import { imageLoader } from "../../../utils/image-loader"
import { getUrl } from "../../../utils"
import { MainSlide } from "../../../styles"

export const MainHeader: NextPage = () => {

    return (
        <header style={{ height: '90vh', position: 'relative' }}>
            <Carousel className="mainCarousel" interval={5000}>
                <Carousel.Item>
                    <div style={{ height: '90vh', position: 'relative' }}>
                        <Image src={getUrl('/slides/NFF.png')!} alt={"second slide"} layout="fill" loader={imageLoader} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ height: '90vh', position: 'relative' }}>
                        <Image src={getUrl('/slides/afreemonex.png')!} alt={"second slide"} layout="fill" loader={imageLoader} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ height: '90vh', position: 'relative' }}>
                        <Image src={getUrl('/slides/slide1.png')!} alt={"first"} layout="fill" loader={imageLoader} />
                    </div>
                    <Carousel.Caption className="py-0" style={{ top: 'calc(500px / 2)' }}>
                        <h1 className={MainSlide.title} >
                        {/* <h1 style={{ fontSize: '55px', lineHeight: '52px', color:"#0070CC" }} className={title + "text-uppercase fw-bold mb-3 text-primary"} > */}
                            Africa Fintech Forum
                        </h1>
                        {/* <h3 style={{ fontSize: '35px', lineHeight: '52px', }} className={MainSlide.content} > */}
                        <h3 className={MainSlide.second} >
                            Une organisation regionale à but non lucratif, engagée pour la promotion et de développement de la finance digitale.
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ height: '90vh', position: 'relative' }}>
                        <Image src={getUrl('/slides/slide2.png')!} alt={"second slide"} layout="fill" loader={imageLoader} />
                    </div>
                    <Carousel.Caption className="py-0 text-slide" style={{ top: 'calc(500px / 2)' }}>
                        <h3 className={MainSlide.second} >
                            Notre but est de construire pour l’Afrique un écosystème fintech imbriqué localement ayant des passerelles internationales
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <div style={{ height: '700px', position: 'relative' }}>
                        <Image src={getUrl('/slides/2.jpeg')} alt={"thirst slide"} layout="fill" loader={imageLoader} />
                    </div>
                    <Carousel.Caption className="py-0" style={{ top: 'calc(600px / 2)' }}>
                        <h3 style={{ fontSize: '35px', lineHeight: '52px', }} className="text-uppercase fw-bold" ></h3>
                    </Carousel.Caption>
                </Carousel.Item> */}
                {/* {slides.map((slide, index) => {
                    return (

                        <Carousel.Item key={slide.id}>
                            <div style={{ height: '700px', position: 'relative' }}>
                                <Image src={slide.image} alt={`Slide ${index + 1}`} layout="fill" loader={imageLoader} />
                            </div>
                            <Carousel.Caption className="py-0" style={{ top: 'calc(600px / 2)' }}>
                                <h3 style={{ fontSize: '35px', lineHeight: '52px', }} className="text-uppercase fw-bold" >{slide.title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                    )
                })} */}
            </Carousel>
        </header>
    )
}
