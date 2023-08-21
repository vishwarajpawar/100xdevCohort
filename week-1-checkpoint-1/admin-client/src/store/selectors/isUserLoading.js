import { userState } from "../atoms/user";
import {selector} from 'recoil';

export const isUserLoading = selector({

        key: 'isUserLoadingState',
        get: ({get}) => {
            const state = get(userState);
            return state.isLoading;
        }
});