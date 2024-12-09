import SliceInfo from "./components/SliceInfo";

export const App = () => {
  return (
    <div>
      <h2>Chart Information</h2>
      <SliceInfo sliceId={1} />
      <SliceInfo sliceId={2} />
    </div>
  );
};
