import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  let router = useRouter();

  return (
    <>
      <Head>
        <title>Collin Napier</title>
        <meta name='description' content='Collin Napier Resume' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className='padding-block-900 splash'>
          <div className='container'>
            <div className='even-columns'>
              <div className='flow'>
                <h1 className='fs-primary-heading fw-bold text-neutral-100'>
                  Hello,
                </h1>
                <p className='text-neutral-100'>
                  I am Collin Napier, an aspiring IT professional.
                </p>
                <button
                  className='button'
                  onClick={() => {
                    router.push("/projects");
                  }}
                >
                  See Work
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </section>
        <section className='bg-accent-400 text-neutral-100 padding-block-700'>
          <div className='container'>
            <div className='even-columns'>
              <div className='flow flow-spacer-sm'>
                <h3 className='fs-500 fw-bold'>What I have Done.</h3>
                <p>
                  See some of the projects I have worked on. These are web
                  development projects I have worked on as a hobby and to help
                  others.
                </p>
                <button
                  className='button'
                  data-type='inverted'
                  onClick={() => {
                    router.push("/projects");
                  }}
                >
                  Projects
                </button>
              </div>
              <div className='flow flow-spacer-sm'>
                <h3 className='fs-500 fw-bold'>Where I have Worked.</h3>
                <p>
                  See where I am currently employed and what I have done in the
                  past.
                </p>
                <button
                  className='button'
                  data-type='inverted'
                  onClick={() => {
                    router.push("/employment");
                  }}
                >
                  Employment
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
