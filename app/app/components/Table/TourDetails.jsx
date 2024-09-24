import Image from "next/image";

export default function TourDetails({ tour }) {
  return (
    <div className="flex justify-between">
      <td>
        <Image
          src={tour.thumbnailImageUrl}
          alt="thumnail-image"
          width={309}
          height={240}
          className="rounded-[5px] w-[309px] h-[240px] object-cover "
        />
      </td>
      <td>
        <section>
          <h1>Destioantion</h1>
          <p>{tour.destination}</p>
        </section>
        <section>
          <h1>Duration</h1>
          <p>{tour.duration}</p>
        </section>
        <section>
          <h1>Price</h1>
          <p>{tour.price}</p>
        </section>
      </td>
      <td>
        <sectin>
          <h1>Summary</h1>
          <p>{tour.summary}</p>
        </sectin>
      </td>
    </div>
  );
}
