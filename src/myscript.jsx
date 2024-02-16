import { useEffect, useRef } from 'react';

const Script= () => {
  const videosRef = useRef([]);

  useEffect(() => {
    const updateTime = () => {
      const timestamp = Date.now();
      const hours = new Date(timestamp).getHours();
      document.querySelectorAll('time').forEach((element) => {
        element.textContent = `${hours} hr`;
      });
    };

    const updateScrollbar = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      document.documentElement.style.setProperty(
        '--scroll-percentage',
        `${scrollPercentage}%`
      );
    };

    const handleScroll = () => {
      updateScrollbar();
    };

    const handleVideoIntersection = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
          if (!video.playing) {
            video.play();
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      });
    };

    const videos = videosRef.current;

    const observer = new IntersectionObserver(handleVideoIntersection, {
      threshold: 0.5,
    });

    videos.forEach((video) => {
      observer.observe(video);

      video.addEventListener('play', () => {
        video.playing = true;
      });

      video.addEventListener('pause', () => {
        video.playing = false;
      });

      video.addEventListener('click', () => {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    });

    updateTime();
    updateScrollbar();
    setInterval(updateTime, 1000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup code if needed
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Your component JSX here */}
    </div>
  );
};

export default Script;
