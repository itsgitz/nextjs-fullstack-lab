export default async function CreateEvent() {
  async function createEvent(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name"),
      location: formData.get("location"),
      description: formData.get("description"),
    };

    console.log("form", rawFormData);
  }

  return (
    <div className="py-3">
      <h1 className="font-bold text-3xl">Create Event</h1>
      <form action={createEvent}>
        <div className="m-1">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Event name ..."
            className="text-black p-3 rounded"
          />
        </div>
        <div className="m-1">
          <button
            type="submit"
            className="font-bold px-3 py-2 bg-white text-black rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
