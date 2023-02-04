import { Input, Form, Btn } from './Searchbox.styled';
import { BsSearch } from 'react-icons/bs';

export const Searchbox = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const query = form.elements.query.value.toLowerCase();
    onSubmit(query);
    form.reset();
  };

  return (
    <div>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Input type="text" name="query" placeholder="Enter movie" />
        <Btn type="submit">
          <BsSearch
            style={{
              width: '30px',
              height: '30px',
              padding: '8px',
            }}
          />
        </Btn>
      </Form>
    </div>
  );
};
