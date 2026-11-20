"use client";

import { useState } from "react";

// Review data structure
interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  title: string;
  comment: string;
  helpfulCount: number;
}

const SAMPLE_REVIEWS: Record<string, Review[]> = {
  "wave-runner": [
    {
      id: "r1",
      author: "Alex Morgan",
      rating: 5,
      date: "2 days ago",
      verified: true,
      title: "Best running shoe I've owned",
      comment: "Super comfortable for long runs. The foam midsole absorbs every impact with zero knee pain.",
      helpfulCount: 14,
    },
    {
      id: "r2",
      author: "Jordan Lee",
      rating: 4,
      date: "1 week ago",
      verified: true,
      title: "Lightweight and breathable",
      comment: "Fits true to size. Great airflow through the knit upper during hot afternoon runs.",
      helpfulCount: 6,
    },
  ],
  "trail-blazer": [
    {
      id: "r3",
      author: "Carlos Santos",
      rating: 5,
      date: "3 days ago",
      verified: true,
      title: "Incredible grip on wet rock",
      comment: "Took these up a muddy ridge. The rock plate protected my soles and the lugs never slipped once.",
      helpfulCount: 19,
    },
    {
      id: "r4",
      author: "Priya Sharma",
      rating: 4,
      date: "2 weeks ago",
      verified: true,
      title: "Tough and durable",
      comment: "Reinforced toe cap saved me from a painful stubbed toe. A bit stiff at first but broke in nicely.",
      helpfulCount: 8,
    },
  ],
  "pulse-buds": [
    {
      id: "r5",
      author: "David Kim",
      rating: 5,
      date: "Yesterday",
      verified: true,
      title: "ANC punches way above its price",
      comment: "Silences the subway roar effortlessly. Battery life easily lasts through a full workday.",
      helpfulCount: 22,
    },
    {
      id: "r6",
      author: "Chloe Vance",
      rating: 5,
      date: "5 days ago",
      verified: true,
      title: "Deep bass without muddiness",
      comment: "Clear highs and deep, punchy low end. USB-C fast charging is super convenient.",
      helpfulCount: 11,
    },
  ],
};

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "d1",
    author: "Taylor Reed",
    rating: 5,
    date: "4 days ago",
    verified: true,
    title: "Exceptional build quality",
    comment: "Exceeded my expectations straight out of the box. Everything feels premium and deliberate.",
    helpfulCount: 12,
  },
  {
    id: "d2",
    author: "Samir Patel",
    rating: 4,
    date: "2 weeks ago",
    verified: true,
    title: "Very satisfied with performance",
    comment: "Reliable daily companion. Does exactly what the specs promised with zero hassle.",
    helpfulCount: 7,
  },
];

export default function Reviews({ productId }: { productId: string }) {
  const [filterRating, setFilterRating] = useState<number | "all">("all");
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, boolean>>({});

  const reviewsList = SAMPLE_REVIEWS[productId] || DEFAULT_REVIEWS;

  const filtered = filterRating === "all"
    ? reviewsList
    : reviewsList.filter((r) => r.rating === filterRating);

  const avgRating = (
    reviewsList.reduce((acc, r) => acc + r.rating, 0) / reviewsList.length
  ).toFixed(1);

  const toggleHelpful = (id: string) => {
    setHelpfulVotes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="reviews-section" aria-label={`Customer reviews for product ${productId}`}>
      <div className="section-head">
        <h2 className="section-title">Verified Customer Reviews</h2>
        <span className="section-count">{reviewsList.length} reviews · {avgRating}★ average</span>
      </div>

      <div className="reviews-filter-bar">
        <span className="reviews-filter-label">Filter:</span>
        <button
          type="button"
          className={`chip ${filterRating === "all" ? "chip-active" : ""}`}
          onClick={() => setFilterRating("all")}
        >
          All ({reviewsList.length})
        </button>
        <button
          type="button"
          className={`chip ${filterRating === 5 ? "chip-active" : ""}`}
          onClick={() => setFilterRating(5)}
        >
          5 Stars ({reviewsList.filter((r) => r.rating === 5).length})
        </button>
        <button
          type="button"
          className={`chip ${filterRating === 4 ? "chip-active" : ""}`}
          onClick={() => setFilterRating(4)}
        >
          4 Stars ({reviewsList.filter((r) => r.rating === 4).length})
        </button>
      </div>

      <div className="reviews-list">
        {filtered.map((review) => {
          const isVoted = helpfulVotes[review.id];
          const count = review.helpfulCount + (isVoted ? 1 : 0);

          return (
            <article key={review.id} className="review-card">
              <div className="review-head">
                <div className="review-author-info">
                  <span className="review-avatar">{review.author[0]}</span>
                  <div>
                    <h3 className="review-author">{review.author}</h3>
                    {review.verified && (
                      <span className="review-verified">✓ Verified Buyer</span>
                    )}
                  </div>
                </div>
                <div className="review-rating-wrap">
                  <span className="stars-fill" style={{ width: "100%", color: "var(--gold)" }}>
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                  </span>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>

              <h4 className="review-title">{review.title}</h4>
              <p className="review-comment">{review.comment}</p>

              <div className="review-footer">
                <button
                  type="button"
                  className={`review-helpful-btn ${isVoted ? "helpful-active" : ""}`}
                  onClick={() => toggleHelpful(review.id)}
                >
                  👍 Helpful ({count})
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
