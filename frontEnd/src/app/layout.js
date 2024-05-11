import { poppins } from "@/assets/fonts/fonts.config";
import "@/assets/styles/globals.css";
import GlobalProvider from "@/providers/GlobalProvider";
import { cn } from "@/utils";

export const metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({ children }) {
   return (
      <html className="h-full" lang="en">
         <body className={cn("relative h-full font-sans antialiased", poppins.className)}>
            <GlobalProvider>
               <main className="flex flex-col min-h-screen">
                  <div className="flex-grow flex-1">{children}</div>
               </main>
            </GlobalProvider>
         </body>
      </html>
   );
}
