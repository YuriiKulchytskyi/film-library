export const Filters = () => {
  return (
    <>
      <label for="genre">Genge filter</label>

      <select name="genre" id="genre">
        <option value="crime">Crime</option>
        <option value="drama">Drama</option>
        <option value="comedy">Comedy</option>
        <option value="action">Action</option>
        <option value="thriller">Thriller</option>
        <option value="historical drama">Historical Drama</option>
        <option value="war">War</option>
        <option value="adventure">Adventure</option>
        <option value="fantasy">Fantasy</option>
        <option value="romance">Romance</option>
        <option value="sci-fi">Sci-fi</option>
        <option value="biography">Biography</option>
        <option value="history">History</option>
      </select>

      <label for="rating">Rating</label>

      <select name="rating" id="rating">
        <option value="top">From low to high</option>
        <option value="bot">From high to low</option>
      </select>
    </>
  );
};
