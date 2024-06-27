export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
            <header className="w-screen p-4 text-center bg-pink-500">
                <p>Write some text hear</p>
            </header>
            <div className="bg-red-500 h-[100vh] flex justify-center items-center">
                {children}
            </div>
        </body>
    </html>
  );
}