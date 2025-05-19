import type {Metadata} from "next";
import {Onest} from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@src/components/header";
import Footer from "@src/components/footer";

const onest = Onest({
    variable: "--font-onest",
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tezonly",
    description: "Just issue your query, at the end of it you will have both the response of your query and also the typing corresponding to the response of that query.",
};

type Props = Readonly<{
    children: React.ReactNode;
}>

export default function RootLayout({children}: Props) {
    return (
        <html lang="en">
        <body
            className={`${onest.variable} antialiased`}
        >
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
