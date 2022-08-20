import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export  const Partical = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
          options={{
          particles: {
            links: {
              enable: true,
              distance: 100,
              opacity: 0.5,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 60,
            },
            size: {
              value: 3,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            opacity: {
              value: 0.5,
            },
          },
          interactivity: {
            detectsOn: 'window',
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
                parallax: {
                  enable: true,
                  force: 100,
                  smooth: 10,
                },
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                opacity: 1,
                size: 6,
              },
            },
          },
          retina_detect: true,
        }}
    />
  );
};