import logo from "@/assets/logo.png";
import van from "@/assets/van.png";
import { Phone, Clock, Truck, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <img src={logo} alt="2-Hour Mattress logo" className="h-14 md:h-20" />
        <a
          href="tel:818-628-8737"
          className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-heading font-bold text-accent-foreground text-sm md:text-base transition hover:opacity-90"
        >
          <Phone className="h-4 w-4" />
          818-MATTRES
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="flex flex-col items-center text-center gap-8">
          <img
            src={logo}
            alt="2-Hour Mattress"
            className="w-64 md:w-96 drop-shadow-lg"
          />
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight max-w-2xl">
            Delivered in <span className="text-accent">2 Hours</span>{" "}
            <br className="hidden md:block" />
            Or It's Free!
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg">
            Same-day mattress delivery right to your door. No waiting, no hassle.
          </p>
          <a
            href="tel:818-628-8737"
            className="rounded-full bg-primary px-8 py-4 font-heading font-bold text-primary-foreground text-lg transition hover:opacity-90 shadow-lg"
          >
            Call Now — 818-MATTRES
          </a>
        </div>

        {/* Video */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-md aspect-[9/16]">
            <iframe
              src="https://www.youtube.com/embed/Dp3SRPpXEJ0"
              title="2-Hour Mattress Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Van showcase */}
        <div className="mt-12 md:mt-20 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={van}
            alt="2-Hour Mattress delivery van"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-primary py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Clock, title: "2-Hour Delivery", desc: "Guaranteed fast delivery or your mattress is free." },
            { icon: Truck, title: "Free Delivery", desc: "No hidden fees. We bring it right to your door." },
            { icon: Star, title: "Top Brands", desc: "Quality mattresses from brands you know and trust." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <div className="rounded-full bg-accent p-4">
                <Icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary-foreground">{title}</h3>
              <p className="text-primary-foreground/70 max-w-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} 2-Hour Mattress. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
