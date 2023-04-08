const Person = ({ name, age, image }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h5>{name}</h5>
        <p>{age}</p>
      </div>
    </article>
  );
};
export default Person;
