import React, { useState, useEffect } from 'react';

const KEY = 'bm';

export default function BookmarksPage() {
  const [items, setItems] = useState<string[]>([]);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    try {
      setItems(JSON.parse(localStorage.getItem(KEY) || '[]'));
    } catch {
      setItems([]);
    }
  }, []);

  const toggle = () => {
    const n = items.includes(currentPath)
      ? items.filter((x) => x !== currentPath)
      : [...items, currentPath];
    localStorage.setItem(KEY, JSON.stringify(n));
    setItems(n);
  };

  return (
    <button type="button" onClick={toggle}>
      {items.includes(currentPath) ? 'Y' : 'N'}
    </button>
  );
}
