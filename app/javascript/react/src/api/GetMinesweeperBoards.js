const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export async function getTenMostRecentBoards() {
    const url = `/api/v1/boards/most_recent`;
    let response = await fetch(url, {
        method: 'GET',
        headers: headers
    });

    let boards = await response.json();
    return await boards;
}

export async function getAllBoardsByPage(pageNumber) {
    const url = `/api/v1/boards/all?page=${pageNumber}`;
    let response = await fetch(url, {
        method: 'GET',
        headers: headers
    });

    let boards = await response.json();
    return await boards;
}

export async function getBoard(board_id) {
    const url = `/api/v1/boards/show/${board_id}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const board = await response.json();
        return board;
    } catch (error) {
        console.error('Error fetching board:', error);
        throw error;
    }
}

