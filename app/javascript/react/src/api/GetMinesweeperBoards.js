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
    let response = await fetch(url, {
        method: 'GET',
        headers: headers
    });

    let board = await response.json();
    let testResponse = await board;
    console.dir(testResponse);
    // return await testResponse;
}


