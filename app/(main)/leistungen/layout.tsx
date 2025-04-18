
import GradientNormalBackground from "@/app/components/gradient/GradientNormalBacground";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* <GradientBackground /> */}
      <GradientNormalBackground/>
      <div className="mt-40 sm:mt-40 px-10 sm:px-16  sm:max-w-7xl mx-auto">

      {children}
      </div>
    </div>
  );
}
