import Navbar from "../components/Navbar";
import HeroBanner from "../components/banner";
import StepsSection from "../components/stepsSection";
import Footer from "../components/footer";

const HowItWorks = () => {
    return (
        <main>
            <Navbar />
            <section className="py-25 md:py-24 lg:py-32 bg-gray-50/70 min-h-[80vh] flex items-center">
                <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12 w-full text-center">
                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 md:mb-8 leading-tight">
                        Bridging the Gap from{' '}
                        <span className="text-blue-600">Learning</span> to
                        <br className="sm:hidden" />
                        <span className="text-blue-600">Earning</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed font-medium">
                        Discover a seamless path to professional success. Bridgify guides you
                        through skill building, certification, and direct marketplace opportunities.
                    </p>

                    {/* Video + caption */}
                    <div className="max-w-5xl mx-auto">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-200/30 bg-black aspect-[16/9]">
                            <video
                                className="w-full h-full object-cover"
                                poster="/images/poster.jpg" // ← change this
                                controls
                            // You can also add muted autoPlay loop playsInline if desired
                            >
                                <source src="/videos/TheBridgifyJourney.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Big centered play button overlay (optional – remove if using native controls only) */}
                            <button
                                className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                                aria-label="Play video"
                            >
                                <div className="w-20 h-20 md:w-28 md:h-28 bg-blue-600 rounded-full flex items-center justify-center shadow-xl transform transition hover:scale-110">
                                    <svg
                                        className="w-10 h-10 md:w-14 md:h-14 text-white ml-1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        {/* Caption */}
                        <p className="mt-5 text-gray-600 text-base md:text-lg font-medium">
                            Watch: The Bridgify Journey (2:45)
                        </p>
                    </div>
                </div>
            </section>
            <StepsSection />
        
            <HeroBanner />
            <Footer />
        </main>
    );

}

export default HowItWorks;