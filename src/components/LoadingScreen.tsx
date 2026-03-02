import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${hidden ? "hidden" : ""}`}>
      <div className="text-center">
        <h1 className="font-display text-4xl md:text-5xl gradient-gold-text tracking-widest mb-2">
          KUNTAL
        </h1>
        <p className="font-body text-sm tracking-[0.4em] text-muted-foreground uppercase">
          Outfit
        </p>
        <div className="mt-8 flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
