"use client";

import { useGetAllBlogsQuery } from "@/redux/api/blogApi";
import Link from "next/link";

const ManageBlogs = () => {
  const { data: blogs } = useGetAllBlogsQuery({});

  console.log(blogs)
  return (
    <div>
      <h1 className="text-2xl text-center">Blogs Management</h1>

      <div className="flex justify-between">
        <span className="bg-emerald-500 py-2 px-3 rounded-sm text-white">
          Total Blogs: {blogs.length || 10}
        </span>
        <Link
          href={"/dashboard/admin/manage-blog/add-blog"}
          className="bg-emerald-500 py-2 px-3 rounded-sm text-white"
        >
          Add Blog
        </Link>
      </div>
    </div>
  );
};

export default ManageBlogs;
