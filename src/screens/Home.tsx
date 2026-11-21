
import { useApp } from '@/store';
import MumbaiMap from '@/components/MumbaiMap';
import SearchBar from '@/components/SearchBar';
import BottomNav from '@/components/BottomNav';
import SOSButton from '@/components/SOSButton';

import {
  Search,
  User,
  AlertTriangle,
  MapPin,
} from 'lucide-react';

export default function Home() {
  const { go, mode, highContrast } = useApp();

  const contrastEnabled = highContrast || mode === 'lowvision';

  return (
    <div
      className={`screen-enter relative h-full w-full overflow-hidden ${
        contrastEnabled ? 'bg-black text-white' : 'bg-slate-100'
      }`}
    >
      {/* MAP BACKGROUND */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <MumbaiMap
          mode={mode}
          highContrast={contrastEnabled}
        />
      </div>

      {/* TOP CONTENT */}
      <div
        className="absolute inset-x-0 top-0 px-4"
        style={{
          zIndex: 40,
          paddingTop: 'calc(env(safe-area-inset-top, 0px) + 28px)',
        }}
      >
        {/* PROFILE + SEARCH */}
        <div className="flex w-full items-center gap-3">

          <button
            onClick={() => go('profile')}
            aria-label="Profile"
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-card active:scale-95 ${
              contrastEnabled
                ? 'bg-yellow-300 text-black border-2 border-black'
                : 'bg-white'
            }`}
            style={
              contrastEnabled
                ? {
                    backgroundColor: '#fde047',
                    color: '#000000',
                    border: '2px solid #000000',
                  }
                : undefined
            }
          >
            <User
              size={22}
              className={
                contrastEnabled ? 'text-black' : 'text-primary-700'
              }
            />
          </button>

          <div className="min-w-0 flex-1">
            <SearchBar
              icon={
                <Search
                  size={20}
                  className={`shrink-0 ${
                    contrastEnabled ? 'text-yellow-300' : 'text-slate-400'
                  }`}
                />
              }
              placeholder="Where do you want to go?"
              onClick={() => go('search')}
            />
          </div>

        </div>

        {/* QUICK ACTIONS */}
        <div className="mt-3 flex flex-nowrap items-center gap-2">

          <QuickChip
            icon={<MapPin size={16} />}
            label="Nearby"
            onClick={() => go('nearby')}
            highContrast={contrastEnabled}
          />

          <QuickChip
            icon={<span>❤️</span>}
            label="Saved"
            onClick={() => go('saved')}
            highContrast={contrastEnabled}
          />

          <QuickChip
            icon={<AlertTriangle size={16} />}
            label="Report Issue"
            onClick={() => go('report')}
            highContrast={contrastEnabled}
          />

        </div>

        {/* ROUTE PREFERENCE */}
        <div className="mt-3">

          <div
            className={`rounded-2xl p-4 shadow-card backdrop-blur ${
              contrastEnabled
                ? 'bg-black text-white border-2 border-yellow-300'
                : 'bg-white/95'
            }`}
          >

            <p
              className={`text-xs font-bold uppercase tracking-wide ${
                contrastEnabled ? 'text-yellow-300' : 'text-slate-400'
              }`}
            >
              Your route preference
            </p>

            <div className="mt-2 flex items-center gap-3">

              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-2xl ${
                  contrastEnabled
                    ? 'bg-yellow-300 text-black'
                    : 'bg-primary-50'
                }`}
              >
                {mode === 'wheelchair' ? '♿' : '👁'}
              </span>

              <div className="min-w-0">

                <p
                  className={`text-base font-bold ${
                    contrastEnabled ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {mode === 'wheelchair'
                    ? 'Wheelchair'
                    : 'Low Vision'}
                </p>

                <p
                  className={`text-sm ${
                    contrastEnabled ? 'text-white' : 'text-slate-500'
                  }`}
                >
                  {mode === 'wheelchair'
                    ? 'Avoid stairs • Prefer ramps'
                    : 'High contrast • Voice guidance'}
                </p>

              </div>

            </div>

          </div>
        </div>

      </div>

      {/* SOS */}
      <div
        className="absolute bottom-24 right-4"
        style={{ zIndex: 40 }}
      >
        <SOSButton />
      </div>

      {/* BOTTOM NAVIGATION */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{ zIndex: 40 }}
      >
        <BottomNav />
      </div>

    </div>
  );
}

/* QUICK ACTION CHIP */

function QuickChip({
  icon,
  label,
  onClick,
  highContrast,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  highContrast: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2.5 text-sm font-semibold shadow-card backdrop-blur active:scale-95 ${
        highContrast
          ? 'bg-yellow-300 text-black border-2 border-black'
          : 'bg-white/95 text-slate-700'
      }`}
      style={
        highContrast
          ? {
              backgroundColor: '#fde047',
              color: '#000000',
              border: '2px solid #000000',
            }
          : undefined
      }
    >
      {icon}
      {label}
    </button>
  );
}
