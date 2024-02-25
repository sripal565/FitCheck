import React from "react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button
} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import Link from "next/link.js";
import {Image} from "@nextui-org/react";
import {FitLogo} from "./FitLogo.jsx";



export default function navbar() {
  return (
    <Navbar>
      <NavbarBrand>
      {/* <Link href="/">
        <AcmeLogo />
      </Link> */}
      <Link href="/">
            <Image src="/logov3.png" alt="logo" width={60} height={60} />
      </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/closet">
            Closet
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/generator">
            Generator
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Recommendations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
