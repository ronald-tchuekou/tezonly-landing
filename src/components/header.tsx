import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {buttonVariants} from "@src/components/ui/button";
import Constants from "@src/lib/constants";

function Header() {
    return (
        <header className={"flex justify-between items-center container mx-auto p-4"}>
            <Link href={"/"}>
                <Image src={"/tezonly-inline-logo.png"} alt={"Tezonly Logo"} height={"61"} width={"204"}
                       className={"aspect-auto h-10 w-auto"}/>
            </Link>
            <Link href={Constants.app_rul} className={buttonVariants()}>
                Open the app
            </Link>
        </header>
    );
}

export default Header;