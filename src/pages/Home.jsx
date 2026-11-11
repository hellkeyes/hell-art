import { useEffect } from 'react';

import mirror from '../assets/mirror.png';
import eyes from '../assets/eyes.png';
import charcoal from '../assets/charcoal.png';
import eye from '../assets/eye.png';
import wish from '../assets/wish.png';
import thingsSheSaid from '../assets/things-she-said.png';
import redRoom from '../assets/red-room.png';

function Home() {

    const artCollection = [
        { src: mirror, title: "mirror" },
        { src: eyes, title: "eyes" },
        { src: charcoal, title: "charcoal" },
        { src: eye, title: "eye" },
        { src: wish, title: "wish" },
        { src: thingsSheSaid, title: "tss" },
        { src: redRoom, title: "red-room" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
             entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("opacity-0", "translate-y-30");
                    entry.target.classList.add("opacity-100", "translate-y-0");
                }
            });
        });
        const cards = document.querySelectorAll(".art-card");
        cards.forEach((card) => {
            observer.observe(card);
        });

    }, []);

    return (
    <>

        <section className="flex flex-col items-center justify-center bg-[#111110] p-20">
            <div className="heading justify-center pb-10">
                <h1 className="font-head text-4xl text-[#E8E0D6] p-4">WORK</h1>
            </div>
            
            <div className="img-holder columns-2 md:columns-3 gap-8">
                {artCollection.map((art, i) => (
                    <div className="art-card  break-inside-avoid mb-6 opacity-0 transition-all  translate-y-30 duration-[1s]" key={i}>
                        <img src={art.src} alt={art.title} className="art-image" />
                    </div>
                )
                )}
            </div>

        </section>
    </>
  )
}

export default Home;

