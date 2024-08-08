import secretVoteLogo from '../assets/secret-vote-logo-large.svg';

export function GlobalFooter() {
  return(
    <footer className="pt-8 border-solid border-t-[1px] border-b-gray100">

      <section className="flex items-center justify-center  ">
        <div className="flex flex-col gap-1 border-solid border-r-[1px] pr-24 border-r-gray100">
          <h4 className="text-lg font-semibold">Sobre</h4>

          <p className="text-xs text-gray400 font-light leading-6 max-w-64">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>

        <div className='flex items-center gap-4 pl-24'>
          <img
            src={secretVoteLogo}
            alt="Logo do site 'Voto Secreto'"
          />

          <div>
            <h4 className='text-xl font-semibold'>Voto Secreto 24</h4>

            <p className='text-xs font-light'>
              &copy; 2024&nbsp;
              <a className='underline underline-offset-1 hover:text-purple400 hover:font-medium' href="https://github.com/andersonsatiro" target='_blank'>Anderson</a>
              . Todos os direitos reservados.
            </p>
          </div>
        </div>
      </section>

    </footer>
  )
}