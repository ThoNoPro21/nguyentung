import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../styles/app.scss';

import { Lora } from 'next/font/google';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
library.add(fas);
config.autoAddCss = false;

const lora = Lora({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lora',
});
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Profile",
    description: "KinhdoanhOnline by NguyenTuyen",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AntdRegistry>{children}</AntdRegistry>
            </body>
        </html>
    );
}
