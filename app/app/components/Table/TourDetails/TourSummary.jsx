function TourSummary({ tour }) {
  return (
    <section className="font-medium max-w-96 text-left hidden web:block">
      <h1>Summary</h1>
      <p className="font-normal text-wrap">{tour.summary}</p>
    </section>
  );
}

export default TourSummary;
