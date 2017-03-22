let initialState = {
  counting: 0,
  counting1: 0,
  counting2: 0,
  counting3: 0,
  counting4: 0,
  counting5: 0,
  clickflag: 0,
  clickflag1: 0

}
export function incrementReducer(state = initialState, action) {
  // console.log(state);
  switch (action.type) {
    case "INC_DEMO":
      {
        state.clickflag++;
        if (state.clickflag <= 1) {
          return Object.assign({}, state, {
            counting: state.counting + action.data
          })
        }
      }
    case "INC_DEMO1":
      {
        state.clickflag++;
        if (state.clickflag <= 1) {
          return Object.assign({}, state, {
            counting1: state.counting1 + action.data1
          })
        }
      }
    case "INC_DEMO2":
      {
        state.clickflag++;
        if (state.clickflag <= 1) {
          return Object.assign({}, state, {
            counting2: state.counting2 + action.data2
          })
        }
      }
    case "INC_DEMO3":
      {
        state.clickflag1++;
        if (state.clickflag1 <= 1) {
          return Object.assign({}, state, {
            counting3: state.counting3 + action.data3
          })
        }
      }
    case "INC_DEMO4":
      {
        state.clickflag1++;
        if (state.clickflag1 <= 1) {
          return Object.assign({}, state, {
            counting4: state.counting4 + action.data4
          })
        }
      }
    case "INC_DEMO5":
      {
        state.clickflag1++;
        if (state.clickflag1 <= 1) {
          return Object.assign({}, state, {
            counting5: state.counting5 + action.data5
          })
        }
      }
    default:return state;
 }
}