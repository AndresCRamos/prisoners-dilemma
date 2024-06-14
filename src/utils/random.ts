export const random_move_with_prob = (desired_true_prob: number = 0.5) => {
  return Math.random() < desired_true_prob;
};
