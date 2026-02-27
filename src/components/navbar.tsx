import React from "react";
import { Link } from "@heroui/link";
import clsx from "clsx";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";

import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

const sectionItems = [
  { label: "Sobre mi", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Redes", href: "#social" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeHash, setActiveHash] = React.useState("#about");

  React.useEffect(() => {
    const syncFromHash = () => {
      setActiveHash(window.location.hash || "#about");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-48% 0px -42% 0px",
        threshold: 0.1,
      },
    );

    const sections = sectionItems
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section));

    sections.forEach((section) => observer.observe(section));
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  const navLinkClass = (href: string) =>
    clsx(
      "rounded-full px-3 py-1.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50",
      activeHash === href
        ? "bg-cyan-500/12 text-cyan-700 dark:bg-cyan-400/20 dark:text-cyan-200"
        : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
    );

  return (
    <HeroUINavbar
      className="fixed left-0 top-0 z-50 w-full border-b border-white/40 bg-white/72 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68 dark:shadow-[0_10px_28px_rgba(2,6,23,0.55)]"
      isMenuOpen={menuOpen}
      maxWidth="xl"
      onMenuOpenChange={setMenuOpen}
      position="sticky"
    >
      <NavbarContent className="gap-2 sm:gap-5" justify="start">
        <NavbarBrand className="max-w-fit gap-2">
          <Link
            className="flex items-center gap-2 rounded-full px-2 py-1 transition-colors hover:bg-slate-900/5 dark:hover:bg-white/10"
            href="/"
          >
            <Logo className="text-cyan-700 dark:text-cyan-300" size={30} />
            <p className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-base">
              Mi Portfolio
            </p>
          </Link>
        </NavbarBrand>

        <div className="ml-4 hidden gap-1 lg:flex">
          {sectionItems.map((item) => (
            <NavbarItem key={item.href}>
              <a
                className={navLinkClass(item.href)}
                href={item.href}
                onClick={() => setActiveHash(item.href)}
              >
                {item.label}
              </a>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="gap-1 sm:gap-2" justify="end">
        <NavbarItem className="flex">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarMenuToggle
          className="text-slate-700 dark:text-slate-200 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </NavbarContent>

      <NavbarMenu className="border-t border-slate-200/80 bg-white/92 pt-4 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/90">
        <div className="mx-2 flex flex-col gap-2">
          {sectionItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <a
                className={clsx(navLinkClass(item.href), "block w-full text-base")}
                href={item.href}
                onClick={() => {
                  setActiveHash(item.href);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
