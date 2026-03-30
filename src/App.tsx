import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import Vibe from './sections/Vibe'
import Menu from './sections/Menu'
import Gallery from './sections/Gallery'
import Visit from './sections/Visit'

export default function App() {
	return (
		<div className="min-h-screen bg-black">
			<Navbar />
			<Home />
			<Vibe />
			<Menu />
			<Gallery />
			<Visit />
			<Footer />
		</div>
	)
}

