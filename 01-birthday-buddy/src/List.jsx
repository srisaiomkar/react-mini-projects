import Person from "./Person";

const List = ({ people }) => {
  console.log(people);
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};
export default List;
