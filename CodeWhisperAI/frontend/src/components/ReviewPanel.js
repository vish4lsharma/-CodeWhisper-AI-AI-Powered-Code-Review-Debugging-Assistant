import React from 'react';

function ReviewPanel({ review, debug }) {
  if (review) {
    return (
      <div>
        <h2>Code Review</h2>
        {review.suggestions.map((s, i) => (
          <p key={i}>{`Line ${s.line}: ${s.message} (${s.severity})`}</p>
        ))}
        <h3>Suggested Fixes</h3>
        {review.fixes.map((f, i) => <p key={i}>{f}</p>)}
      </div>
    );
  }
  if (debug) {
    return (
      <div>
        <h2>Debugging</h2>
        {debug.issues.map((i, idx) => (
          <p key={idx}>{`Line ${i.line}: ${i.message}`}</p>
        ))}
        <p><strong>Fix:</strong> {debug.fix}</p>
        <p><strong>Explanation:</strong> {debug.explanation}</p>
      </div>
    );
  }
  return <p>Enter code and click Review or Debug to see results.</p>;
}

export default ReviewPanel;