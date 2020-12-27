import Mock from "mockjs";

Mock.mock(/\/api\/login/, () => {
  return {
    code: 0,
    result: {},
    message: "成功"
  };
});

export default Mock;