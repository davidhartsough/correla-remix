import { Form } from "@remix-run/react";

// TODO: Complete - style and ensure sends correct query search params
export default function ExploreRoute() {
  return (
    <main>
      <header>
        <h1>Explore</h1>
      </header>
      <section>
        <Form method="get" action="/discover">
          <fieldset>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" id="name" />
            <label htmlFor="identity">Identity</label>
            <input name="identity" type="text" id="identity" />
            <button
              type="submit"
              className="rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
            >
              Search
            </button>
          </fieldset>
        </Form>
      </section>
    </main>
  );
}
