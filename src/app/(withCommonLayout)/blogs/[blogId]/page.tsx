"use client";

import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import Image from "next/image";

type TParams = {
  params: {
    blogId: string;
  };
};

const BlogDetails = ({ params }: TParams) => {
  const { data: blog } = useGetSingleBlogQuery(params.blogId);

  const formattedDate = new Date(blog?.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log(blog);
  const formattedDescription = blog?.description.replace(/\n/g, "<br />");
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-2 py-10">
        <Image src={blog?.image} height={700} width={1000} alt="blogImg" />
        <div className="flex flex-col  gap-5">
          <div className="flex gap-20 pt-5">
            <p className="text-sm">{formattedDate}</p>
            <p className="text-sm">
              Author: {`${blog?.user.firstName} ${blog?.user.lastName}`}
            </p>
          </div>
          <h3 className="text-red-600 font-bold text-3xl">{blog?.title}</h3>
          <p
            className="text-sm text-gray-500"
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
