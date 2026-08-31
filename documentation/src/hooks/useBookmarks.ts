import { useEffect, useState } from 'react';

const K = 'bookmarks';

const read = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(K) || '[]');
  } catch {
    return [];
  }
};

export function useBookmarks() {
  const [b, s] = useState<string[]>([]);
  useEffect(() => s(read()), []);

  const toggleBookmark = (p: string) =>
    s((q) => {
      const n = q.includes(p) ? q.filter((x) => x !== p) : [...q, p];
      localStorage.setItem(K, JSON.stringify(n));
      return n;
    });

  const removeBookmark = (p: string) =>
    s((q) => {
      const n = q.filter((x) => x !== p);
      localStorage.setItem(K, JSON.stringify(n));
      return n;
    });

  const clearBookmarks = () =>
    s(() => {
      localStorage.setItem(K, '[]');
      return [];
    });

  return {
    bookmarks: b,
    isBookmarked: (p: string) => b.includes(p),
    toggleBookmark,
    removeBookmark,
    clearBookmarks,
  };
}
