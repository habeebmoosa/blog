import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (

        <footer class="bg-white shadow dark:bg-gray-800 ">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" class="flex items-center mb-4 sm:mb-0">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white lg:ml-4">CStoAi</span>
                    </Link>
                    <div className="social-media-links flex flex-row gap-5 mb-4 sm:mb-0">
                        <Link to="https://www.facebook.comi" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500 transition-colors duration-200 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h8.3v-6.5h-2.2v-2.5h2.2V9.7c0-2.2 1.3-3.4 3.3-3.4.9 0 1.7.1 1.9.1v2.3h-1.3c-1 0-1.2.5-1.2 1.2v1.7h2.5l-.3 2.5h-2.2V21H20a1 1 0 001-1V4a1 1 0 00-1-1z" />
                            </svg>
                        </Link>
                        <Link to="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                        </Link>
                        <Link to="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500 transition-colors duration-200 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM9.5 18.5h-3v-9h3v9zm-1.5-10c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm10 10h-3v-4.5c0-1.328-.672-2.5-2-2.5s-2 1.172-2 2.5v4.5h-3v-9h3v1.5c.656-1.031 1.828-1.5 3-1.5 2.484 0 4 1.672 4 4.5v5.5z" />
                            </svg>
                        </Link>
                    </div>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/about" class="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" class="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" class="hover:underline">CStoAi</Link>. All Rights Reserved.</span>
            </div>
        </footer>


    );
}