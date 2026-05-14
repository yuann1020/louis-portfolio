const TEXT = "BUILDING PRACTICAL DIGITAL PRODUCTS";
const SEP = "•";

export function FooterMarquee() {
  const repeated = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="marquee-content" aria-hidden={i > 0 ? "true" : undefined}>
      <span className="marquee-text">{TEXT}</span>
      <span className="marquee-sep">{SEP}</span>
    </span>
  ));

  return (
    <div className="marquee-wrap" aria-label={TEXT}>
      <div className="marquee-track" role="marquee">
        {repeated}
      </div>
    </div>
  );
}
