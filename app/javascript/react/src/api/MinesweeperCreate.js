export async function getBoards() {
    // const url = `/api/v1/show/${params.id}`;
    const url = `/api/v1/boards/index`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Network response was not ok.");
      });
}