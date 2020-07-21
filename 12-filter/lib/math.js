export function clamp(value, min, max) {
    if (min > max) [min, max] = [max, min];
    if (value < min) return min;
    if (value > max) return max;
    return value;
}