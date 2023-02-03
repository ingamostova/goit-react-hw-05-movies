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
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
