import secretVoteLogo from '../assets/secret-vote-logo-large.svg';
import { ArrowUp, GithubLogo, SignIn } from '@phosphor-icons/react'

export function GlobalFooter() {
  return(
    <footer className="flex flex-col gap-12 py-12 border-solid border-t-[1px] border-b-gray100">

      <section className="flex items-center justify-center h-40">

        <div className="flex flex-col justify-center gap-1 h-full border-solid border-r-[1px] pr-24 border-r-gray100">
          <h4 className="text-lg font-semibold">Sobre</h4>

          <p className="text-xs text-gray400 font-light leading-6 max-w-64">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>

        <div className='flex items-center justify-center gap-4 px-24 h-full border-solid border-r-[1px] border-r-gray100'>
          <img
            src={secretVoteLogo}
            alt="Logo do site 'Voto Secreto'"
          />

          <div>
            <h4 className='text-xl font-semibold'>Voto Secreto 24</h4>

            <p className='text-sm font-light text-gray400'>
              &copy; 2024&nbsp;
              <a
                className='underline underline-offset-1 hover:text-purple400'
                href="https://github.com/andersonsatiro"
                target='_blank'>
                  Anderson
              </a>
              . Todos os direitos reservados.
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center gap-3 pl-24'>
          <div className='flex items-center justify-center w-12 h-12 bg-green50 rounded-full'>
            <GithubLogo size={24} />
          </div>

          <p
            className='text-xs text-gray400'
          >
            código fonte no <a href="https://github.com/andersonsatiro" target="_blank" className='underline'>Github</a>
          </p>

          <button
            className='flex items-center gap-1 py-2 px-9 border-solid border-[1px] border-gray400 rounded-md
            hover:border-purple300 hover:text-purple300'
          >
            <SignIn size={16} />
            <p>Github</p>
          </button>
        </div>



      </section>

      <section>

        <div className='flex flex-col items-center gap-1 pl-24'>
          <a
            className='flex items-center justify-center h-12 w-12 bg-purple200 rounded-full
            hover:cursor-pointer hover:opacity-80'
            href='#header'
          >
            <ArrowUp size={24} className='text-white'/>
          </a>

          <h5 className='text-sm text-gray950 font-medium'>Voltar para o topo</h5>
        </div>

      </section>
    </footer>
  )
}