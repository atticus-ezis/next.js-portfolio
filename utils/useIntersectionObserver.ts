import { useEffect, useState } from 'react';

const useIntersectionObserver = (id: string) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the hook runs only on the client side
  }, []);

  useEffect(() => {
    if (!isClient) return; // Skip running if not on client side

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
            entry.target.classList.remove('opacity-0', '-translate-x-20');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [id, isClient]);
};

export default useIntersectionObserver;
