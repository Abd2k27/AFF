export const truncateText = (text: string, limit: number): string => {
    if (!text || text.length <= limit) return text;

  return text.substring(0, limit) + "...";
}
