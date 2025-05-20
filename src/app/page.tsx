import {buttonVariants} from "@src/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {BlurBg} from "@src/components/blur-bg";
import Constants from "@src/lib/constants";
import {RevealFromBottom} from "@src/components/motions/reveal-from-bottom";
import RevealImage from "@src/components/motions/reveal-image";
import {BorderBeam} from "@src/components/magicui/border-beam";

export default function Home() {
    return (
        <main className={"container mx-auto p-4"}>
            <section className={"flex flex-col items-center gap-6 lg:gap-10 relative z-0"}>
                <div className={"h-12 lg:h-20"}/>
                <RevealFromBottom elt={'h1'}
                                  className="scroll-m-20 text-2xl md:text-4xl font-bold tracking-tight lg:text-5xl text-center max-w-[870px]">
                    Recovering the type corresponding to the response of your request will never have been easier.
                </RevealFromBottom>
                <RevealFromBottom elt={'p'}
                                  className={"text-foreground/80 text-center max-w-[900px] text-base lg:text-xl"}
                                  delay={0.4}>
                    Just issue your query, at the end of it you will have both the response of your query and also the
                    typing corresponding to the response of that query.
                </RevealFromBottom>
                <RevealFromBottom elt={'div'} delay={0.7}>
                    <Link className={buttonVariants()} href={Constants.app_rul}>
                        Make a request
                    </Link>
                </RevealFromBottom>
                <div className={"h-5 lg:h-10"}/>
                <RevealFromBottom delay={0.9} className={"w-full relative"}>
                    <div className={"w-full overflow-hidden relative rounded-xl lg:rounded-3xl"}>
                        <Image priority unoptimized src={"/tezonly-app-content-image.webp"} alt={"Tezonly App content"}
                               width={2142} height={1168}
                               className={"w-full h-auto aspect-auto"}/>
                        <BorderBeam
                            duration={6}
                            size={400}
                            className="from-transparent via-primary to-transparent"
                        />
                        <BorderBeam
                            duration={6}
                            delay={3}
                            size={400}
                            className="from-transparent via-primary to-transparent"
                        />
                    </div>
                </RevealFromBottom>
                <BlurBg/>
            </section>
            <section className={"py-14 lg:py-32 space-y-6 lg:space-y-20"}>
                <RevealFromBottom elt={'h2'}
                                  className="scroll-m-20 text-xl md:text-3xl font-bold tracking-tight lg:text-5xl text-center">How
                    does it work?</RevealFromBottom>
                {/* Step 1 */}
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12"}>
                    <div className={"relative z-0"}>
                        <RevealImage step={'step1'} src={"/step-1-create-request-collection.webp"}
                                     alt={"Create request collection"} height={219}
                                     width={459}/>
                    </div>
                    <div className={"flex flex-col justify-center gap-4"}>
                        <RevealFromBottom elt={'h3'}
                                          className={'scroll-m-20 text-lg lg:text-3xl font-semibold tracking-tight'}>Create
                            a request
                            collection</RevealFromBottom>
                        <RevealFromBottom elt={'p'} delay={0.3}
                                          className={"text-lg lg:text-xl text-foreground/80 text-justify"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </RevealFromBottom>
                    </div>
                </div>
                {/* Step 2 */}
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12"}>
                    <div className={"flex flex-col justify-center gap-4 order-1 lg:order-0"}>
                        <RevealFromBottom elt={'h3'}
                                          className={'scroll-m-20 text-lg lg:text-3xl font-semibold tracking-tight'}>Add
                            new
                            request</RevealFromBottom>
                        <RevealFromBottom elt={'p'} delay={0.3}
                                          className={"text-lg lg:text-xl text-foreground/80 text-justify"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </RevealFromBottom>
                    </div>
                    <div className={"relative z-0 order-0 lg:order-1"}>
                        <RevealImage step={'step2'} src={"/step-2-add-new-request.webp"}
                                     alt={"Add new request"}
                                     height={240}
                                     width={431}
                        />
                    </div>
                </div>
                {/* Step 3 */}
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12"}>
                    <div className={"relative z-0"}>
                        <RevealImage step={'step3'} src={"/step-3-chose-the-right-language.webp"}
                                     alt={"Chose the right language"}
                                     height={243}
                                     width={431}
                        />
                    </div>
                    <div className={"flex flex-col justify-center gap-4"}>
                        <RevealFromBottom elt={'h3'}
                                          className={'scroll-m-20 text-lg lg:text-3xl font-semibold tracking-tight'}>Chose
                            the right
                            language</RevealFromBottom>
                        <RevealFromBottom elt={"p"} className={"text-lg lg:text-xl text-foreground/80 text-justify"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </RevealFromBottom>
                    </div>
                </div>
                {/* Step 2 */}
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12"}>
                    <div className={"flex flex-col justify-center gap-4 order-1 lg:order-0"}>
                        <RevealFromBottom elt={'h3'}
                                          className={'scroll-m-20 text-lg lg:text-3xl font-semibold tracking-tight'}>Copy
                            the type and
                            enjoy</RevealFromBottom>
                        <RevealFromBottom elt={"p"} delay={0.3}
                                          className={"text-lg lg:text-xl text-foreground/80 text-justify"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </RevealFromBottom>
                    </div>
                    <div className={"relative z-0 order-0 lg:order-1"}>
                        <RevealImage
                            step={'step4'}
                            src={"/step-4-copy-the-type-and-enjoy.webp"}
                            alt={"Copy the type and enjoy"}
                            height={230}
                            width={431}
                        />
                    </div>
                </div>
            </section>
            <section className={"py-8 lg:py-16 flex flex-col justify-center items-center gap-10"}>
                <RevealFromBottom elt={'p'}
                                  className={"text-xl lg:text-3xl text-foreground/80 text-justify lg:text-center max-w-[1000px]"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </RevealFromBottom>
                <RevealFromBottom delay={0.3}>
                    <Link href={Constants.app_rul} className={buttonVariants()}>
                        Make my request
                    </Link>
                </RevealFromBottom>
            </section>
        </main>
    );
}
