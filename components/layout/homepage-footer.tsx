import Image from "next/image";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { company, sports } from "@/content/ast";
import { homepageServices } from "@/content/homepage";
import { productCategories } from "@/content/navigation";
import { FooterCursor } from "@/components/layout/footer-cursor";

const exploreLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Testing & Certification", href: "/certificates" },
  { name: "Brochures", href: "#brochures" },
  { name: "Contact Us", href: "#contact" },
];

export function HomepageFooter({ homeHref = "" }: { homeHref?: string }) {
  const groups = [
    { title: "Products", links: productCategories[0].cards },
    { title: "Sports", links: sports.map(sport => ({ name: sport.name, href: sport.source })) },
    { title: "Services", links: homepageServices.map(service => ({ name: service.name, href: `${homeHref}#service-${service.slug}` })) },
    { title: "Company", links: exploreLinks.map(link => ({ ...link, href: `${homeHref}${link.href}` })) },
  ];

  return (
    <footer className="site-footer" data-nav-theme="light" aria-label="AST footer">
      <FooterCursor />
      <div className="page-container">
        <div className="footer-main">
          <div className="footer-profile">
            <a href={`${homeHref}#home`} className="footer-logo">
              <Image className="ast-brand-logo" src="/brand/ast-logo1.png" alt="Advanced Sports Technologies" width={190} height={54} />
            </a>
            <p className="footer-introduction">Synthetic sports surfaces, built across India. Exclusive partner of Polytan/SportGroup Germany.</p>
            <address className="footer-contact">
              <p><MapPin size={19} aria-hidden="true" /><span>{company.contact.address}<br />{company.contact.city}</span></p>
              <a href={company.contact.phoneHref}><Phone size={18} aria-hidden="true" /><span>{company.contact.phone}</span></a>
              <a href={`mailto:${company.contact.email}`}><Mail size={18} aria-hidden="true" /><span>{company.contact.email}</span></a>
            </address>
          </div>
          <div className="footer-links">
            {groups.map(group => (
              <nav aria-label={`Footer ${group.title.toLowerCase()}`} key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map(link => <li key={link.href}><a href={link.href}>{link.name}</a></li>)}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="footer-connect">
          <div className="footer-contact-actions">
            <a href={company.contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with AST on WhatsApp"><WhatsAppIcon size={21} /></a>
            <a href={company.contact.phoneHref} aria-label="Call AST"><Phone size={19} /></a>
            <a href={`mailto:${company.contact.email}`} aria-label="Email AST"><Mail size={20} /></a>
          </div>
          <div className="footer-connect-copy"><p>FACILITATING EXCELLENCE</p><h2>Let’s build your<br />next sports facility.</h2></div>
          <a href={`mailto:${company.contact.email}`} className="footer-email"><Mail size={23} aria-hidden="true" /><span>{company.contact.email}</span><ArrowUpRight size={20} aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Advanced Sports Technologies LLP. All Rights Reserved.</span>
          <a href="#home" className="footer-back-top">Back to top <ArrowUp size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
