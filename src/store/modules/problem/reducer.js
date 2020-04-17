import produce from 'immer';

const INITIAL_STATE = {
    loading: false,
};

export default function problem(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case '@problem/PROBLEM_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@problem/PROBLEM_REQUEST_SUCCESS': {
                draft.loading = false;
                break;
            }
            case '@problem/PROBLEM_REQUEST_FAILURE': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
