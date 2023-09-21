import React from 'react'
import '../styles/home.scss'
import vg from '../assets/2.webp'
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from 'react-icons/ai'

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>web-wizard</h1>
                    <p>Solution of all your problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p> We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children.</p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>The future of full-stack developers is to learn new tools and technologies. New tools and technologies are emerging daily, solving problems and creating products and services. The key difference between a good software engineer and a great one is their ability to easily pick up new languages or frameworks.Developers specializing in full-stack development develop both the front-end and the back end of software or an app (web and mobile). It involves handling tasks related to programming, designing, managing databases, and debugging websites or applications. </p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{
                            animationDelay: "0.1s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
