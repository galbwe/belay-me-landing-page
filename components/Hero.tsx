import Image from 'next/image'
import climberImage from '../public/climber-image.jpeg'


export interface HeroProps {
    heading: string,

}


export default function Hero(
    { heading }: HeroProps
) {
    return (
        <section className="mb-40">
        <div className="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12 flex items-center">
            <div className="mt-12 lg:mt-0">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">{heading}</h1>
                <p className="text-slate-500 font-medium mb-12">Know who will belay you before you get to the gym. Join our community of Denver climbers and plan your next killer session today!</p>
                <form method="post">
                    <input className="form-control p-2 mx-3" type="email" id="email" name="email" placeholder="Your Email"/>
                    <button className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" type="submit">Sign Up</button>
                </form>
                <p className="text-slate-500 font-medium mt-12">Join our mailing list to receive information about the product and a 25% discount code when we launch!</p>
            </div>
            <div className="mb-12 lg:mb-0">
                <Image
                    src={climberImage}
                    alt="Man climbing a rock wall in a gym."
                />
            </div>
            </div>
        </div>
        </div>
    </section>
    )
}