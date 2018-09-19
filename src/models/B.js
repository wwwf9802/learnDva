import pathToRegexp from 'path-to-regexp';
export default {

    namespace: 'bbb',

    state: {
        bbb: 'BBB'
    },

    subscriptions: {
        setup({
            dispatch,
            history
          }) {
            history.listen(location => {
                console.log(location.pathname);
                console.log(location.search)
                let match = pathToRegexp('/bbb').exec(location.pathname);
                if (match) {
                    dispatch({
                        type: 'bbb/save',
                        payload: {
                            aaa: 'subscriptions',
                            effects1: 'subscriptions',
                        }
                    });
                }

            })
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};