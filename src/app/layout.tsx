import "./globals.css";
import StoreProvider from "@/app/store/provider/StoreProvider";
import Header from "./components/header/Header";
import Loading from "./loading";
import { Suspense } from "react";
import { Montserrat } from "@next/font/google";
import Footer from "./components/footer/Footer";
import Toast from "./components/toast/Toast";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={montserrat.className}>
            <head />
            <body>
                <StoreProvider>
                    <header>
                        <Header />
                    </header>
                    <main>
                        <Suspense fallback={<Loading />}>
                            {children}
                        </Suspense>
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </StoreProvider>
                <Toast />
            </body>
        </html>
    )
}
