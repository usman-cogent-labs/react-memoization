import { memo } from 'react';

const MemoedSwatch = ({ color }) => {
  console.log(`Memoed swatch rendered ${color}`);
  return (
    <div style={{ width: 75, height: 75, margin: 2, backgroundColor: color }} />
  );
};

export default memo(MemoedSwatch);
