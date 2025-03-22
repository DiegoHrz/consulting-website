import GradientBackground from "@/app/components/gradient/GradientBackground";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-full w-full overflow-hidden sm:px-16 px-8">
      <GradientBackground />

      {children}
    </div>
  );
}
