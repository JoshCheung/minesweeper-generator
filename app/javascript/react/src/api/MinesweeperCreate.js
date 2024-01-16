const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export async function createBoard(boardData) {
    const url = `api/v1/boards/create`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(boardData)
        });

        if (!response.ok) {
            throw new Error(`Failed to create board: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error("Error creating board:", error);
        throw new Error("Failed to create board. Please try again.");
    }
}
