export function calculateScoreForTarget(
  target: number,
  vocal: number,
  dance: number,
  visual: number
) {
  let remaining =
    target -
    1700 -
    Math.floor(
      (Math.min(vocal, 1500) + Math.min(dance, 1500) + Math.min(visual, 1500)) *
        2.3
    );
  let score = 0;

  if (remaining <= 0) {
    return 0;
  }

  // 0.3, 5000
  if (remaining <= 0.3 * 5000) {
    return Math.ceil(remaining / 0.3);
  }
  score += 5000;
  remaining -= 0.3 * 5000;

  // 0.15, 5000
  if (remaining <= 0.15 * 5000) {
    return score + Math.ceil(remaining / 0.15);
  }
  score += 5000;
  remaining -= 0.15 * 5000;

  // 0.08, Infinity
  return score + Math.ceil(remaining / 0.08);
}
