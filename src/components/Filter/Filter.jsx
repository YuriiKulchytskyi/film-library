import { useDispatch, useSelector } from "react-redux";
import { selectFilter, selectMovies } from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";
import { Input } from "./Filter.styled";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return (
    <Input
      type="text"
      name="filter"
      placeholder="Search by title"
      value={filter}
      onChange={handleFilterChange}
      disabled={useSelector(selectMovies).length === 0}
    />
  );
}

export default Filter;
