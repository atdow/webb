import { IReduxAction, IStoreState } from "types/index";

// 初始化state
const initialState: IStoreState = {
  isLogin: false, // 是否登陆
};

export default function (state = initialState, action: IReduxAction) {
  switch (action.type) {
    // 触发菜单选择
    case "test1": {
      const { selectedKeys } = action.payload;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
