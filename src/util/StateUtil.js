export function animateStateValue(
  setter,
  start,
  end,
  increment,
  stepTime = 0.1
) {
  if (start === end) return;

  let current = start;
  increment = end > start ? increment : -increment;

  setInterval(() => {
    current += increment;
    if ((end > start && current >= end) || (end < start && current <= end))
      clearInterval(this);
    else setter(current);
  }, stepTime);
}
