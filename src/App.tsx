import Navbar from './components/Navbar'
import Home from './sections/Home'
import Vibe from './sections/Vibe'

export default function App() {
	return (
		<div className="min-h-screen bg-black">
			<Navbar />
			<Home />
			<Vibe />
		</div>
	)
}

