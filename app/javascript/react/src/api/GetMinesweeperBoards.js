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

export async function getAllBoards() {
    const url = `/api/v1/boards/all`;
    let response = await fetch(url, {
        method: 'GET',
        headers: headers
    });

    let boards = await response.json();
    return await boards;
}

export async function getBoard(board_id) {
    const url = `/api/v1/boards/show/${board_id}`;
    let response = await fetch(url, {
        method: 'GET',
        headers: headers
    });

    let board = await response.json();
    return await board;
}

