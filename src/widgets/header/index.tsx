import { LogoField } from "./logo-field";
import { NavField } from "./nav-field";
import { SignField } from "./sign-field";

export const Header = () => {
    return (
      <header
        className={
          "flex fixed w-full flex-row items-center justify-between px-8 top-0 border-b shadow-md z-20 bg-white/10 backdrop-blur-md"
        }
      >
        <LogoField />
        <NavField />
        <SignField />
      </header>
    );
}

export * from './logo-field'
export * from './nav-field'
export * from './sign-field'