'use client';

import { useEffect, useState } from 'react';

export default function Who() {
  const [emojis, setEmojis] = useState(() =>
    [
      '🎹',
      '🍕',
      '🤖',
      '🍣',
      '🐶',
      '🌭',
      '🏍️',
      '🌮',
      '🦕',
      '🍺',
      '🤖',
      '🎵',
      '💰',
      '🎃',
      '⛺',
      '🍔',
      '👽',
      '🎮',
    ].sort(() => 0.5 - Math.random())
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setEmojis((prev) => [...prev.slice(1), prev[0]]);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [emojis]);

  return (
    <section className={'mb-8'}>
      <h3>Who</h3>
      <ul>
        <li>Husband and dad</li>
        <li>Denver, Colorado, USA</li>
        <li>
          Loves <span>{emojis[0]}</span>
        </li>
      </ul>
    </section>
  );
}
