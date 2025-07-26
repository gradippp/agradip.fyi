"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { CONFIG } from "@/data/config";

export default function RedPilled() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-4 text-white relative">
      <div className="relative z-10 max-w-4xl w-full text-center space-y-6 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400">
          The Pale Blue Dot
        </h1>

        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl border border-gray-700">
          <video
            src={CONFIG.PALE_BLUE_DOT_MP4}
            controls
            className="w-full h-full"
          />
        </div>

        <div className="text-gray-400 text-base leading-relaxed text-left mt-4 px-2 md:px-6 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            On the Fragility of Meaning
          </h2>
          <p>
            This universe is a little too big for any religious definition of
            God to be true, don&apos;t you think? We are quite literally smaller
            than a grain of dust in the vast expanse of the cosmos. And yet, we
            often convince ourselves that the universe revolves around us - our
            beliefs, our rituals, our need for meaning.
          </p>
          <p>
            We look up at the stars, seeking patterns, stories, divinity -
            trying to fit infinite complexity into the finite imagination. Maybe
            it&apos;s comforting, even necessary, to believe that something so
            vast could still care about us. That we matter. That we&apos;re not
            just fleeting sparks in an indifferent void.
          </p>
          <p>
            And yet, when we peel back the layers of our self-importance,
            we&apos;re met with a silence so vast it almost feels cruel. The
            universe offers no explanations, no reassurances - only the cold
            logic of physics, the entropy that governs the universe, the quiet
            drift of every celestial body billions of light years away. Cosmic
            indifference doesn&apos;t come with malice; it simply is, and we
            must admit that, it doesn&apos;t care that we suffer, it
            doesn&apos;t care if we prosper, it doesn&apos;t care if we love or
            hate, it doesn&apos;t care if we build a civilization or destroy
            one, or simply if we exist or don&apos;t. The idea that we are the
            center of it all crumbles in the face of this scale, replaced by the
            uncomfortable truth that we are, at best, an accident of a series of
            events that just happened to make us exist.
          </p>
          <p>
            And worse still, in the face of this indifference, we falter - not
            with humility, but with arrogance. We wage wars over land and gods,
            poison the very air we breathe, pollute the ground even as we sow
            seeds into it. We are not stewards of this Pale Blue Dot; we are
            merely its fumbling tenants, often incapable of long-term thought or
            collective responsibility. Our species, brilliant as it can be , is
            often reckless and divided. In a universe where intelligence is rare
            and precious, we squander ours in pursuit of power and pride.
            Perhaps, its not that the cosmos doesn&apos;t care about us, but
            rather we fail to care for ourselves, and the Pale Blue Dot.
          </p>
          <p className="italic text-right">~ Agradip</p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-6 text-blue-500 hover:text-blue-300 transition"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
