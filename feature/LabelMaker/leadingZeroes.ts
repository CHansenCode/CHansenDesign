export function leadingZeroes(index: number) {
  if (index < 10) {
    return `00000${index}`;
  }
  if (index < 100) {
    return `0000${index}`;
  }
  if (index < 1000) {
    return `000${index}`;
  }
  if (index < 10000) {
    return `00${index}`;
  }
  if (index < 100000) {
    return `0${index}`;
  }
  return `${index}`;
}
