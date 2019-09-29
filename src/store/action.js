//更新全局loading函数
const updateAppLoading = appLoading => {
    return {
        type: "updateAppLoading",
        appLoading
    };
};

const decrement = () => {
    return {
        type: "decrement"
    };
};
export {
    updateAppLoading,
    decrement
}
