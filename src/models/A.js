let pro1=(num)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num)
        },2000)
    })
}
export default {

    namespace: 'aaa',

    state: {
        aaa: 'AAA',
        effects1:0,
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *effects1({payload }, { call, put }){
            console.log(payload);
            yield put({
                type: 'save',
                payload: {
                    ...payload,
                }
            });
            let num=yield call(pro1,payload.effects1);
            console.log(num)
            yield put({
                type: 'changeEffects1',
                payload: {
                    aaa:num+1,
                    effects1:num
                }
            });
        },

    },

    reducers: {
        save(state, action) {
            return { ...state, aaa:action.payload.aaa };
        },

        changeEffects1(state, action){
            return { ...state, ...action.payload };
        }
    },

};