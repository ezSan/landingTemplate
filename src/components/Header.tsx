import Logo  from "@/components/atoms/Logo"
import { ThemeToggle } from "@/components/atoms/ThemeToggle"
import { NavMenu } from "@/components/molecules/NavMenu"
import { MobileMenu } from "./atoms/MovileMenu";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 border-b bg-background">
      <Logo />
      <div className="flex items-center gap-4 ml-auto">
        <NavMenu />      {/* Desktop */}
        <ThemeToggle />  {/* Toggle Dark/Light */}
        <MobileMenu />   {/* Mobile */}
      </div>
    </header>
  )
}
