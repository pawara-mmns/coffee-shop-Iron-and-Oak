import Navbar from './components/Navbar'
import Home from './sections/Home'
import Vibe from './sections/Vibe'
import Menu from './sections/Menu'

export default function App() {
	return (
		<div className="min-h-screen bg-black">
			<Navbar />
			<Home />
			<Vibe />
			<Menu />
		</div>
	)
}

