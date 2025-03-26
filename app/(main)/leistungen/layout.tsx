import GradientBackground from "@/app/components/gradient/GradientBackground";
import GradientNormalBackground from "@/app/components/gradient/GradientNormalBacground";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-full w-full overflow-hidden sm:px-16 px-8">
      {/* <GradientBackground /> */}
      <GradientNormalBackground/>
      {children}
    </div>
  );
}
