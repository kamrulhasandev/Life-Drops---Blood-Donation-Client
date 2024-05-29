"use client";

import { useGetAllBlogsQuery } from "@/redux/api/blogApi";
import Image from "next/image";
import Link from "next/link";

const ManageBlogs = () => {
  const { data: blogs } = useGetAllBlogsQuery({});

  console.log(blogs);
  return (
    <div>
      <h1 className="text-2xl text-center">Blogs Management</h1>

      <div className="flex justify-between">
        <span className="bg-emerald-500 py-2 px-3 rounded-sm text-white">
          Total Blogs: {blogs?.length || 10}
        </span>
        <Link
          href={"/dashboard/admin/manage-blog/add-blog"}
          className="bg-emerald-500 py-2 px-3 rounded-sm text-white"
        >
          Add Blog
        </Link>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  No
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Photo
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                
              </tr>
            </thead>
            <tbody className="bg-white divide-y text-sm divide-gray-200">
              {blogs?.map((item: any, index: number) => (
                <tr key={item?.id}>
                  <td className="px-6 py-4 whitespace-no-wrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <Image src={item.image} height={50} width={50} alt="blog" />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {item?.title.slice(0, 50)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogs;
