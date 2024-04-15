import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { postNewMovie } from "../../../redux/moviesOperations";
import { nanoid } from "nanoid";
import { FormContainer, LabelContainer } from "./AddForm.styled";
import { useNavigate } from "react-router-dom";



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


const MovieForm = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
  const onSubmit = (values, { resetForm }) => {
    dispatch(postNewMovie(values))
    console.log(values);
    navigate('/')
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <FormContainer>
            <LabelContainer>
              <label htmlFor="title">Title</label>
              <Field type="text" id="title" name="title" />
              <ErrorMessage name="title" component="div" />
            </LabelContainer>
            <LabelContainer>
              <label htmlFor="description">Description</label>
              <Field type="text" id="description" name="description" />
              <ErrorMessage name="description" component="div" />
            </LabelContainer>{" "}
            <LabelContainer>
              <label htmlFor="rating">Rating</label>
              <Field type="text" id="rating" name="rating" />
              <ErrorMessage name="rating" component="div" />
            </LabelContainer>{" "}
            <LabelContainer>
              <label htmlFor="release_date">Release date</label>
              <Field type="text" id="release_date" name="release_date" />
              <ErrorMessage name="release_date" component="div" />
            </LabelContainer>{" "}
            <LabelContainer>
              <label htmlFor="genre">Genre</label>
              <Field type="text" id="genre" name="genre" />
              <ErrorMessage name="genre" component="div" />
            </LabelContainer>{" "}
            <LabelContainer>
              <label htmlFor="actors">Actors</label>
              <Field type="text" id="actors" name="actors" />
              <ErrorMessage name="actors" component="div" />
            </LabelContainer>{" "}
            <LabelContainer>
              <label htmlFor="director">Director</label>
              <Field type="text" id="director" name="director" />
              <ErrorMessage name="director" component="div" />
            </LabelContainer>{" "}
            <LabelContainer>
              <label htmlFor="image">Image</label>
              <Field type="text" id="image" name="image" />
              <ErrorMessage name="image" component="div" />
            </LabelContainer>
            <button type="submit" onClick={onSubmit}>
              Add new Movie
            </button>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default MovieForm;
