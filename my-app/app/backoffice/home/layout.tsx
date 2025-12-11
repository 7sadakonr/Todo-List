import Sidebar from "../../components/Sidebar";
import PixelBlast from "../../components/PixelBlast/PixelBlast";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background - Fixed and behind content */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <PixelBlast
            variant="circle"
            pixelSize={4}
            color="#ffff"
            patternScale={3}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.5}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            speed={0.6}
            edgeFade={0.10}
            transparent
          />
      </div>

      <div className="relative flex h-screen z-10 overflow-hidden">
        {/* Sidebar - Fixed */}
        <div className="flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 lg:pt-0">
          <div className="w-full h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}