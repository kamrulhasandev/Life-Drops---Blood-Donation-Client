'use client'
import React, { useState, useEffect } from "react";

const bloodDonationTestimonials = [
  {
    role: "donor",
    name: "Kamrul",
    story:
      "I've been donating blood regularly for the past few years. Knowing that my blood can save someone's life motivates me to continue donating. It's a simple yet impactful way to give back to the community.",
  },
  {
    role: "donor",
    name: "Hasan",
    story:
      "After learning about the constant need for blood donations, I decided to become a donor. It's a small sacrifice for me, but it can make a huge difference for someone in need. Donating blood gives me a sense of fulfillment like no other.",
  },
  {
    role: "recipient",
    name: "Rafi",
    story:
      "I'll forever be grateful to blood donors for their lifesaving gift. When I was hospitalized due to severe anemia, blood transfusions were crucial for my recovery. Thanks to the generosity of donors, I'm alive and healthy today.",
  },
  {
    role: "recipient",
    name: "Mezhba",
    story:
      "As a cancer patient, I underwent numerous surgeries and treatments that required blood transfusions. Without the availability of donated blood, I wouldn't have made it through. I owe my life to the selfless donors who helped me during my darkest days.",
  },
  {
    role: "donor",
    name: "Tonmoy",
    story:
      "Donating blood is my way of giving back to the community and making a positive impact on others' lives. It's a simple act of kindness that can have a profound effect on someone in need. I encourage everyone to consider becoming blood donors.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bloodDonationTestimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = bloodDonationTestimonials[currentIndex];

  return (
    <div className="bg-[#EB2C29] min-h-[34vh] flex justify-center items-center">
    <div className="max-w-screen-xl mx-auto px-3">
      <div className="testimonial-container text-center">
        <p className="text-white text-lg font-semibold">{testimonial.story}</p>
        <p className="text-white text-sm font-light">- {testimonial.name}</p>
      </div>
    </div>
  </div>
  
  );
};

export default Testimonials;
