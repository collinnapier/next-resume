import Image from "next/image";

export default function Employment() {
  return (
    <>
      <section className='padding-block-900 splash'>
        <div className='container'>
          <div className='even-columns'>
            <div className='flow'>
              <h1 className='fs-primary-heading fw-bold text-neutral-100'>
                Employment
              </h1>
              <p className='text-neutral-100'>Where I have worked.</p>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <main>
        <section className='container padding-block-700'>
          <div className='card'>
            <div>
              <Image src='img/army-logo.svg' alt='' width={200} height={200} />
            </div>
            <div>
              <h2 className='fs-secondary-heading fw-bold'>
                Army National Guard
              </h2>
              <p>
                I am currently a Team Leader in the Army National Guard. I have
                been enlisted since December of 2020. Currently I am deployed
                overseas and will return in August of 2023. As a team leader it
                is my reponsibility to train soldiers and maintain their
                welfare.
              </p>
            </div>
          </div>
        </section>
        <section className='container padding-block-700'>
          <div className='card'>
            <div>
              <Image src='img/blank.svg' alt='' width={200} height={200} />
            </div>
            <div>
              <h2 className='fs-secondary-heading fw-bold'>
                Home Field Yard Service
              </h2>
              <p>
                I was the owner of a landscaping company between June 2018 and
                December 2020. We had roughly 20 clients during the summer
                months and had 2 employees.
              </p>
            </div>
          </div>
        </section>
        <section className='container padding-block-700'>
          <div className='card'>
            <div>
              <Image src='img/blank.svg' alt='' width={200} height={200} />
            </div>
            <div>
              <h2 className='fs-secondary-heading fw-bold'>Sweet Frog</h2>
              <p>
                I was an assistant manager at Sweet Frog between May 2017 and
                May 2018. My responsibilities included creating daily store
                revenue reports, overseeing staff, and handling customer issues.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
