function TourDetails({ tour }) {
  return (
    <div className=" hidden  flex-col font-medium leading-4 gap-6 web:flex ">
      <section className="flex flex-col gap-4">
        <h1>Destioantion</h1>
        <p className="font-normal">{tour.destination}</p>
      </section>
      <section className="flex flex-col gap-4">
        <h1>Duration</h1>
        <p className="font-normal">{tour.estimatedDuration}min</p>
      </section>
      <section className="flex flex-col gap-4">
        <h1>Price</h1>
        <p className="font-normal">{tour.price} EUR</p>
      </section>
    </div>
  );
}

export default TourDetails;
