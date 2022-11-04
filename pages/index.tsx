export default function Home() {
  return (
    <div className="container mx-auto px-7">
      <div className="bg-[#0000006b] fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex gap-6 items-center p-7 px-7">
          <div className="text-xl grow font-bold">Raihan Saputra</div>
          <ul className="hidden grow gap-12 md:flex">
            <li className="cursor-pointer text-gray-200 hover:text-white">
              Introduction
            </li>
            <li className="cursor-pointer text-gray-200 hover:text-white">
              Technology
            </li>
            <li className="cursor-pointer text-gray-200 hover:text-white">
              Works
            </li>
            <li className="cursor-pointer text-gray-200 hover:text-white">
              Contact
            </li>
          </ul>
          <ul className="gap-4 items-center hidden md:flex">
            <li className="text-gray-200 hover:text-white cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2rem"
                width="2rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
            </li>
            <li className="text-gray-200 hover:text-white cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2rem"
                width="2rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
              </svg>
            </li>
            <li className="text-gray-200 hover:text-white cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="1.75rem"
                viewBox="0 0 448 512"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
            </li>
          </ul>
          <div className="md:hidden text-gray-200 hover:text-white cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              height="1.75rem"
              width="1.75rem"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        </div>
      </div>

      <section className="h-screen flex justify-center flex-col relative">
        <h1 className=" mb-5 text-8xl font-bold ">
          Raihan Yudo <br /> Saputra
        </h1>
        <h2 className="mb-4 text-3xl font-bold">
          I'm a{' '}
          <span className="inline-block">
            <span className="inline-flex text-transparent bg-gradient-to-r bg-clip-text from-purple-700 to-blue-700">
              Full-stack Engineer <br />
              Front-end Engineer
            </span>
          </span>
        </h2>
        <p className="text-xl text-gray-300">
          A young passionate lazy programmer <br />
          that hate to write repetitive code.
        </p>
        <img
          src="/assets/images/earth.jpg"
          className="absolute z-[-1] md:left-[14rem]"
          alt="earth bg"
        />
        <img
          src="/assets/images/shuttle.png"
          className="hidden lg:block absolute z-[-1] right-0 top-[25rem] w-[20rem]"
          alt="space shuttle"
        />
      </section>
    </div>
  );
}
