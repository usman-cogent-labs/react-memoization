export default function Swatch({ color }) {
  console.log(`Swatch rendered ${color}`);
  return (
    <div style={{ width: 75, height: 75, margin: 2, backgroundColor: color }} />
  );
}
