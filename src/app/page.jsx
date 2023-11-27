import Link from "next/link";
export default function Home() {
  return (
    <>
      {/*HEADER */}
      <header className="flex justify-center items-center bg-[url('../images/homeBg.jpg')] bg-cover bg-no-repeat px-[3.3rem] bg-center">
        <div className=" max-w-[1440px] text-[1.6rem] w-[100%] text-[var(--color-text-dark)] ">
          <div className="max-w-[53rem] w-[100%] my-[18rem]">
            <span className="uppercase bg-[var(--color-primary)] tracking-[0.8rem] pl-[0.8rem] text-center font-[500]">
              Medical Professionals
            </span>

            <h1 className="text-[5rem] mt-[1.4rem] font-bold text-[#143450] leading-[1.2]">
              Makes Your Health Better Will Makes Us Better
            </h1>
            <p className="mt-[2.3rem] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis mollitia, vitae similique laboriosam dolores neque
              itaque odit quae nam error doloribus saepe consequuntur omnis
              dignissimos est eum enim officiis nihil.
            </p>
            <Link href="/products">
              <button className="bg-[var(--color-secondary)] mt-[1.4rem] px-[4.1rem] py-[1.7rem] text-white ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* SECTION 1 */}
      <section className="flex justify-center">
        <div className="max-w-[1440px] w-[100%] px-[1.3rem] my-[15rem]">
          SECTION 1
        </div>
      </section>
    </>
  );
}
