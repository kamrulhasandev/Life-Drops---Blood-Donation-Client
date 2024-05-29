"use client";
import DonorCard from "@/components/UI/DonorCard";
import { useState, useEffect } from "react";

const DonorListPage = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    bloodType: "",
    canDonateBlood: "",
    search: "",
  });

  const [donors, setDonors] = useState([]);

  const handleSearchCriteriaChange = (field: any, value: any) => {
    setSearchCriteria((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const fetchDonors = async () => {
    try {
      const res = await fetch("https://life-drops-server.vercel.app/api/v1/all-donors");
      const { data: fetchedDonors } = await res.json();
      setDonors(fetchedDonors);
    } catch (error) {
      console.error("Error fetching donors:", error);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  const filteredDonors = donors.filter((donor: any) => {
    const bloodTypeMatch =
      !searchCriteria.bloodType ||
      donor.bloodType?.includes(searchCriteria.bloodType);

    const availabilityMatch =
      !searchCriteria.canDonateBlood ||
      donor.canDonateBlood === (searchCriteria.canDonateBlood === "true");

    const locationMatch =
      !searchCriteria.search ||
      donor.location
        ?.toLowerCase()
        .includes(searchCriteria.search.toLowerCase());

    return bloodTypeMatch && availabilityMatch && locationMatch;
  });

  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <h3 className="text-3xl text-center">Search Donor</h3>
      <div className="md:grid grid-cols-3 gap-5 py-5 mx-10">
        <select
          value={searchCriteria.bloodType}
          onChange={(e) =>
            handleSearchCriteriaChange("bloodType", e.target.value)
          }
          className="border w-full md:w0 border-red-500 px-3 py-2 rounded-lg focus:outline-none focus:border-red-700"
        >
          <option value="">Blood Group</option>
          <option value="A_POS">A+</option>
          <option value="A_NEG">A-</option>
          <option value="B_POS">B+</option>
          <option value="B_NEG">B-</option>
          <option value="O_POS">O+</option>
          <option value="O_NEG">O-</option>
          <option value="AB_POS">AB+</option>
          <option value="AB_NEG">AB-</option>
        </select>
        <select
          value={searchCriteria.canDonateBlood}
          onChange={(e) =>
            handleSearchCriteriaChange("canDonateBlood", e.target.value)
          }
          className="border  w-full md:w0 border-red-500 px-3 py-2 rounded-lg focus:outline-none focus:border-red-700"
        >
          
          <option value="true">Available</option>
          <option value="false">Unavailable</option>
        </select>

        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search by location"
          className="border w-full border-red-500 px-3 py-2 rounded-lg focus:outline-none focus:border-red-700"
          value={searchCriteria.search}
          onChange={(e) => handleSearchCriteriaChange("search", e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredDonors.map((donor: any) => (
          <DonorCard donor={donor} key={donor.id} />
        ))}
      </div>
    </div>
  );
};

export default DonorListPage;
