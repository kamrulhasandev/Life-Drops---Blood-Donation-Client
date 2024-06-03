"use client";
import { useGetAllBlogsQuery } from "@/redux/api/blogApi";
import Image from "next/image";
import Link from "next/link";

const BlogSection = () => {
  const { data: blogs } = useGetAllBlogsQuery({});
  console.log(blogs);

  return (
    <div className="bg-[#E7E7E7] py-20">
      <div className="max-w-screen-xl mx-auto px-2">
        <div className="md:flex gap-10">
          {blogs?.slice(0, 3).map((item: any) => {
            // Convert createdAt to a readable format
            const formattedDate = new Date(item.createdAt).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );

            return (
              <Link href={`blogs/${item.id}`} key={item.id}>
                <div className="bg-white my-10 md:my-0 shadow-md">
                  <Image
                    src={item?.image}
                    height={400}
                    width={500}
                    alt="blogImg"
                  />
                  <div className="flex flex-col gap-5 p-5">
                    <div className="flex justify-between items-center ">
                      <p className="text-sm">{formattedDate}</p>
                      <p className="text-sm">Author: {`${item.user.firstName} ${item.user.lastName}`}</p>
                    </div>
                    <h3 className="text-red-600 font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      {item.description.slice(0, 150)}...Read more
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
