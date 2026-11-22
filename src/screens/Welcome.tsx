
import { useApp } from '@/store';
import Button from '@/components/Button';
import accessNavLogo from '@/accessnav-main-logo.png';

export default function Welcome() {
  const { go } = useApp();

  return (
    <div className="screen-enter flex h-full w-full flex-col bg-white px-7 pb-8 pt-10">

      {/* Main AccessNav Logo */}
      <div className="mb-6 flex items-center justify-center">
        <img
          src={accessNavLogo}
          alt="AccessNav Logo"
          className="h-20 w-20 object-contain"
        />
      </div>

      {/* Heading */}
      <h1 className="text-center text-2xl font-extrabold text-slate-900 whitespace-nowrap">
  Welcome to AccessNav
</h1>

      <p className="mt-2 text-base leading-relaxed text-slate-500">
        Your route. Your accessibility needs. Your choice.
      </p>

      {/* Features */}
      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-3 rounded-2xl bg-accessible-50 p-4">
          <span className="text-2xl">♿</span>
          <p className="text-sm font-medium text-accessible-800">
            Step-free routes with ramps and elevators
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-primary-50 p-4">
          <span className="text-2xl">👁</span>
          <p className="text-sm font-medium text-primary-800">
            High-contrast guidance with voice instructions
          </p>
        </div>

      </div>

      {/* Authentication Buttons */}
      <div className="mt-auto space-y-3 pt-6">

        <Button
          fullWidth
          onClick={() => go('register')}
          className="text-lg"
        >
          Get Started
        </Button>

        <Button
          fullWidth
          variant="secondary"
          onClick={() => go('login')}
        >
          Sign In
        </Button>

        <Button
          fullWidth
          variant="ghost"
          onClick={() => go('setup')}
        >
          Continue as Guest
        </Button>

      </div>

    </div>
  );
}
