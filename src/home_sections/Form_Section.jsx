import React from 'react'
import { TextAreaField, TextField } from '../components/InputFields'
import Button from '../components/Button'

const Form_Section = () => {
  return (
    <section className="form-section mt-192 flex flex-col items-center max-sm:gap-24 sm:gap-64">
      <h3 className="text-pretty text-center font-axiforma text-white max-sm:text-3xl sm:text-5xl">
        Need <strong className="text-green">help</strong> with something?
      </h3>
      <div className="form-grid grid place-content-around place-items-center gap-32">
        <form className="grid gap-16 max-sm:w-full sm:min-w-[342px]">
          <TextField placeholder="Email" className="w-full" />
          <TextField placeholder="Name" className="w-full" />
          <TextAreaField placeholder="How may I help you?" className="w-full" />
          <Button className="px-16 max-sm:w-full sm:w-fit">Contact Me</Button>
        </form>
        <div className="flex h-full flex-col items-center gap-32 self-stretch justify-self-stretch rounded-lg border border-green bg-neutral-9400 bg-opacity-40 px-16 py-32  font-axiforma sm:min-w-[276px]">
          <strong className="text-center text-lg font-medium text-white">
            Here to help you build the best products
          </strong>

          <div className="flex flex-col justify-center gap-8">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAM1BMVEXh4eGjo6Pk5OSgoKDd3d2mpqbBwcHa2tqysrK6urqvr6/X19fU1NSpqam1tbXR0dHKysodkoUeAAAE9ElEQVR4nO2d2XbjIAxAQRgw3uD/v7ZgJ2mbuo6BAHKO7szDdJ64R9hmkVTGCIIgCIIgCIIgCIIgCOISAABjnef2z+sCrButUmZFKTt17KI+AJ1VyyA5F+GP4FwOi7LdFeMDk/IiweEb/5Mc1NR6aLGANt6E7+B9jL5ScIAZsWtyD5C50LNj5wOVVWe2rcd4DmBqf4L9nmzqCsEBvbxUWXWWCzw50zmXYIP+tTYOJ128zTC2Hu0hoM+7BBvcM62PcPE2fevxHgAmysXbGLShARfp4m0cVhs9x7pwPuvWo94nepKtocE50cDKeBe/L7AobUyKC+em9bh3AJvwxARmjKFRaS7cLzmxAWPc9/Ib0Y/YQgMuNTCc4/vWqMTA+NBgm2egU2dZmGfY1pvTq53ygcyMbWPjkr6YG9K1Hv0T8WvMH6HBJpP+/CN8A6QsMh8yyFY03dljjF2ZpWs9/l+QDMnU4KNeAHmvZmSR+ajvTMYOwO8BWo/+iSlx0xzAttD8rC3AJ23OPmvbDBEXM0+BGdAdaLAu8QyQc4PsK8PWQ8Ck0AiUh4AsbXkmltbj3gPSjgEkusd/I+mpQbbIvANjymUTvlfZxkddAzKIfQeIBa0Lgy726rzDK8OYfp0D9MOFI72dvTPK8+kmEne6CYs4Qcd3Xv4XGPtzMvguzHYI6ZknkucukqgJzL3aDohBoX6P/QTGw+AIacZLZTfbRe4n0Aohl4tkmz4I6ebz34+O4HNIOm89ugS09bNtJQQkII1F/p08JNQD9IOnD3UArUeTza3S5OIFJwRBEARBEARBEAQG4M6fH65FGLS2Tpl+bQggtnYAvVHO6kvtoIGN1t3PZZ76AdzOaJwdr1Da3I3ODFIcVdCvUnIwbkR7WhPm1eTM/ByNAyExGzeFWdd67L8B8BFRLyOyGyHlI4TIB9a5xeNEvoX4OuNQ6PigbE9JisndJzxB7cMDbGtikm5y89nanrTU8Spm56g/1Wc2DXXApidm/iPUt8rXmuacB+UfmzZ30Hp5v8qms9S+whkPu+Tk6piK2Q7+ZZyaXXpSZ3DVvjvavOsN9q8NN3Xm2vvfYbs6Vd5r4NLLS6Ns5vJ5dXCiEdObbLgqbAM5dTLROmVtqroUtsmpXkij4HOTmCGfTsGmbln1i4k2xaoeq0+yQKF6tOSWHzmIvsw6rUlgCoWmyymSTUcUqRVKKVt4B3OJedZolpWZZzldMnIo0mHjo2SSaxczXco0qExrxpaLLLSgqbtk3ihWKzwu9WWWYgc1GQ2Z0ih5JJhYiplO2SLO2jvNgiostrlspkvp1rRQ72sjhuJnTZHVixkuffnLaOhqHQLWOG5ObzIZ5VKpvg7G8gcbYqlVK3i2wXyOS8VaQV12Cy0qXWjcyGo09dKleiOqcjYNmurAVOZuQ/Cpwe05sBKLATG0ymtQb19Ey4Z9m6blnXNN8Ka/XgM69b651rx6O6QCne/NcKgiW6YB3encGxJPhFgcjozNkLCRpSNCSkZriwdZOrhUVmyfmqPZ42sPAOy4PcM/KtLgTNcGYG6J+ozKxaHLav4GQIdUWv4645yHhFmN12QjFDSoZZhnvpd7vv7fPIffeKhRTq9nHhUaXknyRzlDEJNe44KVGuFXgupxss6pB87ZadQdQ/ycHHAv/unWv+yitUAEQRAEQRAEQRAEQRDEOb4AhN47QIXJ2dMAAAAASUVORK5CYII="
              alt="Profile"
              className="mx-auto aspect-square w-64 rounded-full"
            />
            <span className="font-quicksand font-bold text-green">Opeoluwa Ogunlaja</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form_Section
