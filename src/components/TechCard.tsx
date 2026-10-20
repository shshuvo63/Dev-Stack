import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

interface TechItem {
  id: string;
  name: string;
  description: string;
  badge: string;
  rating: number;
  difficulty: string;
  icon: string;
  category: string;
}

const BADGE_STYLES: Record<string, string> = {
  popular: 'bg-cyan-50 text-cyan-600 border-cyan-100',
  essential: 'bg-sky-50 text-sky-600 border-sky-100',
  fast: 'bg-amber-50 text-amber-600 border-amber-100',
  'top sql': 'bg-blue-50 text-blue-600 border-blue-100',
  containers: 'bg-sky-50 text-sky-600 border-sky-100',
};

function isTechItem(value: unknown): value is TechItem {
  if (typeof value !== 'object' || value === null) return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.id === 'string' &&
    typeof item.name === 'string' &&
    typeof item.category === 'string' &&
    typeof item.description === 'string' &&
    typeof item.icon === 'string' &&
    typeof item.rating === 'number' &&
    typeof item.difficulty === 'string' &&
    typeof item.badge === 'string'
  );
}

export default function TechStackBuilder() {
  const [techData, setTechData] = useState<TechItem[]>([]);
  const [selectedStack, setSelectedStack] = useState<TechItem[]>([]);
  const selectedStackRef = useRef<TechItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadTechData() {
      try {
        const response = await fetch('/data.json', { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Failed to load technologies (${response.status}).`);
        }

        const data: unknown = await response.json();
        if (!Array.isArray(data) || !data.every(isTechItem)) {
          throw new Error('The technology data has an invalid format.');
        }

        setTechData(data);
      } catch (loadError) {
        if (!controller.signal.aborted) {
          setError(loadError instanceof Error ? loadError.message : 'Failed to load technologies.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void loadTechData();
    return () => controller.abort();
  }, []);

  const handleAddToStack = (tech: TechItem) => {
    if (selectedStackRef.current.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }

    const nextStack = [...selectedStackRef.current, tech];
    selectedStackRef.current = nextStack;
    setSelectedStack(nextStack);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemoveFromStack = (id: string) => {
    const removedTech = selectedStackRef.current.find((item) => item.id === id);
    if (!removedTech) return;

    const nextStack = selectedStackRef.current.filter((item) => item.id !== id);
    selectedStackRef.current = nextStack;
    setSelectedStack(nextStack);
    toast.info(`${removedTech.name} removed from your stack.`);
  };

  const handleRemoveAllFromStack = () => {
    if (selectedStackRef.current.length === 0) return;

    selectedStackRef.current = [];
    setSelectedStack([]);
    toast.info('All technologies removed from your stack.');
  };

  return (
    <section id="technologies" className="scroll-mt-20 w-full bg-[#fafafa] p-6 font-sans text-slate-800 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Explore the <span className="text-pink-500">Technologies</span>
          </h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Tech Cards Section (3 columns) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {isLoading ? (
              <p className="text-slate-500">Loading technologies...</p>
            ) : error ? (
              <p role="alert" className="text-rose-600">{error}</p>
            ) : techData.map((tech) => {
              const isInStack = selectedStack.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:border-slate-200"
                >
                  <div>
                    {/* Card Top: Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-50">
                        <img src={tech.icon} alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <span
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${
                          BADGE_STYLES[tech.badge.toLowerCase()] || 'bg-slate-50 text-slate-600 border-slate-100'
                        }`}
                      >
                        {tech.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{tech.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-6 min-h-[48px]">
                      {tech.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags & Rating */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pt-2">
                      <div className="flex items-center gap-2">
                        {[tech.category, tech.difficulty].map((tag) => (
                          <span
                            key={tag}
                            className="bg-slate-50 text-slate-600 px-2 py-1 rounded-md text-[11px] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 font-semibold text-slate-700">
                        <span aria-hidden="true" className="text-amber-400">★</span>
                        <span>{tech.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleAddToStack(tech)}
                      type="button"
                      className={`w-full py-2.5 rounded-xl font-medium text-xs transition-colors duration-200 ${
                        isInStack
                          ? 'cursor-default bg-emerald-50 text-emerald-700'
                          : 'bg-black text-white hover:bg-slate-800'
                      }`}
                    >
                      {isInStack ? '✓ Added to Stack' : 'Add to Stack'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Sidebar: Your Stack */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
              <h2 className="text-base font-bold text-slate-900">Your Stack</h2>
              <p className="text-slate-400 text-xs mt-0.5 mb-4">
                {selectedStack.length === 0
                  ? 'No technologies selected yet.'
                  : `${selectedStack.length} ${selectedStack.length === 1 ? 'technology' : 'technologies'} selected`}
              </p>

              {selectedStack.length === 0 ? (
                /* Empty State Box */
                <div className="border border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center">
                  <p className="text-slate-400 text-xs font-medium">Your stack is empty.</p>
                </div>
              ) : (
                /* Selected Stack List */
                <div className="space-y-2">
                  {selectedStack.map((tech) => (
                    <div
                      key={tech.id}
                      className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 px-2 py-2"
                    >
                      <div className="flex min-w-0 items-center gap-2">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                          <img src={tech.icon} alt="" className="h-5 w-5 object-contain" />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-xs font-semibold text-slate-800">{tech.name}</p>
                          <p className="truncate text-[10px] text-slate-400">{tech.category}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveFromStack(tech.id)}
                        className="shrink-0 p-1 text-slate-400 transition-colors hover:text-rose-500"
                        type="button"
                        aria-label={`Remove ${tech.name} from stack`}
                      >
                        <span aria-hidden="true" className="text-sm leading-none">×</span>
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={handleRemoveAllFromStack}
                    className="mt-4 w-full rounded-lg border border-rose-200 py-1.5 text-xs font-medium text-rose-600 transition-colors hover:bg-rose-50"
                    type="button"
                  >
                    Remove All
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}