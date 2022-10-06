function CodersList({ coders }) {
  return (
    <div className="coders-list">
      {coders.map((coder) => (
        <div className="coder" key={coder.id}>
          <h2>{coder.name}</h2>
          <p>{coder.description}</p>
        </div>
      ))}
    </div>
  );
}
export default CodersList;
