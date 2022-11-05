import NavigationBar from '@/components/Navigation/Bar';

export default function Home() {
  return (
    <div className="container mx-auto px-7">
      <NavigationBar />

      <section className="h-screen flex justify-center flex-col relative">
        <h1 className=" mb-5 text-8xl font-bold ">
          Raihan Yudo <br /> Saputra
        </h1>
        <h2 className="mb-4 text-3xl font-bold">
          I&apos;m a{' '}
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
          className="hidden lg:block absolute z-[-1] right-0 top-[10rem] w-[40rem]"
          alt="space shuttle"
        />
      </section>
    </div>
  );
}
