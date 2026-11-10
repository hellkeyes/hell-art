function Home() {

    const artCollection = [
        { src: "src/assets/charcoal.png", title: "charcoal"},
        { src: "src/assets/eye.png", title: "eye"},
        { src: "src/assets/eyes.png", title: "eyes"},
        { src: "src/assets/mirror.png", title: "mirror"},
        { src: "src/assets/red-room.png", title: "red-room"},
        { src: "src/assets/things-she-said.png", title: "tss"},
        { src: "src/assets/wish.png", title: "wish"},
    ];

    return (
    <>
        <section className="flex flex-col items-center justify-center bg-[#111110] p-20">
            <div className="heading justify-center">
                <h1 className="font-head  text-[#E8E0D6] p-3">WORK</h1>
            </div>
            
            <div className="img-holder grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {artCollection.map((art, i) => (
                    <div className="art-card break-inside-avoid mb-6" key={i}>
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
