import { useForm } from "react-hook-form";
import { router } from "@inertiajs/react";
export default function FormSubmission() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        router.post("/reply", data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md"
        >
            <div className="mb-4">
                <label
                    htmlFor="websiteUrl"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Website URL
                </label>
                <input
                    type="url"
                    id="websiteUrl"
                    {...register("websiteUrl", {
                        required: "Website URL is required",
                    })}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="https://example.com"
                />
                {errors.websiteUrl && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.websiteUrl.message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label
                    htmlFor="keywords"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Keywords
                </label>
                <input
                    type="text"
                    id="keywords"
                    {...register("keywords", {
                        required: "Keywords are required",
                    })}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter keywords"
                />
                {errors.keywords && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.keywords.message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    {...register("description", {
                        required: "Description is required",
                    })}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Describe your site"
                    rows="4"
                />
                {errors.description && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.description.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Submit
            </button>
        </form>
    );
}
