import { GlobalHeader } from "./components/GlobalHeader"
import { MainHomeTitles } from "./components/MainHomeTitles"

export function App() {
  return (
    <div className="w-full h-full min-h-screen bg-white100">
      <GlobalHeader navIsActive={true} />

      <main className="flex items-center justify-center mt-24">
        <MainHomeTitles />
      </main>

    </div>
  )
}