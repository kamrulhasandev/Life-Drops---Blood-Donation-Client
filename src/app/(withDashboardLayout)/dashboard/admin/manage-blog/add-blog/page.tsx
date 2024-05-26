"use client";

import { useForm } from "react-hook-form";
import { imageUpload } from "@/utils/imageUpload";
import { useAddBlogMutation } from "@/redux/api/blogApi";
import { toast } from "sonner";

const AddBlog = () => {
  const [addBlog, { isLoading: adding, isError, isSuccess }] =
    useAddBlogMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const imageData = await imageUpload(data.image[0]);
      console.log(imageData);
      const blogData = {
        title: data.title,
        description: data.description,
        image: imageData.data.display_url,
      };
      await addBlog(blogData);
      toast.success("Blog added successfully");
      console.log(blogData);
    } catch (error) {
      console.error("Failed to add blog", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Add Blog</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-6 w-full mx-auto"
      >
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="mb-2 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
            className={`py-2 px-4 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            placeholder="Enter blog title"
          />
          {errors.title && (
            <p className="text-red-500">{"Title is Required."}</p>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="description" className="mb-2 font-medium">
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            rows={5}
            className={`py-2 px-4 border ${
              errors.description ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            placeholder="Enter blog description"
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{"Description is Required."}</p>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="image" className="mb-2 font-medium">
            Image
          </label>
          <input
            type="file"
            id="image"
            {...register("image", { required: "Image is required" })}
            className={`py-2 px-4 border ${
              errors.image ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.image && (
            <p className="text-red-500">{"Image is Required."}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#EB2C29] text-white font-bold py-2 px-4 rounded-md"
          >
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
