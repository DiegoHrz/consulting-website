import GradientBackground from "@/app/components/gradient/GradientBackground";
import Hero from "./components/Hero";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-screen w-full overflow-hidden sm:px-16 px-8">
      <GradientBackground />
      {children}
    </div>
  );
}
