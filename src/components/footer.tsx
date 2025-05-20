import React from 'react';

function Footer() {
    return (
        <header className={"container mx-auto p-4 py-10"}>
            <small
                className={"text-center text-foreground/80 w-full block"}>&copy; Copyright {new Date().getFullYear()} -
                Mirabylis</small>
        </header>
    );
}

export default Footer;