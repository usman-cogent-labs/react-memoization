import { memo } from 'react';

const MemoedSwatch = ({ params, onClick }) => {
  console.log(`Memoed swatch rendered ${params.color}`);
  return (
    <div
      style={{
        width: 75,
        height: 75,
        margin: 2,
        backgroundColor: params.color,
      }}
      onClick={onClick}
    />
  );
};

export default memo(MemoedSwatch);
