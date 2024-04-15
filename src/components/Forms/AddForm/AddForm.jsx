import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { postNewMovie } from "../../../redux/moviesOperations";
import { nanoid } from "nanoid";
import { FormContainer, Input, LabelContainer } from "./AddForm.styled";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const initialValues = {
  title: "",
  description: "",
  rating: "",
  release_date: "",
  genre: "",
  actors: "",
  director: "",
  image: "",
  id: nanoid(),
};

const movieSchema = yup.object().shape({
  id: yup.string().required("ID is required"),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(0, "Rating must be greater than or equal to 0")
    .max(10, "Rating must be less than or equal to 10"),
  release_date: yup
    .string()
    .required("Release date is required")
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Release date must be in YYYY-MM-DD format"
    ),
  genre: yup
    .array()
    .of(yup.string().required("Genre item is required"))
    .required("At least one genre is required"),
  actors: yup
    .array()
    .of(yup.string().required("Actor name is required"))
    .required("At least one actor is required"),
  director: yup.string().required("Director name is required"),
  image: yup
    .string()
    .url("Image URL must be a valid URL")
    .required("Image URL is required"),
});

const MovieForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(postNewMovie(values));
    console.log(values);
    navigate("/");
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={movieSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <FormContainer>
            <LabelContainer>
              <label htmlFor="title"></label>
              <Input type="text" id="title" name="title" placeholder="Title" />
              <ErrorMessage name="title" component="div" />
            </LabelContainer>
            <LabelContainer>
              <label htmlFor="description"></label>
              <Input
                type="text"
                id="description"
                name="description"
                placeholder="Description"
              />
              <ErrorMessage name="description" component="div" />
            </LabelContainer>
            <LabelContainer>
              <label htmlFor="rating"></label>
              <Input
                type="text"
                id="rating"
                name="rating"
                placeholder="Rating"
              />
              <ErrorMessage name="rating" component="div" />
            </LabelContainer>
            <LabelContainer>
              <label htmlFor="release_date"></label>
              <Input
                type="text"
                id="release_date"
                name="release_date"
                placeholder="Release Date"
              />
              <ErrorMessage name="release_date" component="div" />
            </LabelContainer>
            <LabelContainer>
              <label htmlFor="genre"></label>
              <Input type="text" id="genre" name="genre" placeholder="Genre" />
              <ErrorMessage name="genre" component="div" />
            </LabelContainer>
            <LabelContainer>
              <label htmlFor="actors"></label>
              <Input
                type="text"
                id="actors"
                name="actors"
                placeholder="Actors"
              />
              <ErrorMessage name="actors" component="div" />
            </LabelContainer>
            <LabelContainer>
              <label htmlFor="director"></label>
              <Input
                type="text"
                id="director"
                name="director"
                placeholder="Director"
              />
              <ErrorMessage name="director" component="div" />
            </LabelContainer>
            <LabelContainer>
              <label htmlFor="image"></label>
              <Input
                type="text"
                id="image"
                name="image"
                placeholder="Image(url)"
              />
              <ErrorMessage name="image" component="div" />
            </LabelContainer>
            <button type="submit">Add new Movie</button>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default MovieForm;
