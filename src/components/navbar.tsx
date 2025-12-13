import React from "react";
import { Link } from "@heroui/link";
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

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  
  const items = [
    { label: "Sobre mí", href: "#about" },
    { label: "Proyectos", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Redes", href: "#social" },
  ];
  
  return (
    <HeroUINavbar
    maxWidth="xl"
    position="sticky"
    isMenuOpen={menuOpen}
    onMenuOpenChange={setMenuOpen}
    className="fixed top-0 left-0 w-full z-50"
    >
    
    {/* Left side: Logo + Desktop Items */}
    <NavbarContent justify="start">
    <NavbarBrand className="gap-3 max-w-fit">
    <Link className="flex justify-start items-center gap-1" href="/">
    <Logo />
    <p className="font-bold">Mi Portfolio</p>
    </Link>
    </NavbarBrand>
    
    {/* Desktop navigation */}
    <div className="hidden lg:flex gap-6 ml-6">
    {items.map((item) => (
      <NavbarItem key={item.href}>
      <a href={item.href} className="text-lg font-medium">
      {item.label}
      </a>
      </NavbarItem>
    ))}
    </div>
    </NavbarContent>
    
    {/* Right side: ThemeSwitch + Toggle mobile */}
    <NavbarContent justify="end">
    
    {/* ThemeSwitch visible SIEMPRE */}
    <NavbarItem className="flex gap-3">
    <ThemeSwitch />
    </NavbarItem>
    
    {/* Toggle solo en mobile */}
    <NavbarMenuToggle
    className="sm:hidden"
    onClick={() => setMenuOpen(!menuOpen)}
    />
    
    </NavbarContent>
    
    
    {/* Mobile Menu */}
    <NavbarMenu>
    <div className="mx-4 mt-4 flex flex-col gap-4">
    {items.map((item, index) => (
      <NavbarMenuItem key={index}>
      <a
      href={item.href}
      className="text-lg"
      onClick={() => setMenuOpen(false)} // Cierra el menú al tocar
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
