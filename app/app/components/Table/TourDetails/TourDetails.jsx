function TourDetails({ tour }) {
  return (
    <div className=" flex flex-col font-medium leading-4 gap-6 hidden web:block">
      <section className="flex flex-col gap-2">
        <h1>Destioantion</h1>
        <p className="font-normal">{tour.destination}</p>
      </section>
      <section className="flex flex-col gap-2">
        <h1>Duration</h1>
        <p className="font-normal">{tour.estimatedDuration}min</p>
      </section>
      <section className="flex flex-col gap-2">
        <h1>Price</h1>
        <p className="font-normal">{tour.price} USD</p>
      </section>
    </div>
  );
}

export default TourDetails;
