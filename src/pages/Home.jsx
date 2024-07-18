import React from 'react'
import Button from '../components/Button'
import { FullLogo, ReactLogo } from '../assets/icons'
import ReactLogoImg from '../assets/icons/react.svg'
import './home.scss'
import { mockIteratable } from '../utilities/arr'
import Experience from '../components/Timeline'
import { InfiniteMovingCards } from '../components/InfiniteCards'

const Project = () => {
  return <div className=""></div>
}

const Home = () => {
  return (
    <>
      <header className="flex items-center p-64">
        <div className="logo text-violet">
          <FullLogo />
        </div>
        <div className="ml-auto flex items-center gap-16 font-quicksand">
          <a href="/home" className="font-bold text-violet">
            Home
          </a>
          <a href="/home" className="font-medium text-gray">
            About
          </a>
          <a href="/home" className="font-medium text-gray">
            Contact Us
          </a>
        </div>
      </header>
      <main className="mt-32 px-64">
        <section className="hero-section relative grid h-fit">
          <div className="flex flex-col gap-24 font-axiforma">
            <div className="big-text inline-block text-white">
              I'm <strong className="scale-105  text-violet">Opeoluwa</strong>, a{' '}
              <h3 className="big-text shadow-text inline origin-top-left scale-105 align-baseline text-green">
                Web developer
              </h3>
            </div>
            <p className="max-w-[70ch] font-quicksand text-white">
              I'm a passionate full-stack developer with 3+ years of experience crafting engaging
              and impactful web experiences. From backend systems to pixel-perfect front-end design,
              I thrive on tackling challenges and delivering solutions that meet user needs and
              exceed expectations. I'm always eager to learn and grow, and I'm looking for
              opportunities to use my skills to create innovative and impactful solutions
            </p>
            <Button className={'w-fit'}>Get in Touch</Button>
          </div>

          <div className="stage-cube-cont m-16 grid">
            <div className="cubespinner">
              <div className="face1">
                <ReactLogo />
              </div>
              <div className="face2">
                <ReactLogo />
              </div>
              <div className="face3">
                <ReactLogo />
              </div>
              <div className="face4">
                <ReactLogo />
              </div>
              <div className="face5">
                <ReactLogo />
              </div>
              <div className="face6">
                <ReactLogo />
              </div>
            </div>
          </div>

          <div className="scroll-indicator m-0 bottom-0 absolute z-10 -mb-64 aspect-[1/2] w-32 self-end justify-self-center rounded-[9999px] border border-neutral-light-200 shadow-inner"></div>
        </section>

        <section className="skills-section mt-96">
          <header className="text-white">
            <h2 className="font-bold text-heading-24">Skills</h2>
            <p>Some of my executive skills for your viewing pleasure</p>
          </header>
          <div className="skills-grid mt-24 flex w-3/5 flex-wrap content-start gap-16">
            {mockIteratable(3).map((item, i) => {
              return (
                <div className="skill relative" key={`${String.fromCharCode(i)}${i}`}>
                  <button className="flex aspect-square w-48  items-center justify-center rounded-sm bg-neutral-light-400">
                    <ReactLogo className={'aspect-square w-32'} />
                  </button>
                  <div className="skill-description rounded-lg">
                    <div>
                      <h3>Na so una dey do for here?</h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="projects-section mt-96">
          <header className="text-white">
            <h2 className="font-bold text-heading-24">Projects</h2>
            <p>Some of my my projects for your viewing pleasure</p>
          </header>
          <div className="mt-24 flex flex-col content-start gap-16 text-center">
            <ul className="mx-auto flex gap-24 text-white">
              <li>
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Websites</a>
              </li>
            </ul>
            <div
              className="grid gap-16 pb-48"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 300px))',
                placeItems: 'center',
                placeContent: 'center'
              }}
            >
              {mockIteratable(3).map((item, i) => {
                return (
                  <div
                    className="flex w-[250px] flex-col gap-12 rounded-lg bg-white p-16 pb-32"
                    key={i}
                  >
                    <div className="grid aspect-video w-full place-content-center rounded-[inherit] bg-green">
                      <img src={ReactLogoImg} alt="Hello" />
                    </div>
                    <div className="text-start">
                      <h3 className="text-xl font-bold">Mindmaze</h3>
                      <p>A memory game built with the react library with a plethora of features</p>
                    </div>
                    <div className="mt-12 grid grid-flow-col gap-4 overflow-auto">
                      {mockIteratable(6).map((item, i) => (
                        <div
                          className="rounded-full bg-neutral-light-400 px-16 py-8 text-sm text-white"
                          key={item + i}
                        >
                          React
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <Experience />
        <section className="max-lg:mt-10 grid grid-flow-col overflow-hidden">
          <div className="rounded-md relative flex h-[50vh] flex-col items-center  justify-center overflow-hidden antialiased">
            <InfiniteMovingCards
              items={[
                { name: 'Me', title: 'Best he can be' },
                { name: 'Me', title: 'Best he can be' },
                { name: 'Me', title: 'Best he can be' }
              ]}
              direction="right"
              speed="slow"
            />
          </div>
        </section>
        <section className="text-white">
          <h2 className="text-center font-axiforma text-3xl">
            Need <strong className="text-green">Help</strong> with a project?
          </h2>
          <div
            className="contact-form-container grid place-content-center place-items-center"
            style={{
              gridTemplateColumns: 'max-content min-content'
            }}
          >
            <form className="self-stretch">
              <input
                type="text"
                className="w-full rounded-sm border-2 border-green bg-neutral-dark-300"
              />
            </form>
            <div className="flex flex-col items-center bg-neutral-dark-400 bg-opacity-50">
              <strong>Here to help you build the best products</strong>

              <div className="p-48">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAM1BMVEXh4eGjo6Pk5OSgoKDd3d2mpqbBwcHa2tqysrK6urqvr6/X19fU1NSpqam1tbXR0dHKysodkoUeAAAE9ElEQVR4nO2d2XbjIAxAQRgw3uD/v7ZgJ2mbuo6BAHKO7szDdJ64R9hmkVTGCIIgCIIgCIIgCIIgCOISAABjnef2z+sCrButUmZFKTt17KI+AJ1VyyA5F+GP4FwOi7LdFeMDk/IiweEb/5Mc1NR6aLGANt6E7+B9jL5ScIAZsWtyD5C50LNj5wOVVWe2rcd4DmBqf4L9nmzqCsEBvbxUWXWWCzw50zmXYIP+tTYOJ128zTC2Hu0hoM+7BBvcM62PcPE2fevxHgAmysXbGLShARfp4m0cVhs9x7pwPuvWo94nepKtocE50cDKeBe/L7AobUyKC+em9bh3AJvwxARmjKFRaS7cLzmxAWPc9/Ib0Y/YQgMuNTCc4/vWqMTA+NBgm2egU2dZmGfY1pvTq53ygcyMbWPjkr6YG9K1Hv0T8WvMH6HBJpP+/CN8A6QsMh8yyFY03dljjF2ZpWs9/l+QDMnU4KNeAHmvZmSR+ajvTMYOwO8BWo/+iSlx0xzAttD8rC3AJ23OPmvbDBEXM0+BGdAdaLAu8QyQc4PsK8PWQ8Ck0AiUh4AsbXkmltbj3gPSjgEkusd/I+mpQbbIvANjymUTvlfZxkddAzKIfQeIBa0Lgy726rzDK8OYfp0D9MOFI72dvTPK8+kmEne6CYs4Qcd3Xv4XGPtzMvguzHYI6ZknkucukqgJzL3aDohBoX6P/QTGw+AIacZLZTfbRe4n0Aohl4tkmz4I6ebz34+O4HNIOm89ugS09bNtJQQkII1F/p08JNQD9IOnD3UArUeTza3S5OIFJwRBEARBEARBEAQG4M6fH65FGLS2Tpl+bQggtnYAvVHO6kvtoIGN1t3PZZ76AdzOaJwdr1Da3I3ODFIcVdCvUnIwbkR7WhPm1eTM/ByNAyExGzeFWdd67L8B8BFRLyOyGyHlI4TIB9a5xeNEvoX4OuNQ6PigbE9JisndJzxB7cMDbGtikm5y89nanrTU8Spm56g/1Wc2DXXApidm/iPUt8rXmuacB+UfmzZ30Hp5v8qms9S+whkPu+Tk6piK2Q7+ZZyaXXpSZ3DVvjvavOsN9q8NN3Xm2vvfYbs6Vd5r4NLLS6Ns5vJ5dXCiEdObbLgqbAM5dTLROmVtqroUtsmpXkij4HOTmCGfTsGmbln1i4k2xaoeq0+yQKF6tOSWHzmIvsw6rUlgCoWmyymSTUcUqRVKKVt4B3OJedZolpWZZzldMnIo0mHjo2SSaxczXco0qExrxpaLLLSgqbtk3ihWKzwu9WWWYgc1GQ2Z0ih5JJhYiplO2SLO2jvNgiostrlspkvp1rRQ72sjhuJnTZHVixkuffnLaOhqHQLWOG5ObzIZ5VKpvg7G8gcbYqlVK3i2wXyOS8VaQV12Cy0qXWjcyGo09dKleiOqcjYNmurAVOZuQ/Cpwe05sBKLATG0ymtQb19Ey4Z9m6blnXNN8Ka/XgM69b651rx6O6QCne/NcKgiW6YB3encGxJPhFgcjozNkLCRpSNCSkZriwdZOrhUVmyfmqPZ42sPAOy4PcM/KtLgTNcGYG6J+ozKxaHLav4GQIdUWv4645yHhFmN12QjFDSoZZhnvpd7vv7fPIffeKhRTq9nHhUaXknyRzlDEJNe44KVGuFXgupxss6pB87ZadQdQ/ycHHAv/unWv+yitUAEQRAEQRAEQRAEQRDEOb4AhN47QIXJ2dMAAAAASUVORK5CYII="
                  alt="Profile"
                  className="rounded-full"
                />
                <span>Opeoluwa Ogunlaja</span>
              </div>
            </div>
          </div>
          <div className="contact-info grid grid-flow-col justify-center gap-16 text-center text-green">
            <div>
              <h5>Location</h5>
              <span>Abuja, Nigeria</span>
            </div>
            <div>
              <h5>Phone</h5>
              <span>(+234) 80 7266 0055</span>
            </div>
            <div>
              <h5>Email</h5>
              <span>Ogunlajaopeoluwa@gmail.com</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative box-content flex gap-32 overflow-hidden bg-neutral-light-400 p-32">
        <div className="logo text-green">
          <FullLogo />
        </div>
        <div className="social-links">
          <h4>Connect</h4>
          <ul className="items-center-center flex flex-col gap-8 text-white">
            <li>
              <a href="">Linkedin</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </ul>
        </div>

        <ul className="ml-auto flex gap-8">
          <li>Fb</li>
          <li>IG</li>
        </ul>
        <nav className="absolute bottom-[0] z-50 w-full text-center">
          <ul className="flex justify-center gap-12 text-white">
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">About me</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

export default Home
