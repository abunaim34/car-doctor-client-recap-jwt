import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const AboutUs = () => {
    return (
        <div className="hero mb-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 relative">
                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 absolute right-5 border-8 border-white top-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-1/2">
                    <h3 className="text-3xl text-orange-400 font-bold">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] mt-7">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;