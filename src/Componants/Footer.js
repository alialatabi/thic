export default function Footer() {
  return (
    <footer class="p-4 shadow md:px-6 md:py-8 bg-[#12567F]">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
          {/* <img src="" class="mr-3 h-8" alt="Flowbite Logo" /> */}
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Trust House Insurance Company
          </span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <ul className=" w-screen">
        <li class="my-6 bordre-b-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></li>
      </ul>
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022
        <a href="https://flowbite.com/" class="hover:underline">
          TrustHouse™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
