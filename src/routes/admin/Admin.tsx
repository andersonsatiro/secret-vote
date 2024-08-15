import { GlobalHeader } from "../../components/GlobalHeader";
import { NewDispute } from "./components/NewDispute";

export function Admin() {
  return(
    <div className="w-full h-full min-h-screen bg-white100">
      <GlobalHeader navIsActive={false} />

      <main className="flex items-center justify-center mt-24">
        <section>
          <NewDispute />
        </section>
      </main>

    </div>
  )
}