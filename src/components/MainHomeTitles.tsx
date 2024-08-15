import BrasilFlag from '../assets/brasil-flag.svg'

export function MainHomeTitles(){
  return(
    <section className="flex flex-col items-center gap-5">

      <h1 className="text-6xl text-gray950 text-center font-semibold leading-[4rem]">
        <span className="text-purple300">Voto Secreto24: </span>
        participe <br/> e veja os resultados
      </h1>

      <h3 className="flex text-3xl">
        das principais disputas eleitorais do
        <img src={BrasilFlag} alt="" className="w-8 ml-3" />
        .
      </h3>

      <p className="text-gray400">
        <span className="text-red100">Obs.:</span> os resultados desta enquete refletem
        apenas a opinião dos participantes do site.
      </p>

    </section>
  )
}