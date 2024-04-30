import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <svg
                    x="50%"
                    y={-1}
                    className="overflow-visible fill-gray-800/20"
                >
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                        fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
                    />
                </svg>
            </svg>
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Boost Your Site's Visibility on Video Platforms
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Enhance your online presence by automatically posting
                        replies on videos related to your site and keywords. Our
                        platform ensures your links reach a broader audience on
                        popular video sites like YouTube and Rumble, driving
                        more traffic directly to you.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                        >
                            Get Started Now
                        </a>
                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-white"
                        >
                            Learn How It Works{" "}
                            <ChevronRightIcon className="inline-block w-5 h-5 ml-1" />
                        </a>
                    </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <img
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt="Interactive dashboard displaying site links and video replies"
                            width={2432}
                            height={1442}
                            className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
