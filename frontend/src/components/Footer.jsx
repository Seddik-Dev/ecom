import React from "react";
import {
  Truck,
  ShieldCheck,
  Headset,
  RotateCcw,
  Mail,
  Phone,
  MapPin,
  CreditCard,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const trustBadges = [
  {
    icon: Truck,
    title: "Livraison rapide",
    text: "Partout en France",
  },
  {
    icon: ShieldCheck,
    title: "Paiement sécurisé",
    text: "3D Secure",
  },
  {
    icon: Headset,
    title: "Service client",
    text: "Du lundi au samedi",
  },
  {
    icon: RotateCcw,
    title: "Retours faciles",
    text: "14 jours pour changer d'avis",
  },
];

const footerColumns = [
  {
    title: "Produits",
    links: [
      "Apple",
      "PC portables",
      "PC de bureau",
      "Smartphones",
      "TV & Son",
      "Périphériques",
    ],
  },
  {
    title: "Service client",
    links: [
      "Suivre ma commande",
      "Livraison & retours",
      "Garanties",
      "SAV & réparation",
      "Contactez-nous",
      "FAQ",
    ],
  },
  {
    title: "À propos",
    links: [
      "Qui sommes-nous",
      "Nos magasins",
      "Recrutement",
      "Engagement RSE",
      "Programme partenaires",
      "Presse",
    ],
  },
  {
    title: "Aide",
    links: [
      "Mon compte",
      "Mes commandes",
      "Moyens de paiement",
      "Conditions générales de vente",
      "Politique de confidentialité",
      "Mentions légales",
    ],
  },
];

const socialLinks = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaXTwitter, label: "Twitter / X", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Bandeau réassurance */}
      <div className="border-b border-slate-700">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-8 sm:grid-cols-2 sm:px-10 lg:grid-cols-4">
          {trustBadges.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-800 text-sky-400">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-slate-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-b border-slate-700">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center sm:px-10">
          <div>
            <h3 className="text-lg font-bold text-white">
              Restez informé de nos nouveautés
            </h3>
            <p className="text-sm text-slate-400">
              Offres exclusives, nouveaux produits, conseils tech : directement dans votre boîte mail.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md gap-2 sm:w-auto"
          >
            <input
              type="email"
              required
              placeholder="Votre adresse e-mail"
              className="w-full rounded-full border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-sky-500"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-500"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>

      {/* Liens principaux */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Bloc marque + contact */}
          <div className="lg:col-span-1">
            <p className="mb-4 text-xl font-extrabold tracking-tight text-white">
              MaBoutique
            </p>
            <p className="mb-5 text-sm text-slate-400">
              Votre spécialiste high-tech : informatique, gaming, image & son,
              au meilleur prix.
            </p>

            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sky-400" />
                01 23 45 67 89
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sky-400" />
                contact@maboutique.fr
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sky-400" />
                Casablanca, Maroc
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-sky-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Colonnes de liens */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                {column.title}
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors hover:text-sky-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Moyens de paiement */}
      <div className="border-t border-slate-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:px-10">
          <p className="text-xs text-slate-500">Moyens de paiement acceptés</p>
          <div className="flex items-center gap-3 text-slate-400">
            <CreditCard className="h-6 w-6" />
            <span className="text-xs font-semibold">Visa</span>
            <span className="text-xs font-semibold">Mastercard</span>
            <span className="text-xs font-semibold">PayPal</span>
            <span className="text-xs font-semibold">Apple Pay</span>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row sm:px-10">
          <p>© {new Date().getFullYear()} MaBoutique. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-slate-300">
              Conditions générales
            </a>
            <a href="#" className="hover:text-slate-300">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-slate-300">
              Mentions légales
            </a>
            <a href="#" className="hover:text-slate-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}