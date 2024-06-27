export default function ProductLayout({children} : Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body>
                <header className="w-screen h-20 bg-purple-800 text-slate-400 flex justify-center items-center">
                    <p>hello products</p>
                </header>
                <div className="p-3 bg-violet-300">{children}</div>
            </body>
        </html>
    )
}