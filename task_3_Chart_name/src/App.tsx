import React from 'react';
import SliceInfo from "./components/SliceInfo";

export const App = () => {
  return (
    <div>
      <h2>Chart Information</h2>
      {/* Пример использования с sliceId = 1 */}
      <SliceInfo sliceId={1} />
      {/* Пример использования с sliceId = 2 */}
      <SliceInfo sliceId={2} />
      {/* Добавьте больше примеров по необходимости */}
    </div>
  );
};
