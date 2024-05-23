
import DonorCard from "@/components/UI/DonorCard";

const DonorListPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/all-donors", {
    next: {
      revalidate: 30,
    },
  });
  const { data: donors } = await res.json();


  return (
    <div className="max-w-screen-xl mx-auto px-2 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {donors.map((donor: any) => (
          <DonorCard donor={donor} key={donor.id} />
        ))}
      </div>
    </div>
  );
};

export default DonorListPage;
