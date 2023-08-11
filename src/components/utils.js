export const getBackendUrl = () => {
    if (window._env_ !== undefined && window._env_.backendUrl !== undefined) return window._env_.backendUrl
    else return env.backendUrl
}
