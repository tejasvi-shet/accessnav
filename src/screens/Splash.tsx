
import { useApp } from '@/store';
import Button from '@/components/Button';
import MumbaiMap from '@/components/MumbaiMap';
import accessNavLogo from '@/accessnav-main-logo.png';

export default function Splash() {
  const { go } = useApp();

  return (
    <div className="screen-enter relative h-full w-full overflow-hidden bg-primary-950">

      {/* Faint map background */}
      <div className="absolute inset-0 opacity-25">
        <MumbaiMap />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 via-primary-950/50 to-primary-950" />

      <div className="relative z-10 flex h-full flex-col items-center px-8 pt-12 text-center text-white">

        {/* Main AccessNav Logo */}
        <div className="relative mt-8 mb-6">
          <div className="absolute inset-0 animate-pulse-ring rounded-3xl bg-primary-400/30" />

          <img
            src={accessNavLogo}
            alt="AccessNav Logo"
            className="relative h-28 w-28 object-contain drop-shadow-[0_0_18px_rgba(59,130,246,0.35)]"
          />
        </div>

        {/* App Name */}
        <h1 className="text-5xl font-extrabold tracking-tight">
          AccessNav
        </h1>

        {/* Tagline */}
        <p className="mt-3 text-lg font-medium text-primary-200">
          Navigate without barriers.
        </p>

        {/* Bottom Section */}
        <div className="mt-auto w-full pb-12">

          <Button
            fullWidth
            onClick={() => go('welcome')}
            className="text-lg"
          >
            Get Started
          </Button>

          <p className="mt-4 text-sm text-primary-300">
            Personalized accessibility · Navigation · Safety
          </p>

        </div>

      </div>
    </div>
  );
}
