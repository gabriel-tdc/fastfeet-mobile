export function problemRequest(id, description) {
    return {
        type: '@problem/PROBLEM_REQUEST',
        payload: { id, description },
    };
}

export function problemRequestSuccess() {
    return {
        type: '@problem/PROBLEM_REQUEST_SUCCESS',
    };
}

export function problemRequestFailure() {
    return {
        type: '@problem/PROBLEM_REQUEST_FAILURE',
    };
}
