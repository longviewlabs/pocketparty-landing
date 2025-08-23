import { CircleLoopVideo } from "./CircleLoopVideo";
import Image from "next/image";

export function Benefits() {
  return (
    <section aria-labelledby="benefits-heading" className="space-y-8">
                        <div className="text-center space-y-4">
                    <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFF845] via-white to-[#FFF845] bg-clip-text text-transparent animate-pulse">
                      Stop Scrolling. Start Connecting.
                    </h2>
                  </div>
      
                        <div className="grid md:grid-cols-3 gap-8 divide-x-[3px] divide-border/30">
                    {/* Benefit 1: Create real connection */}
                    <div className="space-y-4 md:pr-8">
                      <div className="flex items-center gap-4">
                        <div className="relative shrink-0 rounded-full overflow-hidden ring-2 ring-[#FFF845]/50 shadow-sm h-20 w-20 md:h-24 md:w-24">
                          <img
                            src="/create-real-connection.jpg"
                            alt="People laughing and connecting through real-life social activities"
                            className="h-full w-full object-cover pointer-events-none select-none"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Create real connection</h3>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        150+ of the world's best connection games — proven to spark laughter, conversation, and bonding without screens.
                      </p>
                    </div>

                    {/* Benefit 2: Make fun effortless */}
                    <div className="space-y-4 md:px-8">
                      <div className="flex items-center gap-4">
                        <div className="relative shrink-0 rounded-full overflow-hidden ring-2 ring-[#FFF845]/50 shadow-sm h-20 w-20 md:h-24 md:w-24">
                          <img
                            src="/make-fun-effortless.jpg"
                            alt="Friends easily joining games together without complicated setup"
                            className="h-full w-full object-cover pointer-events-none select-none"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Make fun<br />effortless</h3>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Play anywhere, instantly — on web or app, anyone can join without downloads, so the focus stays on each other.
                      </p>
                    </div>

                    {/* Benefit 3: Join the offline movement */}
                    <div className="space-y-4 md:pl-8">
                      <div className="flex items-center gap-4">
                        <div className="relative shrink-0 rounded-full overflow-hidden ring-2 ring-[#FFF845]/50 shadow-sm h-20 w-20 md:h-24 md:w-24">
                          <img
                            src="/Join-movement.jpg"
                            alt="Group of people choosing offline activities over digital screens"
                            className="h-full w-full object-cover pointer-events-none select-none"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Join the offline movement</h3>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Pocket Party is powering a global movement of play — no equipment, less screen time, designed for the touch grass generation.
                      </p>
                    </div>
                  </div>
    </section>
  );
}

export default Benefits;
