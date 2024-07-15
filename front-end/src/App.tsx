import { GlobalHeader } from "./components/GlobalHeader";

export function App() {
  return (
    <div className="w-full h-full min-h-screen bg-white100">
      <GlobalHeader navIsActive={true} />
    </div>
  )
}