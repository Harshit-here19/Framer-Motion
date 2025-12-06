"use client";

import { motion, useScroll } from "framer-motion"; // 👈 Fixed import (see note below!)

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* 🟥 Scroll Progress Indicator */}
      <motion.div
        id="scroll-indicator"
        className="fixed top-0 left-0 right-0 h-2.5 bg-pink-500 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* 📄 Content */}
      <Content />
    </>
  );
}

/**
 * ==============   Content Component (Styled with Tailwind)   ================
 */

function Content() {
  return (
    <article className="max-w-[500px] mx-auto py-36 px-5 flex flex-col gap-5">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        rhoncus quam.
      </p>
      <p>
        Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
        imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
        Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
        blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
        ipsum tellus, eu tincidunt neque tincidunt a.
      </p>
      <h2 className="text-xl font-semibold">Sub-header</h2>
      <p>
        In eget sodales arcu, consectetur efficitur metus. Duis efficitur
        tincidunt odio, sit amet laoreet massa fringilla eu.
      </p>
      <p>
        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
        Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
        Proin sit amet lacus mollis, semper massa ut, rutrum mi.
      </p>
      <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
      <p>
        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
        leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
      </p>

      <h2 className="text-xl font-semibold">Sub-header</h2>
      <p>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
        sem, sit amet tempor nulla. Quisque fermentum felis faucibus,
        vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula.
        Integer ac enim vel felis pharetra laoreet. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac
        augue quis pretium.
      </p>
      <p>
        Morbi ut scelerisque nibh. Integer auctor, massa non dictum
        tristique, elit metus efficitur elit, ac pretium sapien nisl nec
        ante. In et ex ultricies, mollis mi in, euismod dolor.
      </p>
      <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
    </article>
  );
}