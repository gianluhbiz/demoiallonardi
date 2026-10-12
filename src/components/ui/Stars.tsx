export default function Stars({ className = "text-brass" }: { className?: string }) {
  return (
    <span className={`flex gap-0.5 text-xs ${className}`} aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <i key={i} className="ri-star-fill" />
      ))}
    </span>
  );
}
