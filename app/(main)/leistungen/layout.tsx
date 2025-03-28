
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
      {children}
    </div>
  );
}
