function TourSummary({ tour }) {
  return (
    <section className="font-medium max-w-96 text-left hidden web:block">
      <h1>Summary</h1>
      <p className="font-normal text-wrap">
        {tour.summary} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Rem cum tempora in sit optio quam ut a inventore architecto. Deleniti
        temporibus esse magni quaerat, dolor fuga distinctio incidunt pariatur
        facilis!
      </p>
    </section>
  );
}

export default TourSummary;
