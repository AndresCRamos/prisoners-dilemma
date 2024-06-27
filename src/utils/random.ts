export const random_move_with_prob = (desired_true_prob: number = 0.5) => {
  return Math.random() < desired_true_prob;
};

export function random_uniform(low: number, high: number): number {
  // Generate two uniformly distributed random numbers between 0 and 1
  const u1 = Math.random();
  const u2 = Math.random();

  // Apply the Box-Muller transform
  const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);

  // Adjust the result to the specified range [low, high]
  const mean = (low + high) / 2;
  const stddev = (high - low) / 6; // Approximation for 99.7% coverage

  return z0 * stddev + mean;
}
