import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import profile from "../../public/profile-pic.jpg";
import html from "../../public/html.png";
import css from "../../public/css.png";
import js from "../../public/js.png";
import reactIcon from "../../public/react-icon.svg";
import nextIcon from "../../public/next-js.svg";
import tailwindIcon from "../../public/tailwind-logo.svg";
import burkePortfolioItem from "../../public/responsive-white.jpg";
import weatherApp from "../../public/weather-app.png";
import taskManager from "../../public/task-manager.png";
import countriesApi from "../../public/countries-api.png";
import wpLogo from "../../public/wordpress-logo.png";
import gaLogo from "../../public/ga-logo.png";
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Robert Massa Portfolio</title>
        <meta name="description" content="Robert Massa's front end development portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-700">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">Robert Massa</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"href="/resume_sept_24.pdf" download>Resume</a>
                </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Robert Massa</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Front end developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">I am a IT Professional with a mix of experience ranging from UI/UX Design and Development, to SEO Consulting and even IT Auditing. I am passionate about creating, learning, and adapting.</p>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">In my free time I am passionate about Brazilian Jiu Jitsu, weightlifting, skiing, and spending time at the beach.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-700 dark:text-white">
            <a href="https://www.linkedin.com/in/robertmassa310/"><AiFillLinkedin /></a>
            <a href="https://github.com/massarobert94"><AiFillGithub /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-300 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={profile} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 pt-8 pb-2 dark:text-white">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Here are the technologies, languages, and frameworks I work with:</p>
          </div>
          <div className="md:flex justify-center flex-wrap gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={html} style={{ width: '100px'}} />
              </div>
              <h4 className="text-2xl py-1 mt-5">HTML5</h4>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={css} width={100} height={100} />
              </div>
              <h4 className="text-2xl py-1 mt-5">CSS3</h4>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={js} width={100} height={100} />
              </div>
              <h4 className="text-2xl py-1 mt-5">JavaScript</h4>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={reactIcon} width={100} height={100} />
              </div>
              <h4 className="text-2xl py-1 mt-8">React.js</h4>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={nextIcon} width={100} height={100} />
              </div>
              <h4 className="text-2xl py-1 mt-5">Next.js</h4>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={tailwindIcon} width={100} height={100} />
              </div>
              <h4 className="text-2xl py-1 mt-16">Tailwind</h4>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={wpLogo} width={100} height={100} />
              </div>
              <h4 className="text-2xl py-1 mt-16">Wordpress</h4>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={gaLogo} width={100} height={100} />
              </div>
              <h4 className="text-2xl py-1 mt-16">Google Analytics</h4>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-4xl dark:text-white">Portfolio</h3>
          </div>
          <div className="flex flex-col justify-center gap-10 py-10 lg:flex-row lg:flex-wrap">
            <a href="https://massarobert94.github.io/weather-app/"><div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 flex-1 dark:bg-white">
              <div className="flex justify-center">
                <Image src={weatherApp} className="rounded-xl object-cover" width={300} height={300} />
              </div>
              <h4 className="text-2xl py-1">Weather App</h4>
              <p>City is given, which is sent to <span className="text-teal-300">Google Maps API</span> returning lat and lng coordinates, which are then sent to <span className="text-teal-300">Open Weather API</span> returning weather data for those coordinates. App uses pure <span className="text-teal-300">HTML</span>, <span className="text-teal-300">CSS</span>, and <span className="text-teal-300">Vanilla JavaScript</span>.</p>
            </div></a>
            <a href="https://burkelawvt.com/"><div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 flex-1 dark:bg-white">
              <div className="flex justify-center">
                <Image src={burkePortfolioItem} className="rounded-xl object-cover" width={300} height={300} />
              </div>
              <h4 className="text-2xl py-1">Burke Law</h4>
              <p>Designed and developed a mobile-friendly, responsive <span className="text-teal-300">Wordpress</span> website for well-respected criminal defense attorneys in Burlington, Vermont. I used tools such as <span className="text-teal-300">Adobe Photoshop</span>  and <span className="text-teal-300">Google Analytics</span>  to create branded assets as well as web copy that would rank well for SEO.</p>
            </div></a>
            <a href="https://massarobert94.github.io/task-manager/"><div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 flex-1 dark:bg-white">
              <div className="flex justify-center">
                <Image src={taskManager} className="rounded-xl object-cover" width={300} height={300} />
              </div>
              <h4 className="text-2xl py-1">Task Manager</h4>
              <p>Task planner web app created with <span className="text-teal-300">HTML</span>, <span className="text-teal-300">CSS</span>, and <span className="text-teal-300">JavaScript</span>. This was the final project for students in the Generation USA Junior Web Developer program that I was a Teachers Assistant for.</p>
            </div></a>
            <a href="https://massarobert94.github.io/country-api/"><div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 flex-1 dark:bg-white">
              <div className="flex justify-center">
                <Image src={countriesApi} className="rounded-xl object-cover" width={300} height={300} />
              </div>
              <h4 className="text-2xl py-1">Countries API</h4>
              <p>Country is chosen from dropdown, which is sent to <span className="text-teal-300">Rest Countries API</span> returning a variety of data and interesting info about the country including latitude and longitude of the country capital city.
              <br></br><br></br>
              Those coordinates are then sent to <span className="text-teal-300">Open Weather API</span> returning current weather data for the city. Then, we use the country name as part of an API call to Maps Embed which returns an <span className="text-teal-300">iFrame</span> of a map of the country.</p>
            </div></a>
          </div>
        </section>
        <section>
          <div>
            <h3></h3>
          </div>
        </section>
      </main>
    </div>
  )
}
