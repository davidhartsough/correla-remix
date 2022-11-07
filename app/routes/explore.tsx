import { Form } from "@remix-run/react";

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
            <input name="name" type="text" />
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
