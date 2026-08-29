import { Link } from "@tanstack/react-router";
import { handleImageError } from "@/lib/asset";
import { Mail, MapPin, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={logoImg}
            onError={handleImageError}
              alt="Refugee Basketball Initiative"
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Refugee Basketball Initiative uses sport as a platform for youth development,
            education and leadership in refugee and host communities.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/about" className="hover:text-accent">About us</Link></li>
            <li><Link to="/programs" className="hover:text-accent">Programs</Link></li>
            <li><Link to="/impact" className="hover:text-accent">Impact</Link></li>
            <li><Link to="/stories" className="hover:text-accent">Stories</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide">Support</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/get-involved" className="hover:text-accent">Donate</Link></li>
            <li><Link to="/get-involved" className="hover:text-accent">Volunteer</Link></li>
            <li><Link to="/get-involved" className="hover:text-accent">Partner with us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0" /> Kakuma & Nairobi, Kenya</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 size-4 shrink-0" /> hello@refugeebasketball.org</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 size-4 shrink-0" /> +254 700 000 000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Refugee Basketball Initiative. All rights reserved.
      </div>
    </footer>
  );
}
